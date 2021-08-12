import { Component, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from '../konto/konto.wersje'
import { Router } from '@angular/router';


@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['../konto/konto.component.css']
})
export class PinComponent implements OnInit {

  jezyk: number;
  miejsce: number;
  naglowekText = 'Wpisz nr konta i pin';
  kontoTekst = 'Numer rachunku:';
  pinTekst = 'kod PIN:';
  konto: string;
  bufor: string;
  constructor(private zmienne : ZmienneGlobalneService,private router :Router)
    {
      this.jezyk = this.zmienne.getJezyk();
      this.miejsce = this.zmienne.getMiejsce();
      this.konto = this.zmienne.getKonto();
      this.bufor = this.zmienne.getPin();
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
    this.zmienne.setPin(this.bufor);  
    } 


  ngOnInit() 
  {
    this.kontoTekst = wersja_jezyk[this.jezyk].konto;
    this.pinTekst = wersja_jezyk[this.jezyk].pin;
    this.naglowekText = wersja_jezyk[this.jezyk].naglowek; 
   }

   przelacz()
  {
    this.router.navigate(['konto'])
  } 
}
