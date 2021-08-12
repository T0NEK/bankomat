import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { wersja_jezyk } from '../numeryczna/numeryczna.wersje';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';

@Component({
  selector: 'app-klawisze',
  templateUrl: './klawisze.component.html',
  styleUrls: ['./klawisze.component.css']
})
export class KlawiszeComponent implements OnInit {

  jezyk: number;
  miejsce: number;
  cofnij = 'skasuj';
  klwcaps = true;
  klwalt = false;
  klwshift = false;
  shiftraz = false;
  
  @Output() bufor = new EventEmitter<string>();
 
  constructor(private zmienne : ZmienneGlobalneService)
    {
      this.jezyk = this.zmienne.getJezyk();
      this.miejsce = this.zmienne.getMiejsce();
    }
      
  ngOnInit()
  {
    this.cofnij = wersja_jezyk[this.jezyk]
  }

  add(cyfra: string)
  { 
    this.bufor.emit(cyfra);
    if (this.shiftraz) {this.klwcaps = !this.klwcaps; this.klwshift = this.klwcaps; this.shiftraz = false}
  } 
  
  
}