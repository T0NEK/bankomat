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

  stankonta = '';
  konta = Rachunki;
  pozycja =  {
    firstName: '',
    lastName: '',
    password: '',
    account: '',
    username: '',
    money: 0,
    debt: 0,
  }

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


onKeyFN(value: string) { this.pozycja.firstName = value}
onKeyLN(value: string) { this.pozycja.lastName = value}
onKeyPa(value: string) { this.pozycja.password = value}
onKeyAc(value: string) { this.pozycja.account = value}
onKeyUs(value: string) { this.pozycja.username = value}
onKeyMo(value: string) { this.pozycja.money = Number(value)}
onKeyDb(value: string) { this.pozycja.debt = Number(value)}


Dodaj()
{
 let ok = false;  
if (this.pozycja.firstName != '' )
  {
    if (this.pozycja.lastName != '' )
    {
      if (this.pozycja.password != '' )
      {
        if (this.pozycja.account != '' )
        {
          if (this.pozycja.username == '' )
          {
            this.pozycja.username = 'założył MG';
          }
          if (this.pozycja.debt <= 0 )
            {
              ok = true;
              this.AddRachunekNew(this.pozycja)
            }
        }
      }
    }
  }
  if (ok) { this.stankonta = 'zakładam konto: ' + this.pozycja.account + ' dla: ' + this.pozycja.firstName + ' ' + this.pozycja.lastName;}
  else { this.stankonta = 'nieprawidłowe dane'}
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
      this.stankonta = pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName + ' - założone';
    }
    )
    .catch(error => {
      this.stankonta = pozycja.account + ' dla: ' + pozycja.firstName + ' ' + pozycja.lastName +  ' - problem ' +  error;
    }
    );
  }
}  