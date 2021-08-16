import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { Konto, Rachunki } from '../konta';
import { Router } from '@angular/router';


@Component({
  selector: 'app-konta-mg',
  templateUrl: './konta-mg.component.html',
  styleUrls: ['./konta-mg.component.css']
})
export class KontaMgComponent implements OnInit {

  stan = 'czekam';
  stankonta = 'czekam';
  zakladamkonta = 'czekam';
  zakladamkonto = 'czekam';
  skasowano = 'czekam';
  pozycje: any;
  konta = Rachunki;
  tabelaOk: Array<any> = [];
  tabelaBrak: Array<any> = [];
  tabelaDodatkowe: Array<any> = [];
  zalozone = 0;
  erory = 0;
  firstName = '';
  lastName = '';
  password = '';
  username = '';
  account= '';
  money= 0;
  debt= 0;
  pin = '';
  wysylajacy = '';
  pinwysylajacy = '';
  odbierajacy = '';
  kwota = 0;
  tytul = '';
  przelano = 'czekam';
  token = '';
  idwysylajacy = 0;

  constructor(private zmienne : ZmienneGlobalneService, private router: Router)
  {
    
  }

  ngOnInit() 
  {
    if (this.zmienne.getSerwis())
    {
    this.zmienne.setMiejsce(this.zmienne.miejsca.start);
    this.zmienne.sendUpdate();   
    }
    else
    {
      this.zmienne.setMiejsce(this.zmienne.miejsca.jezyki);
      this.zmienne.sendUpdate();   
      this.router.navigate(['jezyki']);      
    }
  }

callW(value: string) { this.wysylajacy = value; }
callO(value: string) { this.odbierajacy = value; }
onKeyKwota(value: string) { this.kwota = Number(value);}
onKeyTytul(value: string) { this.tytul = value;}
onKeyPin(value: string) { this.pinwysylajacy = value}


Przelew()
{
if ((this.wysylajacy != '')&&(this.odbierajacy != '')&&(this.kwota >= 0)&&(this.tytul != '')&&(this.wysylajacy != this.odbierajacy))
{
  this.zaloguj()
}
}

zaloguj()
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
  const data = {
    "username": this.wysylajacy,
    "password": this.pinwysylajacy
  }
  axios.post( this.zmienne.getURL() + 'auth'  , data
  )
  .then(response => {
    this.token = response.data.bearer;
    this.idwysylajacy = response.data.id;
    this.przelano = 'zalogowany';
    this.przelej();
      }
  )
  .catch(error => 
    { 
    this.przelano = 'błąd logowania: ' + error;
    }
  );
}  


przelej()
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.token
  }
  const data = {
    "toAccount": this.odbierajacy,
    "description": this.tytul,
    "amount": this.kwota
  }
  axios.post( this.zmienne.getURL() + 'transaction' , data, { headers }
  )
  .then(response => {
    this.przelano = 'wykonano przelew'

  }
  )
  .catch(error => {
    this.przelano = 'błąd logowania: ' + error;
  });
}  


SprawdzKonta()
{
  this.tabelaBrak.splice(0);
  this.tabelaOk.splice(0);
for (let index_dane = 0; index_dane < this.konta.length; index_dane++) 
  { 
    const el_dane = this.konta[index_dane];
    let jest = false;
    for (let index_baza = 0; index_baza < this.pozycje.length; index_baza++) 
    {
      const el_baza = this.pozycje[index_baza];
      if (el_dane.account == el_baza.account) 
        { jest = true;
          this.tabelaOk.push(' konto: ' + el_dane.firstName + ' ' + el_dane.lastName + '; możliwy debet = ' + el_baza.debt + '; stan = ' + el_baza.money +' zł.' );
          break 
        }
    }
    if (!jest)
     { this.tabelaBrak.push([' konto: ' + el_dane.firstName + ' ' + el_dane.lastName, index_dane] )}
  } 
  this.tabelaDodatkowe.splice(0);
for (let index_dane = 0; index_dane < this.pozycje.length; index_dane++) 
  { 
    const el_dane = this.pozycje[index_dane];
    let jest = false;
    for (let index_baza = 0; index_baza < this.konta.length; index_baza++) 
    {
      const el_baza = this.konta[index_baza];
      if (el_dane.account == el_baza.account) 
        { jest = true;
          break 
        }
    }
    if (!jest)
     { this.tabelaDodatkowe.push([' konto: ' + el_dane.account + ' dla: ' + el_dane.firstName + ' ' + el_dane.lastName+ '; możliwy debet = ' + el_dane.debt + '; stan = ' + el_dane.money +' zł.', index_dane] )}
  } 
}


