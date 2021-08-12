import { Component, OnInit } from '@angular/core';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';

@Component({
  selector: 'app-jezyki',
  templateUrl: './jezyki.component.html',
  styleUrls: ['./jezyki.component.css']
})
export class JezykiComponent implements OnInit {

  constructor(private zmienne: ZmienneGlobalneService) 
  {

  }

  ngOnInit() 
  {
    this.zmienne.UstawStart()  
  }

}
