import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './przelew.wersje';

@Component({
  selector: 'app-przelew',
  templateUrl: './przelew.component.html',
  styleUrls: ['./przelew.component.css']
})
export class PrzelewComponent implements OnInit {

  bufor = '';
  odbiorca = '';
  tytul = '';
  zlote = '';
  grosze = '';
  wartosc = 0;
  fokusodbiorca = '';
  fokustytul = 'dostep';
  fokuszlote = 'dostep';
  fokusgrosze = 'dostep';
  widocznoscnumeryczna = '';
  widocznoscklawisze = 'hidden';
  jezyk: number;
  dyspozycjaText = 'Dyspozycja wpłaty na konto';
  odbiorcaText = 'Odbiorca';
  tytulText = 'Tytuł przelewu';
  zlText = 'Wartość zł';
  grText = 'Wartość gr';
  kwotaText = 'Kwota Wpłaty';
  polecenie = '';
  
  constructor(private zmienne : ZmienneGlobalneService,private router :Router) 
  {
    this.jezyk = this.zmienne.getJezyk();
  }

  ngOnInit() 
  {
    this.dyspozycjaText = wersja_jezyk[this.jezyk].dyspozycja;
    this.odbiorcaText = wersja_jezyk[this.jezyk].odbiorca;
    this.tytulText = wersja_jezyk[this.jezyk].tytul;
    this.zlText = wersja_jezyk[this.jezyk].zl;
    this.grText = wersja_jezyk[this.jezyk].gr;
    this.kwotaText = wersja_jezyk[this.jezyk].kwota;
    this.odbiorca = this.zmienne.getOdbiorcaKonto();
    this.zlote = this.zmienne.getKwotaZl();
    this.grosze = this.zmienne.getKwotaGr();
    this.tytul = this.zmienne.getTytul();
    this.wartosc =  Number( this.zlote + '.' + this.grosze);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if ( this.fokusodbiorca == '' )
    {
    if ((event.key >= '0') && (event.key <= '9') ) 
      {
        this.import(event.key)  
      }
      else
      {
        this.polecenie = this.polecenie + event.key;
      }
    if (this.polecenie == 'Enter')
      {
        this.polecenie = '';
        this.zmienTytul();        
      }
    }  
  }

  
  import(bufor: string) 
  {
    if (bufor == 'del')
     {
      if (this.fokuszlote == '') { this.zlote = this.zlote.substr(0,this.zlote.length - 1); } 
      else 
      { if (this.fokusgrosze == '') { this.grosze = this.grosze.substr(0,this.grosze.length - 1); }
        else
        {
          if (this.fokusodbiorca == '') { this.odbiorca = this.odbiorca.substr(0,this.odbiorca.length - 1); }
          else
          { this.tytul = this.tytul.substr(0,this.tytul.length - 1); }
        }
      }
     } 
     else 
     {
       if (this.fokuszlote == '') 
        { this.zlote = this.zlote + bufor; if (this.zlote[0] == '0') { this.zlote = this.zlote.substr(1); } } 
       else  
        { if (this.fokusgrosze == '')
          { if (this.grosze.length < 2) { this.grosze = this.grosze + bufor; if (this.grosze[0] == '0') { this.grosze = this.grosze.substr(1);} } }
          else
          { if (this.fokusodbiorca == '') { this.odbiorca = this.odbiorca + bufor; }
            else
            { this.tytul = this.tytul + bufor; }
          }  
        }
     }
  this.zmienne.setKwotaZl(this.zlote);
  this.zmienne.setKwotaGr(this.grosze);
  this.wartosc = Number( '0' + this.zlote + '.' +  (this.grosze.length == 1 ? ( '0' + this.grosze ) : ( this.grosze + '0' )) ); 
  this.zmienne.setOdbiorcaKonto(this.odbiorca);
  this.zmienne.setTytul(this.tytul);
  this.polecenie = '';
  } 

  zmienOdbiorca()
  { 
    this.fokusodbiorca = '';
    this.fokuszlote = 'dostep';
    this.fokusgrosze = 'dostep';   
    this.fokustytul = 'dostep';   
    this.widocznoscnumeryczna = '';
    this.widocznoscklawisze = 'hidden';
    this.bufor = this.odbiorca;   
  }
  zmienZl()
  { 
    this.fokusodbiorca = 'dostep';
    this.fokuszlote = '';
    this.fokusgrosze = 'dostep';
    this.fokustytul = 'dostep';   
    this.widocznoscnumeryczna = '';
    this.widocznoscklawisze = 'hidden';
    this.bufor = this.zlote;   
  }  
  zmienGr()
  { 
    this.fokusodbiorca = 'dostep';
    this.fokuszlote = 'dostep';
    this.fokusgrosze = '';   
    this.fokustytul = 'dostep';   
    this.widocznoscnumeryczna = '';
    this.widocznoscklawisze = 'hidden';
    this.bufor = this.grosze;   
  }
  zmienTytul()
  { 
    this.fokusodbiorca = 'dostep';
    this.fokuszlote = 'dostep';
    this.fokusgrosze = 'dostep';   
    this.fokustytul = '';   
    this.widocznoscnumeryczna = 'hidden';
    this.widocznoscklawisze = '';
    this.bufor = this.tytul;
  }
}
