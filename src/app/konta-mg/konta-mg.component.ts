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

  stankonta = 'czekam';
  zakladamkonto  = '';
  pozycje: any;
  konta = Rachunki;
  tabelaBrak: Array<Konto> = [];
  tabelaDodatkowe: Array<Konto> = [];
  tabelaOk: Array<Konto> = [];
  
 
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


Dodaj(pozycja: Konto)
{
 let ok = false;  
if (pozycja.firstName != '' )
  {
    if (pozycja.lastName != '' )
    {
      if (pozycja.password != '' )
      {
        if (pozycja.account != '' )
        {
          if (pozycja.username == '' )
          {
            pozycja.username = 'założył MG';
          }
          if (pozycja.debt <= 0 )
            {
              ok = true;
              this.AddRachunekNew(pozycja)
            }
        }
      }
    }
  }
  if (ok) { this.zakladamkonto = 'zakładam konto: ' + pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName;}
  else { this.zakladamkonto = 'nieprawidłowe dane'}
}
  

AddRachunekNew(pozycja: Konto)
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  
  axios.post( this.zmienne.getURL() + 'registration' , pozycja, { headers }
    )
    .then(response => {
      this.zakladamkonto = pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName + ' - założone';
      this.GetKonta();
    }
    )
    .catch(error => {
      this.zakladamkonto = pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName +  ' - problem ' +  error;
    }
    );

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
          this.tabelaOk.push({account: el_dane.account, firstName: el_dane.firstName, lastName: el_dane.lastName, debt: el_dane.debt, money: el_dane.money, password: el_dane.password, username: el_dane.username})
          break 
        }
    }
    if (!jest)
     { this.tabelaBrak.push({account: el_dane.account, firstName: el_dane.firstName, lastName: el_dane.lastName, debt: el_dane.debt, money: el_dane.money, password: el_dane.password, username: el_dane.username} )}
  } 
  this.tabelaDodatkowe.splice(0);
for (let index_dane = 0; index_dane < this.pozycje.length; index_dane++) 
  { 
    const el_dane = this.pozycje[index_dane];
    console.log(el_dane)
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
     { this.tabelaDodatkowe.push({account: el_dane.account, firstName: el_dane.firstName, lastName: el_dane.lastName, debt: el_dane.debt, money: el_dane.money, password: el_dane.password, username: el_dane.username})}
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
