/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DyspozycjeComponent } from './dyspozycje.component';

describe('DyspozycjeComponent', () => {
  let component: DyspozycjeComponent;
  let fixture: ComponentFixture<DyspozycjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyspozycjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyspozycjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
