import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from '../wyplata/wyplata.wersje';
import axios from 'axios';

@Component({
  selector: 'app-wyplata-mg',
  templateUrl: './wyplata-mg.component.html',
  styleUrls: ['./wyplata-mg.component.css']
})


export class WyplataMgComponent implements OnInit,OnDestroy {
  
  osobaImie: string;
  osobaNazwisko: string;
  osobaKonto: string;
  kwota: string;
  jednosci: string;
  timer: any;
  komunikatZero = 'hidden';
  komunikatMg = '';
  kod = '';
  komunikatWyplata = 'hidden';
  jezyk: number;
  dyspozycjaText = 'Dyspozycja wypłaty z konta';
  wlascicielText = 'właściciel konta';
  kontoText = 'numer konta bankowego';
  kwotaText = 'Kwota Wypłaty';
  odmowaText = 'Nie można wypłacić';
  mgText = '(Wymagane zatwierdzenie przez MG)';
  wykonanieText = 'Wykonano wypłatę na kwotę'
  komunikatWplata = 'hidden';
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
  MgOK= false;
  srodkiOK= false;
  constructor(private zmienne: ZmienneGlobalneService,private router: Router )
   {
    this.osobaImie = this.zmienne.getOsobaImie();
    this.osobaNazwisko =  this.zmienne.getOsobaNazwisko();
    this.osobaKonto = this.zmienne.getKonto();
    this.kwota = this.zmienne.getKwotaZl();
    this.jednosci = this.kwota[this.kwota.length -1];
    this.jezyk = this.zmienne.getJezyk();
    this.url = this.zmienne.getURL() + 'payout';
   }

   @HostListener('window:keydown', ['$event'])
   handleKeyDown(event: KeyboardEvent) 
   {
     if (event.key.length == 1 ) 
        {this.kod = this.kod + (event.key)}
        else
        { switch (event.key) {
          case 'Backspace':
            this.kod = this.kod.substr(0,this.kod.length - 1); 
            break;
          case 'Enter':
            if (!this.timer)
            {
             this.komunikatMg = 'hidden';
             this.MgOK = false;
             this.komunikatProgres = '';
             this.komunikatOdmowa = 'hidden';
             this.komunikatWplata = 'hidden';
             this.postep = 0;
             this.zmienne.setMiejsce(this.zmienne.miejsca.puste);
             this.zmienne.sendUpdate();
             this.timer = setInterval(()=>{this.pasek()},100); 
            };
            break;  
          default:
            break;
        } }
     if (this.kod == this.zmienne.getKodMG())
       {
        this.komunikatMg = 'hidden';
        this.MgOK = true;
        this.komunikatProgres = '';
        this.komunikatOdmowa = 'hidden';
        this.komunikatWplata = 'hidden';
        this.postep = 0;
        if (this.timer) { clearInterval(this.timer) } 
        this.zmienne.setMiejsce(this.zmienne.miejsca.puste);
        this.zmienne.sendUpdate();
        this.timer = setInterval(()=>{this.pasek()},100); 
        this.wyplac(); 
       }
    }

  ngOnInit()
  {
    this.mgText = wersja_jezyk[this.jezyk].mg;
    this.dyspozycjaText = wersja_jezyk[this.jezyk].dyspozycja;
    this.kontoText = wersja_jezyk[this.jezyk].konto;
    this.wlascicielText = wersja_jezyk[this.jezyk].wlasciciel;
    this.kwotaText = wersja_jezyk[this.jezyk].kwota;
    this.odmowaText = wersja_jezyk[this.jezyk].odmowa;
    this.wykonanieText = wersja_jezyk[this.jezyk].wykonanie;
    this.problemText = wersja_jezyk[this.jezyk].problem;
    this.wtokuText = wersja_jezyk[this.jezyk].wtoku;
    this.przyrost = 100 / (this.czasZwloki  / this.przyrost);
    this.przyrost1 = 100 / ( 5000  / this.przyrost1);
    if ((this.kwota == '0') || (this.jednosci != '0')) 
      {
       this.komunikatZero = '';
       this.komunikatMg = 'hidden';
       this.komunikatOdmowa = 'hidden';
       this.komunikatProgres = 'hidden';
       if (this.timer) { clearInterval(this.timer) }
       this.timer = setInterval(()=>{this.pasek1()},100);        
      }
      else
      {
        this.komunikatZero = 'hidden';
        this.komunikatMg = '';
        this.komunikatOdmowa = 'hidden';
        this.komunikatProgres = 'hidden';  
      }
  }

