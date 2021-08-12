import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './numeryczna.wersje';

@Component({
  selector: 'app-numeryczna',
  templateUrl: './numeryczna.component.html',
  styleUrls: ['./numeryczna.component.css']
})
export class NumerycznaComponent implements OnInit {

  jezyk: number;
  miejsce: number;
  cofnij = 'skasuj';
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

  add(cyfra: string): void
  { 
    this.bufor.emit(cyfra);
  } 
}