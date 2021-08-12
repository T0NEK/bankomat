/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KlawiszeComponent } from './klawisze.component';

describe('KlawiszeComponent', () => {
  let component: KlawiszeComponent;
  let fixture: ComponentFixture<KlawiszeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlawiszeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlawiszeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
