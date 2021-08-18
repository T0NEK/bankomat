import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import axios from 'axios';
import { wersja_jezyk } from '../przelew/przelew.wersje';


@Component({
  selector: 'app-przelew-mg',
  templateUrl: './przelew-mg.component.html',
  styleUrls: ['./przelew-mg.component.css']
})
export class PrzelewMgComponent implements OnInit,OnDestroy {
  
  osobaImie: string;
  osobaNazwisko: string;
  osobaKonto: string;
  kwotaZł: string;
  kwotaGr: string;
  kwota = 0;
  timer: any;
  komunikatZero = 'hidden';
  kod = '';
  jezyk: number;
  dyspozycjaText = 'Dyspozycja przelewu z konta';
  wlascicielText = 'właściciel konta';
  kontoText = 'numer konta bankowego';
  kwotaText = 'Kwota Przelewu';
  kontoOdbiorcaText = 'numer konta odbiorcy';
  odbiorcaKonto = '';
  tytulText = 'Tytuł przelewu';
  tytulPrzelewu = '';
  odmowaText = 'Nie można przelać';
  wykonanieText = 'Wykonano przelew na kwotę'
  komunikatPrzelew = 'hidden';
  komunikatProgres = 'hidden';
  komunikatOdmowa = 'hidden';
  problemText = 'Problem z połączeniem - odmowa';
  wtokuText = 'Realizuję dyspozycję, czekaj';
  url : string;
  czasZwloki = 3000;
  postep = 0;
  przyrost = 100;
  sukces = 'bg-success';
  procent = ' width: ' + this.postep + '% ';
  postep1 = 100;
  przyrost1 = 100;
  procent1 = ' width: ' + this.postep1 + '% ';
  serwerOK= false;
  transOK= false;
  srodkiOK= false;
  odbiorcaOK= false;
  constructor(private zmienne: ZmienneGlobalneService,private router: Router )
   {
    this.osobaImie = this.zmienne.getOsobaImie();
    this.osobaNazwisko =  this.zmienne.getOsobaNazwisko();
    this.osobaKonto = this.zmienne.getKonto();
    this.kwotaZł = this.zmienne.getKwotaZl();
    this.kwotaGr = this.zmienne.getKwotaGr();
    this.kwota = +(this.kwotaZł + '.' + (this.kwotaGr.length == 1 ? ( '0' + this.kwotaGr ) : ( this.kwotaGr + '0' )));
    this.jezyk = this.zmienne.getJezyk();
    this.url = this.zmienne.getURL() + 'transaction';
    this.odbiorcaKonto = this.zmienne.getOdbiorcaKonto();
    this.tytulPrzelewu = this.zmienne.getTytul();
   }

   
  ngOnInit()
  {
    this.dyspozycjaText = wersja_jezyk[this.jezyk].dyspozycja;
    this.kontoText = wersja_jezyk[this.jezyk].konto;
    this.wlascicielText = wersja_jezyk[this.jezyk].wlasciciel;
    this.kontoOdbiorcaText = wersja_jezyk[this.jezyk].odbiorcakonto;
    this.kwotaText = wersja_jezyk[this.jezyk].kwota;
    this.tytulText = wersja_jezyk[this.jezyk].tytul;
    this.odmowaText = wersja_jezyk[this.jezyk].odmowa;
    this.wykonanieText = wersja_jezyk[this.jezyk].wykonanie;
    this.problemText = wersja_jezyk[this.jezyk].problem;
    this.wtokuText = wersja_jezyk[this.jezyk].wtoku;
    this.przyrost = 100 / (this.czasZwloki  / this.przyrost);
    this.przyrost1 = 100 / ( 5000  / this.przyrost1);
    if (this.zmienne.getKonto() != this.zmienne.getOdbiorcaKonto())
    {
    if(this.zmienne.getOdbiorcaKonto() != '')
    {  
    if (this.kwota == 0)  
      {
       this.komunikatZero = '';
       this.komunikatOdmowa = 'hidden';
       this.komunikatProgres = 'hidden';
       if (this.timer) { clearInterval(this.timer) }
       this.timer = setInterval(()=>{this.pasek1()},100);        
      }
      else
      {
        this.komunikatZero = 'hidden';        
        this.komunikatProgres = '';
        this.komunikatOdmowa = 'hidden';
        this.komunikatPrzelew = 'hidden';
        this.postep = 0;
        if (this.timer) { clearInterval(this.timer) } 
        this.zmienne.setMiejsce(this.zmienne.miejsca.puste);
        this.zmienne.sendUpdate();
        this.timer = setInterval(()=>{this.pasek()},100); 
        this.przelej(); 
      }
    }
    else
    {
      this.blad(wersja_jezyk[this.jezyk].brak);
    }  
    }
    else
    {
      this.blad(wersja_jezyk[this.jezyk].swoje);
    }  
  }

