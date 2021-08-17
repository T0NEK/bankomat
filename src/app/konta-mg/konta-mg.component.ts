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
  pozycje: any;
  konta = Rachunki;
  tabelaBrak: Array<any> = [];
  tabelaDodatkowe: Array<any> = [];
  tabelaOk: Array<{imie: string, nazwisko: string, debet: number, saldo: number}> = [];
  
 
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
          //this.tabelaOk.push(' konto: ' + el_dane.firstName + ' ' + el_dane.lastName + '; możliwy debet = ' + el_baza.debt + '; stan = ' + el_baza.money +' zł.' );
          this.tabelaOk.push({imie: el_dane.firstName, nazwisko: el_dane.lastName, debet: el_dane.debt, saldo: el_dane.money})
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
console.log( this.tabelaOk)
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

}
