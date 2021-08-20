import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { Konto, Rachunki } from '../konta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-przelew-all-mg',
  templateUrl: './przelew-all-mg.component.html',
  styleUrls: ['./przelew-all-mg.component.css']
})
export class PrzelewAllMgComponent implements OnInit {

  widocznoscKonta = 'hidden'

  stankonta = '';
  pozycje: any;
  konta = Rachunki;
  tabelaOk: Array<Konto> = [];
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
    this.GetKonta();
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
          this.tabelaOk.push({account: el_dane.account, firstName: el_dane.firstName, lastName: el_dane.lastName, debt: el_dane.debt, money: el_dane.money, password: el_dane.password, username: el_dane.username})
          break 
        }
    }
  } 
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
     { this.tabelaOk.push({account: el_dane.account, firstName: el_dane.firstName, lastName: el_dane.lastName, debt: el_dane.debt, money: el_dane.money, password: el_dane.password, username: el_dane.username})}
  } 
}

GetKonta()
{
  this.stankonta = 'wczytuję';
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
  this.stankonta = 'wczytane';
  this.SprawdzKonta();
  })
  .catch(error => {    
  this.stankonta = 'problem ' + error;  
     }
  );
}


}