  pasek1()
  {    
       this.postep1 = this.postep1 - this.przyrost1;
    if (this.postep1 < 0) 
        { 
          if (this.timer) { clearInterval(this.timer) }
          this.zmienne.setMiejsce(this.zmienne.miejsca.przelew);
          this.zmienne.sendUpdate();
          this.router.navigate(['przelew']);     
        }
    this.procent1 = ' width: ' + this.postep1 + '%';  
  }

  pasek()
  {
    if (this.serwerOK) 
       { 
        if (this.transOK)
        {   
        if (this.srodkiOK) 
            { 
            if(this.odbiorcaOK)  { this.realizuj(); }
            else {this.bladOdbiorca();}   
            }
            else
            { this.blad( wersja_jezyk[this.jezyk].srodkibrak) }
        }
        else
        { this.blad(wersja_jezyk[this.jezyk].odmowa); }     
       }
    else
    {    
       this.postep = this.postep + this.przyrost;
    if (this.postep > 60) { this.sukces = 'bg-warning'; }
    if (this.postep > 80) { this.sukces = 'bg-danger'; }
    if (this.postep > 100) 
        { 
          if (this.timer) { clearInterval(this.timer) };
          this.blad(wersja_jezyk[this.jezyk].problem);
        }
    this.procent = ' width: ' + this.postep + '%';  
    }
  }

realizuj()
{
  this.komunikatPrzelew = '';
  this.komunikatProgres = 'hidden';
  this.komunikatOdmowa = 'hidden';
  if (this.timer) { clearInterval(this.timer) }
  this.zmienne.setMiejsce(this.zmienne.miejsca.przelewmg);
  this.zmienne.sendUpdate();    
  this.postep1 = 100;
  this.timer = setInterval(()=>{this.pasek1()},100); 
}

bladOdbiorca()
{
  this.serwerOK = false;
  this.srodkiOK = false;
  this.odbiorcaOK= false;
  this.transOK = false;  
  this.AddRachunek(); 
}


blad(gdzie: string)
{
  this.komunikatPrzelew = 'hidden';
  this.komunikatProgres = 'hidden';
  this.problemText = gdzie;
  this.komunikatOdmowa = '';
  if (this.timer) { clearInterval(this.timer) }
  this.zmienne.setMiejsce(this.zmienne.miejsca.przelewmg);
  this.zmienne.sendUpdate();    
  this.postep1 = 100;
  this.timer = setInterval(()=>{this.pasek1()},100); 
 }


AddRachunek()
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  const data = {
    "firstName": "brak danych",
    "lastName": "brak danych",
    "password": "5856",
    "username": 'założył: ' + this.zmienne.getOsobaNazwisko() + ' ' + this.zmienne.getOsobaNazwisko,
    "account": this.zmienne.getOdbiorcaKonto(),
    "money": 0,
    "debt": 0
  }
  
  axios.post( this.zmienne.getURL() + 'registration' , data, { headers }
    )
    .then(response => {
        this.przelej()
    }
    )
    .catch(error => {
      this.serwerOK = true;
      this.transOK = false;
    }
    );

}
 
przelej()
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  const data = {
    "toAccount": this.zmienne.getOdbiorcaKonto(),
    "description": this.zmienne.getTytul(),
    "amount": this.zmienne.getKwotaZl() + '.' + this.zmienne.getKwotaGr()
  }
  axios.post( this.url , data, { headers }
  )
  .then(response => {
    console.log('przelej')
    console.log(response)

    this.zmienne.setKwotaZl('');
    this.zmienne.setKwotaGr('');
    this.zmienne.setOdbiorcaKonto('');
    this.zmienne.setTytul('');
    this.serwerOK = true;
    this.srodkiOK = true;
    this.odbiorcaOK= true;
    this.transOK = true;
  }
  )
  .catch(error => {
      switch (error.response.status) {
      case 418:
        this.serwerOK = true;
        this.srodkiOK = false;
        this.odbiorcaOK= true;
        this.transOK = true;  
        break;
      case 404:
        this.serwerOK = true;
        this.srodkiOK = true;
        this.odbiorcaOK= false;
        this.transOK = true;    
        break;  
      default:
        this.serwerOK = true;
        this.transOK = false;
      break;
    }
  });
}  

ngOnDestroy() {
  if (this.timer) { clearInterval(this.timer) };
}

}