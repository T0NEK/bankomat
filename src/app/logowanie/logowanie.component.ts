import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ZmienneGlobalneService } from '../ZmienneGlobalne.service';
import { wersja_jezyk } from './logowanie.wersje';
import  axios  from 'axios';


@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})


export class LogowanieComponent implements OnInit, OnDestroy {

  jezyk : number;
  miejsce : number;
  tekst = '';
  timer: any;
  url : string;
  czasZwloki = 3000;
  postep = 0;
  przyrost = 100;
  sukces = 'bg-success';
  procent = ' width: ' + this.postep + '% ';
  postep1 = 100;
  przyrost1 = 100;
  procent1 = ' width: ' + this.postep1 + '% ';
  serwerOK = false;
  transOK = false;
  komunikatProgres = '';
  komunikatOdmowa = 'hidden';
  problemText = 'Logowanie nieudane'

  
  constructor(private zmienne : ZmienneGlobalneService,private router :Router)
    {
      this.jezyk = this.zmienne.getJezyk();
      this.miejsce = this.zmienne.getMiejsce();
      this.url = this.zmienne.getURL() + 'auth';
    }
 
    ngOnInit() 
    {
      this.tekst = wersja_jezyk[this.jezyk].logowanie;
      this.czasZwloki = this.zmienne.getCzasZwlokiSerwer();

      this.przyrost = 100 / (this.czasZwloki  / this.przyrost);
      this.przyrost1 = 100 / ( 5000  / this.przyrost1);

      this.zmienne.setMiejsce(this.zmienne.miejsca.puste);
      this.zmienne.sendUpdate(); 
      this.postep = 0;
      this.timer = setInterval(()=>{this.pasek()},100);
      this.zaloguj();
    }    
    
    pasek()
    {
      if (this.serwerOK) 
         {
         if (this.timer) { clearInterval(this.timer) }   
         if (this.transOK)
          {  
          this.zmienne.setMiejsce(this.zmienne.miejsca.dyspozycje);
          this.zmienne.sendUpdate();
          this.router.navigate(['dyspozycje']);
          }
          else
          { this.blad1() }
         }
      else
      {    
         this.postep = this.postep + this.przyrost;
      if (this.postep > 60) { this.sukces = 'bg-warning'; }
      if (this.postep > 80) { this.sukces = 'bg-danger'; }
      if (this.postep > 100) 
          { 
            this.procent = ' width: 100%';
            if (this.timer) { clearInterval(this.timer) };
            this.blad2();
          }
      this.procent = ' width: ' + this.postep + '%';  
      }
    }

    pasek1()
    {    
      this.postep1 = this.postep1 - this.przyrost1;   
      if (this.postep1 < 0) 
          { 
            if (this.timer) { clearInterval(this.timer) }
            this.procent1 = ' width: 0%';
            this.zmienne.setMiejsce(this.zmienne.miejsca.konto);
            this.zmienne.sendUpdate();
            this.router.navigate(['konto']);     
          }
      this.procent1 = ' width: ' + this.postep1 + '%';  
    }  

  blad1()
    {
      this.komunikatProgres = 'hidden';
      this.problemText = wersja_jezyk[this.jezyk].blad;
      this.komunikatOdmowa = '';
      this.zmienne.setMiejsce(this.zmienne.miejsca.logowanie);
      this.zmienne.sendUpdate(); 
      this.postep1 = 100;
      this.timer = setInterval(()=>{this.pasek1()},100); 
    }
    
  blad2()
    {
      this.komunikatProgres = 'hidden';
      this.problemText = wersja_jezyk[this.jezyk].czas;
      this.komunikatOdmowa = '';
      this.zmienne.setMiejsce(this.zmienne.miejsca.logowanie);
      this.zmienne.sendUpdate(); 
      this.postep1 = 100;
      this.timer = setInterval(()=>{this.pasek1()},100); 
    }  
    
  zaloguj()
  {
    const headers = {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
    const data = {
      "username": this.zmienne.getKonto(),
      "password": this.zmienne.getPin()
    }
    axios.post( this.url , data
    )
    .then(response => {
      this.zmienne.setOsobaImie(response.data.firstName);
      this.zmienne.setOsobaNazwisko(response.data.lastName);
      this.zmienne.setOsobaToken(response.data.bearer);
      this.zmienne.setKontoID(response.data.id)
      this.serwerOK = true;
      this.transOK = true;
        }
    )
    .catch(error => { 
      this.serwerOK = true;
      this.transOK = false;
       }
    );
  }  


ngOnDestroy() {
  if (this.timer) { clearInterval(this.timer) };
}
  
  
}
