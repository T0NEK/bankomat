import { Component, OnInit } from '@angular/core';
import { wersja_jezyk } from './stan-konta.wersje';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import axios from 'axios';

@Component({
  selector: 'app-stan-konta',
  templateUrl: './stan-konta.component.html',
  styleUrls: ['./stan-konta.component.css']
})
export class StanKontaComponent implements OnInit {

  osobaImie: string;
  osobaNazwisko: string;
  osobaKonto: string;
  naglowekText = 'Stan konta';
  wlascicielText = 'właściciel konta';
  kontoText = 'numer konta bankowego';
  pobieranieText = 'Pobieram dane'
  komunikatPobieranie = '';
  komunikatSaldo = 'hidden';
  saldoText = 'Stan konta';
  jezyk: number;
  timer: any;
  url : string;
  czasZwloki = 3000;
  postep = 0;
  przyrost = 100;
  sukces = 'success';
  procent = ' width: 0% ';
  serwerOK: boolean;
  stanKonta = 0;

  constructor(private zmienne : ZmienneGlobalneService) 
  { 
    this.jezyk = this.zmienne.getJezyk();
    this.osobaImie = this.zmienne.getOsobaImie();
    this.osobaNazwisko =  this.zmienne.getOsobaNazwisko();
    this.osobaKonto = this.zmienne.getKonto();
    this.url = this.zmienne.getURL() + 'accounts';
    this.serwerOK = false;
  }

  ngOnInit() 
  {
    this.naglowekText = wersja_jezyk[this.jezyk].naglowek;
    this.pobieranieText = wersja_jezyk[this.jezyk].pobieranie;
    this.kontoText = wersja_jezyk[this.jezyk].konto;
    this.wlascicielText = wersja_jezyk[this.jezyk].wlasciciel;
    this.saldoText = wersja_jezyk[this.jezyk].saldo
    this.przyrost = 100 / (this.czasZwloki  / this.przyrost);
    this.timer = setInterval(()=>{this.pasek()},100);
    this.stan();
  }

pasek()
  {
    if (this.serwerOK) 
       { 
        if (this.timer) { clearInterval(this.timer) }
        this.komunikatPobieranie = 'hidden';
        this.komunikatSaldo = '';
       }
    else
    {    
       this.postep = this.postep + this.przyrost;
    if (this.postep > 60) { this.sukces = 'warning'; }
    if (this.postep > 80) { this.sukces = 'danger'; }
    if (this.postep > 100) 
        { 
          if (this.timer) { clearInterval(this.timer) };
          this.pobieranieText = wersja_jezyk[this.jezyk].odmowa;
        }
    this.procent = ' width: ' + this.postep + '%';  
    }
  }

stan()
{ 
const instance = axios.create({
              baseURL: this.url,
              timeout: 1000,
              headers: {'Authorization': 'Bearer '+ this.zmienne.getOsobaToken(),
                        'Content-Type': 'application/json',
                        'accept': 'application/json'
                        }
            });      

instance.get( '/accountInfo' 
   ).then(response => {
      this.stanKonta = response.data.money;    
      this.serwerOK = true;}
   ).catch(error => {        }
  );
}

}