  pasek1()
  {    
       this.postep1 = this.postep1 - this.przyrost1;
    if (this.postep1 < 0) 
        { 
          if (this.timer) { clearInterval(this.timer) }
          this.zmienne.setMiejsce(this.zmienne.miejsca.wyplata);
          this.zmienne.sendUpdate();
          this.router.navigate(['wyplata']);     
        }
    this.procent1 = ' width: ' + this.postep1 + '%';  
  }

  pasek()
  {
    if (this.serwerOK) 
       { 
        if (this.transOK)
        {   
        if (this.timer) { clearInterval(this.timer) }
        if (this.srodkiOK) 
            { this.realizuj(); }
            else
            { this.srodki() }
        }
        else
        { this.blad1(); }     
       }
    else
    {    
       this.postep = this.postep + this.przyrost;
    if (this.postep > 60) { this.sukces = 'bg-warning'; }
    if (this.postep > 80) { this.sukces = 'bg-danger'; }
    if (this.postep > 100) 
        { 
          if (this.timer) { clearInterval(this.timer) };
          if (this.MgOK) { this.blad2()}
          else { this.kodMG()}
        }
    this.procent = ' width: ' + this.postep + '%';  
    }
  }

  kodMG()
   {
    this.komunikatWplata = 'hidden';
    this.komunikatMg = 'hidden';
    this.komunikatProgres = 'hidden';
    this.problemText = wersja_jezyk[this.jezyk].errormg;
    this.komunikatOdmowa = '';
    if (this.timer) { clearInterval(this.timer) }
    this.zmienne.setMiejsce(this.zmienne.miejsca.wyplatamg);
    this.zmienne.sendUpdate();    
    this.postep1 = 100;
    this.timer = setInterval(()=>{this.pasek1()},100); 
   }

realizuj()
{
  this.komunikatWplata = '';
  this.komunikatMg = 'hidden';
  this.komunikatProgres = 'hidden';
  this.komunikatOdmowa = 'hidden';
  if (this.timer) { clearInterval(this.timer) }
  this.zmienne.setMiejsce(this.zmienne.miejsca.wyplatamg);
  this.zmienne.sendUpdate();    
  this.postep1 = 100;
  this.timer = setInterval(()=>{this.pasek1()},100); 
}

srodki()
{
  this.komunikatWplata = 'hidden';
    this.komunikatMg = 'hidden';
    this.komunikatProgres = 'hidden';
    this.problemText = wersja_jezyk[this.jezyk].srodkibrak;
    this.komunikatOdmowa = '';
    if (this.timer) { clearInterval(this.timer) }
    this.zmienne.setMiejsce(this.zmienne.miejsca.wyplatamg);
    this.zmienne.sendUpdate();    
    this.postep1 = 100;
    this.timer = setInterval(()=>{this.pasek1()},100); 
   
}

blad1()
{
  this.komunikatWplata = 'hidden';
  this.komunikatMg = 'hidden';
  this.komunikatProgres = 'hidden';
  this.problemText = wersja_jezyk[this.jezyk].odmowa;
  this.komunikatOdmowa = '';
  if (this.timer) { clearInterval(this.timer) }
  this.zmienne.setMiejsce(this.zmienne.miejsca.wyplatamg);
  this.zmienne.sendUpdate();    
  this.postep1 = 100;
  this.timer = setInterval(()=>{this.pasek1()},100); 
}

blad2()
{
  this.komunikatWplata = 'hidden';
  this.komunikatMg = 'hidden';
  this.komunikatProgres = 'hidden';
  this.problemText = wersja_jezyk[this.jezyk].problem;
  this.komunikatOdmowa = '';
  if (this.timer) { clearInterval(this.timer) }
  this.zmienne.setMiejsce(this.zmienne.miejsca.wyplatamg);
  this.zmienne.sendUpdate();    
  this.postep1 = 100;
  this.timer = setInterval(()=>{this.pasek1()},100); 
}
 
wyplac()
{
  const headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
     'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
  }
  const data = {
    "amount": this.kwota
  }
  axios.post( this.url , data, { headers }
  )
  .then(response => {
    this.zmienne.setKwotaZl('');
    this.zmienne.setKwotaGr('');
    this.serwerOK = true;
    this.srodkiOK = true;
    this.transOK = true;
  }
  )
  .catch(error => {
    if (error.response.status == 418)
    {
      this.serwerOK = true;
      this.srodkiOK = false;
      this.transOK = true;  
    }
    else
    {
      this.serwerOK = true;
      this.transOK = false;
    }
         }
  );
}  

ngOnDestroy() {
  if (this.timer) { clearInterval(this.timer) };
}

}
