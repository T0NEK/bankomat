import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class ZmienneGlobalneService {  
private jezyk = 0;
private miejsce = 0;
private konto = '';
private kontoID = 0;
private osobaImie = '';
private osobaNazwisko = '';
private osobaToken = '';
private pin = '';
private kwotaZl = '';
private kwotaGr = '';
private kodMG = '112';
private odbiorcaKonto = '';
private tytul = '';
private subjectName = new Subject<any>(); 
private bankomatURL = 'https://eutanazjalarp.herokuapp.com/api/';
// private bankomatURL = '//192.168.19.107:8080/api/'
private czasZwlokiSerwer = 3000;
private serwis = false;

public miejsca = {
  jezyki: 0,
  konto: 1,
  pin: 1,
  logowanie: 2,
  dyspozycje: 3,
  wyplata: 4,
  wyplatamg: 5,
  wplata: 6,
  wplatamg: 7,
  przelew: 10,
  przelewmg: 11,
  puste: 12,
  start: 13,
  logowaniemg: 14,
}
constructor () 
    {
    }

getJezyk() { return this.jezyk; }
setJezyk(dane: number) {this.jezyk = dane};
getMiejsce() { return this.miejsce; }
setMiejsce(dane: number) {this.miejsce = dane};
getKonto() { return this.konto; }
setKonto(dane: string) {this.konto = dane};
getKontoID() { return this.kontoID; }
setKontoID(dane: number) {this.kontoID = dane};
getOsobaImie() { return this.osobaImie; }
setOsobaImie(dane: string) {this.osobaImie = dane};
getOsobaNazwisko() { return this.osobaNazwisko; }
setOsobaNazwisko(dane: string) {this.osobaNazwisko = dane};
getPin() { return this.pin; }
setPin(dane: string) {this.pin = dane};
getOsobaToken() { return this.osobaToken; }
setOsobaToken(dane: string) {this.osobaToken = dane};
getKwotaZl() { return this.kwotaZl; }
setKwotaZl(dane: string) { if (dane.length == 0) { this.kwotaZl = '0'} else { this.kwotaZl = dane }};
getKwotaGr() { return this.kwotaGr; }
setKwotaGr(dane: string) { if (dane.length == 0) { this.kwotaGr = '0'} else { this.kwotaGr = dane}};
getKwota() { return ( + this.kwotaZl) + '.' + ( + this.kwotaGr) }
getKodMG() { return this.kodMG; }
setKodMG(dane: string) {  }; 
getOdbiorcaKonto() { return this.odbiorcaKonto; }
setOdbiorcaKonto(dane: string) {this.odbiorcaKonto = dane};
getTytul() { return this.tytul; }
setTytul(dane: string) {this.tytul = dane};
getURL() { return this.bankomatURL };
getCzasZwlokiSerwer() { return this.czasZwlokiSerwer};
getSerwis() { return this.serwis}
setSerwisOn() { this.serwis = true}
setSerwisOff() { this.serwis = false}

UstawStart()
{
  this.jezyk = 0;
  this.miejsce = 13;
  this.konto = '';
  this.kontoID = 0;
  this.osobaImie = '';
  this.osobaNazwisko = '';
  this.osobaToken = '';
  this.pin = '';
  this.kwotaZl = '';
  this.kwotaGr = '';
  this.odbiorcaKonto = '';
  this.tytul = ''; 
  this.serwis = false; 
}

sendUpdate() 
{
  this.subjectName.next()
}

getUpdate(): Observable<any>
{
  return this.subjectName.asObservable()
}

}