DodajKonta()
{
  this.zalozone = 0;
  this.erory = 0;
  for (let index_dane = 0; index_dane < this.tabelaBrak.length; index_dane++) 
  { 
    const el_dane = this.tabelaBrak[index_dane];

    this.AddRachunek(this.konta[el_dane[1]]);
  }
  const el_dane = this.tabelaBrak[0];
}

onKeyFN(value: string) { this.firstName = value;this.zakladamkonto = 'czekam';}
onKeyLN(value: string) { this.lastName = value;this.zakladamkonto = 'czekam';}
onKeyPa(value: string) { this.password = value;this.zakladamkonto = 'czekam';}
onKeyAc(value: string) { this.account = value;this.zakladamkonto = 'czekam';}
onKeyUs(value: string) { this.username = value;this.zakladamkonto = 'czekam';}
onKeyMo(value: string) { this.money = Number(value);this.zakladamkonto = 'czekam';}
onKeyDb(value: string) { this.debt = Number(value);this.zakladamkonto = 'czekam';}


AddNewRachunek()
{ 
  this.zalozone = 0;
  this.erory = 0;
 let ok = false;  
if (this.firstName != '' )
  {
    if (this.lastName != '' )
    {
      if (this.password != '' )
      {
        if (this.account != '' )
        {
          if (this.username == '' )
          {
              this.username = this.account;
          }
          if (this.debt <= 0 )
            {
              ok = true;
              this.AddRachunekNew()
            }
        }
      }
    }
  }
  if (ok) { this.zakladamkonto = 'zakładam konto';}
  else { this.zakladamkonto = 'nieprawidłowe dane'}
}


AddRachunekNew()
{
  this.zakladamkonto = 'zakładam konto: ' +  this.firstName + ' ' + this.lastName;
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  const data = {
    "firstName": this.firstName,
    "lastName": this.lastName,
    "password": this.password,
    "username": this.username,
    "account": this.account,
    "money": this.money,
    "debt": this.debt
  }
  
  axios.post( this.zmienne.getURL() + 'registration' , data, { headers }
    )
    .then(response => {
      this.zalozone++;
      this.zakladamkonto = 'założone = ' + this.zalozone + ', problem = ' + this.erory + '   (konto: ' +  this.firstName + ' ' + this.lastName + ' założone)';
      console.log(response)
    }
    )
    .catch(error => {
      this.erory++;
      this.zakladamkonto = 'założone = ' + this.zalozone + ', problem = ' + this.erory +  '   (problem z kontem: ' +  this.firstName + ' ' + this.lastName +')';
      console.log(error)
    }
    );

}  


AddRachunek(pozycja : any)
{
  this.zakladamkonta = 'zakładam konto: ' +  pozycja.firstName + ' ' + pozycja.lastName;
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  const data = {
    "firstName": pozycja.firstName,
    "lastName": pozycja.lastName,
    "password": pozycja.password,
    "username": pozycja.username,
    "account": pozycja.account,
    "money": pozycja.money,
    "debt": pozycja.debt
  }
  
  axios.post( this.zmienne.getURL() + 'registration' , data, { headers }
    )
    .then(response => {
      this.zalozone++;
      this.zakladamkonta = 'założone = ' + this.zalozone + ', problem = ' + this.erory + '   (konto: ' +  pozycja.firstName + ' ' + pozycja.lastName + ' założone)';
      console.log(response)
    }
    )
    .catch(error => {
      this.erory++;
      this.zakladamkonta = 'założone = ' + this.zalozone + ', problem = ' + this.erory +  '   (problem z kontem: ' +  pozycja.firstName + ' ' + pozycja.lastName +')';
      console.log(error)
    }
    );

}  

GetKonta()
{
  const header = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
const instance = axios.create({
            baseURL: this.zmienne.getURL(),
            timeout: 3000,
            headers: header
          });               
instance.get( '/accounts'
 ).then(response => {
  this.pozycje = response.data;
  console.log(this.pozycje)
  this.stankonta = 'wczytane';
  this.SprawdzKonta();
  })
  .catch(error => { 
  console.log(error)      
  this.stankonta = 'problem' + error;  
     }
  );
}


Kasuj()
{
if (this.pin == 'startBANK0MAT')
{  
axios.delete(this.zmienne.getURL() + 'accounts/deleteAll')
.then(responde=>{this.skasowano = ' Skasowano wszystko'})
.catch(error=>{this.skasowano = ' Jakiś problem ze skasowaniem'})
}
else
{
  this.skasowano = ' błędny PIN';
}
} 

onKeyPIN(value: string) { this.pin = value ;this.skasowano = 'czekam';}

}
