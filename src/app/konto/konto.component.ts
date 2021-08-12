import { Component, HostListener, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './konto.wersje';
import { Router } from '@angular/router';


@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {

  jezyk: number;
  miejsce: number;
  naglowekText = 'Wpisz nr konta i pin';
  kontoTekst = 'Numer rachunku:';
  pinTekst = 'kod PIN:';
  pin: string;
  bufor: string;
  polecenie = '';
 
    
  constructor(private zmienne : ZmienneGlobalneService,private router :Router)
    {
      this.jezyk = this.zmienne.getJezyk();
      this.miejsce = this.zmienne.getMiejsce();
      this.bufor = this.zmienne.getKonto();
      this.pin = this.zmienne.getPin();
    }
  @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
      if ((event.key >= '0') && (event.key <= '9')) 
        {
          this.import(event.key)  
        }
        else
        {
          this.polecenie = this.polecenie + event.key;
        }
      if (this.polecenie == 'Enter')
        {
        this.przelacz(); 
        }
    }
    
  ngOnInit()
    {
      this.zmienne.setOsobaImie('');
      this.zmienne.setOsobaNazwisko('');
      this.zmienne.setOsobaToken('');
      this.zmienne.setKontoID(0)
     this.naglowekText = wersja_jezyk[this.jezyk].naglowek; 
     this.kontoTekst = wersja_jezyk[this.jezyk].konto;
     this.pinTekst = wersja_jezyk[this.jezyk].pin;
    }    

   
  import(bufor: string) 
    {
      if (bufor == 'del')
       {
        this.bufor = this.bufor.substr(0,this.bufor.length - 1);
       } 
       else 
       {
        this.bufor = this.bufor + bufor;
       }
    this.zmienne.setKonto(this.bufor);
    this.polecenie = '';  
     } 

  
  przelacz()
  {
    this.polecenie = '';
    this.router.navigate(['pin'])
  } 
}
