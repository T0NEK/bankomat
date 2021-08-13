import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Przyciski } from '../dane-przycisk';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';

@Component({
  selector: 'app-przyciski',
  templateUrl: './przyciski.component.html',
  styleUrls: ['./przyciski.component.css']
})
export class PrzyciskiComponent implements  OnDestroy {

  przyciski = Przyciski;
  jezyk : number;
  miejsce : number;
  private subscriptionName: Subscription;

  constructor(private zmienne : ZmienneGlobalneService)
  {
    this.jezyk = this.zmienne.getJezyk();
    this.miejsce = this.zmienne.getMiejsce();
    this.subscriptionName= this.zmienne.getUpdate().subscribe(message => { this.miejsce = this.zmienne.getMiejsce(); });
  }

  ngOnDestroy()
  {
    this.subscriptionName.unsubscribe();
  }

  click(gdzie: number, slang: number): void 
  {
    this.miejsce = gdzie;
    this.zmienne.setMiejsce(this.miejsce);
    if (slang != 0) { 
                      this.jezyk = slang -1;
                      this.zmienne.setJezyk(this.jezyk);
                    }
    
  }   

}
