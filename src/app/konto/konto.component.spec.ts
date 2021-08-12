/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontoComponent } from './konto.component';

describe('KontoComponent', () => {
  let component: KontoComponent;
  let fixture: ComponentFixture<KontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
