import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './wplata.wersje';

@Component({
  selector: 'app-wplata',
  templateUrl: './wplata.component.html',
  styleUrls: ['./wplata.component.css']
})
export class WplataComponent implements OnInit {

  bufor = '';
  zlote = '';
  grosze = '';
  wartosc = 0;
  fokuszlote = '';
  fokusgrosze = 'dostep';
  jezyk: number;
  dyspozycjaText = 'Dyspozycja wpłaty na konto';
  zlText = 'Wartość zł';
  grText = 'Wartość gr';
  kwotaText = 'Kwota Wpłaty';

  constructor(private zmienne : ZmienneGlobalneService,private router :Router) 
  {
    this.jezyk = this.zmienne.getJezyk();
    this.zlote = this.zmienne.getKwotaZl();
    this.grosze = this.zmienne.getKwotaGr();
    this.wartosc =  Number( '0' + this.zlote);
  }

  ngOnInit() 
  {
    this.dyspozycjaText = wersja_jezyk[this.jezyk].dyspozycja;
    this.zlText = wersja_jezyk[this.jezyk].zl;
    this.grText = wersja_jezyk[this.jezyk].gr;
    this.kwotaText = wersja_jezyk[this.jezyk].kwota;
  }

  import(bufor: string) 
  {
    if (bufor == 'del')
     {
      if (this.fokuszlote == '') 
      { this.zlote = this.zlote.substr(0,this.zlote.length - 1); } 
     else 
      { this.grosze = this.grosze.substr(0,this.grosze.length - 1); }
    } 
     else 
     {
       if (this.fokuszlote == '') 
        { 
          this.zlote = this.zlote + bufor; 
          if (this.zlote[0] == '0') { this.zlote = this.zlote.substr(1); }   
        } 
       else 
        { this.grosze = this.grosze + bufor; }
     }
  
  this.zmienne.setKwotaZl(this.zlote);
  this.zmienne.setKwotaGr(this.grosze);
  this.wartosc =  Number( this.zmienne.getKwotaZl() );
  } 

  zmienZl()
  { 
    this.fokuszlote = 'dostep';
    this.fokusgrosze = '';
    this.bufor = this.zlote;   
  }  

  zmienGr()
  { 
    this.fokuszlote = '';
    this.fokusgrosze = 'dostep';   
    this.bufor = this.grosze;   
  } 
}
