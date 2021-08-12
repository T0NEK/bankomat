import { Component, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './dyspozycje.wersje';

@Component({
  selector: 'app-dyspozycje',
  templateUrl: './dyspozycje.component.html',
  styleUrls: ['./dyspozycje.component.css']
})
export class DyspozycjeComponent implements OnInit {

  jezyk: number;
  witajText = 'Witaj';
  dyspozycjeText = 'Wybierz dyspozycje';
  osobaImie: string;
  osobaNazwisko: string;
  constructor(private zmienne: ZmienneGlobalneService)
   {
    this.osobaImie = this.zmienne.getOsobaImie();
    this.osobaNazwisko =  this.zmienne.getOsobaNazwisko();
    this.jezyk = this.zmienne.getJezyk();
   }

  ngOnInit() 
  {
    this.witajText = wersja_jezyk[this.jezyk].witaj;
    this.dyspozycjeText = wersja_jezyk[this.jezyk].dyspozycje;
    //this.zmienne.setOdbiorca('')
    this.zmienne.setKwotaZl('');
    this.zmienne.setKwotaGr('');
  }

}
