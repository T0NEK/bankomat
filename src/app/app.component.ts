import { Component, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from './ZmienneGlobalne.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  konto: string;
  
  
  constructor(private zmienne : ZmienneGlobalneService)
    {
      this.konto = zmienne.getKonto()
    }
   
    ngOnInit()
    {

    }

   

  }

