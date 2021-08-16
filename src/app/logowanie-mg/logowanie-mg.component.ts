import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';

@Component({
  selector: 'app-logowanie-mg',
  templateUrl: './logowanie-mg.component.html',
  styleUrls: ['./logowanie-mg.component.css']
})
export class LogowanieMgComponent implements OnInit {

  kod = '';
  constructor(private zmienne: ZmienneGlobalneService, private router: Router)
   {

   }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) 
  {
    console.log(event)
    if (event.key.length == 1 ) 
       {this.kod = this.kod + (event.key)}
       else
       { switch (event.key) {
         case 'Backspace':
           this.kod = this.kod.substr(0,this.kod.length - 1); 
           break;
         case 'Enter':
           break;  
         default:
           break;
       } }

    console.log("-"+this.kod+"-")     
    if (this.kod == this.zmienne.getKodMG())
      {
       this.zmienne.setSerwisOn(); 
       this.zmienne.setMiejsce(this.zmienne.miejsca.logowaniemg);
       this.zmienne.sendUpdate();
       this.router.navigate(['startBANK0MAT']);     
      }
   }


}
