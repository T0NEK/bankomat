import { Component, OnInit } from '@angular/core';
import { kierunki_int, wersja_jezyk } from './historia.wersje';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { Router } from '@angular/router';
import axios from 'axios';



@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})


export class HistoriaComponent implements OnInit {

  osobaImie: string;
  osobaNazwisko: string;
  osobaKonto: string;
  naglowekText = 'Historia operacji';
  wlascicielText = 'właściciel konta';
  kontoText = 'numer konta bankowego';
  tytulText1 = 'operacja';
  tytulText2 = 'opis dyspozycji';
  tytulText3 = 'kwota';
  tytulText4 = 'saldo';
  pobieranieText = 'Pobieram dane'
  komunikatPobieranie = '';
  komunikatHistoria = 'hidden';
  nadawcaText = 'nadawca';
  odbiorcaText = 'odbiorca';
  jezyk: number;
  timer: any;
  url : string;
  czasZwloki = 3000;
  postep = 0;
  przyrost = 100;
  sukces = 'bg-success';
  procent = ' width: '+ this.postep +'% ';
  serwerOK = false;
  pozycje : any;
  kierunek : kierunki_int;
  wysokosc: any;
  element: any;
  style: any;
  
  
  constructor(private zmienne : ZmienneGlobalneService,private router:Router) 
  {
    this.jezyk = this.zmienne.getJezyk();
    this.osobaImie = this.zmienne.getOsobaImie();
    this.osobaNazwisko =  this.zmienne.getOsobaNazwisko();
    this.osobaKonto = this.zmienne.getKonto();
    this.url = this.zmienne.getURL() + 'transactions';
    this.kierunek = wersja_jezyk[this.jezyk].kierunek;
  }

  ngOnInit() 
  {
    this.naglowekText = wersja_jezyk[this.jezyk].naglowek;
    this.pobieranieText = wersja_jezyk[this.jezyk].pobieranie;
    this.nadawcaText = wersja_jezyk[this.jezyk].nadawca;
    this.odbiorcaText = wersja_jezyk[this.jezyk].odbiorca;
    this.tytulText1 = wersja_jezyk[this.jezyk].operacja;
    this.tytulText2 = wersja_jezyk[this.jezyk].dyspozycja;
    this.tytulText3 = wersja_jezyk[this.jezyk].kwota;
    this.tytulText4 = wersja_jezyk[this.jezyk].saldo;
    this.przyrost = 100 / (this.czasZwloki  / this.przyrost);

    this.postep = 0;
    this.timer = setInterval(()=>{this.pasek()},100);
    this.historia();
  }

  trackByMethod(index:number, el:any): number {
    return el.id;
  }
  
  pasek()
    {
      if (this.serwerOK) 
         { 
          if (this.timer) { clearInterval(this.timer) }
          this.komunikatPobieranie = 'hidde';
          this.element = document.querySelector("app-historia");
          this.style = this.element.currentStyle || window.getComputedStyle(this.element);
          this.wysokosc = ((this.element.clientHeight) - parseInt(this.style.paddingTop));
          this.element = document.querySelector("#gora");
          this.style = this.element.currentStyle || window.getComputedStyle(this.element);
          this.wysokosc = 'height: ' + (this.wysokosc - ( 1.2 * this.element.clientHeight)) + 'px';
          this.komunikatHistoria = '';
          this.pobieranieText = wersja_jezyk[this.jezyk].naglowek;
         }
      else
      {    
         this.postep = this.postep + this.przyrost;
      if (this.postep > 60) { this.sukces = 'bg-warning'; }
      if (this.postep > 80) { this.sukces = 'bg-danger'; }
      if (this.postep > 100) 
          { 
            this.procent = ' width: 100%';
            if (this.timer) { clearInterval(this.timer) };
            this.komunikatPobieranie = 'hidde';
            this.komunikatHistoria = 'hidden';
            this.pobieranieText = wersja_jezyk[this.jezyk].odmowa;
            
          }
      this.procent = ' width: ' + this.postep + '%';  
      }
    }


  historia()
  {  
  const header = {
      'Content-Type': 'application/json',
      'accept': 'application/json',
       'Authorization': 'Bearer ' + this.zmienne.getOsobaToken() 
    }
  const instance = axios.create({
              baseURL: this.url,
              timeout: 1000,
              headers: header
            });      
  instance.get( '/' + this.zmienne.getKontoID() 
   ).then(response => {
     console.log(response.data)
    this.pozycje = response.data;    
    this.serwerOK = true;
    })
    .catch(error => { 
    console.log(error)      
       }
    );
  }  


  

}
