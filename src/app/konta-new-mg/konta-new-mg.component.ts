import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { Konto, Rachunki } from '../konta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-konta-new-mg',
  templateUrl: './konta-new-mg.component.html',
  styleUrls: ['./konta-new-mg.component.css']
})
export class KontaNewMgComponent implements OnInit {

  widocznoscKonta = 'hidden';
  stankonta = '';
  zakladamkonto = '';
  pozycje: any;
  konta = Rachunki;
  tabelaOk: Array<any> = [];
  tabelaBrak: Array<any> = [];
  tabelaDodatkowe: Array<any> = [];

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


onKeyFN(value: string) { this.firstName = value;this.zakladamkonto = 'czekam';}
onKeyLN(value: string) { this.lastName = value;this.zakladamkonto = 'czekam';}
onKeyPa(value: string) { this.password = value;this.zakladamkonto = 'czekam';}
onKeyAc(value: string) { this.account = value;this.zakladamkonto = 'czekam';}
onKeyUs(value: string) { this.username = value;this.zakladamkonto = 'czekam';}
onKeyMo(value: string) { this.money = Number(value);this.zakladamkonto = 'czekam';}
onKeyDb(value: string) { this.debt = Number(value);this.zakladamkonto = 'czekam';}


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
    }
    )
    .catch(error => {
      this.zakladamkonto = pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName +  ' - problem ' +  error;
    }
    );
  }
}  