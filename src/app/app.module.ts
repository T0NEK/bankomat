import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JezykiComponent } from './jezyki/jezyki.component';
import { KontoComponent } from './konto/konto.component';
import { PinComponent } from './pin/pin.component';
import { NumerycznaComponent } from './numeryczna/numeryczna.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { DyspozycjeComponent } from './dyspozycje/dyspozycje.component';
import { PrzyciskiComponent } from './przyciski/przyciski.component';
import { WyplataComponent } from './wyplata/wyplata.component';
import { WyplataMgComponent } from './wyplata-mg/wyplata-mg.component';
import { WplataComponent } from './wplata/wplata.component';
import { WplataMgComponent } from './wplata-mg/wplata-mg.component';
import { StanKontaComponent } from './stan-konta/stan-konta.component';
import { HistoriaComponent } from './historia/historia.component';
import { PrzelewComponent } from './przelew/przelew.component';
import { PrzelewMgComponent } from './przelew-mg/przelew-mg.component';
import { KlawiszeComponent } from './klawisze/klawisze.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartBANK0MATComponent } from './startBANK0MAT/startBANK0MAT.component';
import { LogowanieMgComponent } from './logowanie-mg/logowanie-mg.component';
import { KontaMgComponent } from './konta-mg/konta-mg.component';
import { KontaNewMgComponent } from './konta-new-mg/konta-new-mg.component';
import { PrzelewAllMgComponent } from './przelew-all-mg/przelew-all-mg.component';


@NgModule({
  declarations: [																													
    AppComponent,
    StanKontaComponent,
      JezykiComponent,
      KontoComponent,
      PinComponent,
      NumerycznaComponent,
      LogowanieComponent,
      DyspozycjeComponent,
      PrzyciskiComponent,
      WyplataComponent,
      WyplataMgComponent,
      WplataComponent,
      WplataMgComponent,
      StanKontaComponent,
      HistoriaComponent,
      PrzelewComponent,
      PrzelewMgComponent,
      KlawiszeComponent,
      StartBANK0MATComponent,
      LogowanieMgComponent,
      KontaMgComponent,
      KontaNewMgComponent,
      PrzelewAllMgComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
