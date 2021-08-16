import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { StanKontaComponent } from './stan-konta/stan-konta.component';
import { JezykiComponent } from './jezyki/jezyki.component';
import { KontoComponent } from './konto/konto.component';
import { PinComponent } from './pin/pin.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { DyspozycjeComponent } from './dyspozycje/dyspozycje.component';
import { WyplataComponent } from './wyplata/wyplata.component';
import { WyplataMgComponent } from './wyplata-mg/wyplata-mg.component';
import { WplataComponent } from './wplata/wplata.component';
import { WplataMgComponent } from './wplata-mg/wplata-mg.component';
import { HistoriaComponent } from './historia/historia.component';
import { PrzelewComponent } from './przelew/przelew.component';
import { PrzelewMgComponent } from './przelew-mg/przelew-mg.component';
import { StartBANK0MATComponent } from './startBANK0MAT/startBANK0MAT.component';
import { LogowanieMgComponent } from './logowanie-mg/logowanie-mg.component';
import { KontaMgComponent } from './konta-mg/konta-mg.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/jezyki', pathMatch: 'full'},
  { path: 'startBANK0MAT', component: StartBANK0MATComponent },
  { path: 'jezyki', component: JezykiComponent },
  { path: 'konto', component: KontoComponent},
  { path: 'pin', component: PinComponent},
  { path: 'logowanie', component: LogowanieComponent},
  { path: 'dyspozycje', component: DyspozycjeComponent},
  { path: 'wyplata', component: WyplataComponent},
  { path: 'wyplata-mg', component: WyplataMgComponent},
  { path: 'wplata', component: WplataComponent},
  { path: 'wplata-mg', component: WplataMgComponent},
  { path: 'stan-konta', component: StanKontaComponent},
  { path: 'historia', component: HistoriaComponent},
  { path: 'przelew', component: PrzelewComponent},
  { path: 'przelew-mg', component: PrzelewMgComponent},
  { path: 'logowanie-mg', component: LogowanieMgComponent},
  { path: 'konta-mg', component: KontaMgComponent },
]



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
