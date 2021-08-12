/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrzyciskiComponent } from './przyciski.component';

describe('PrzyciskiComponent', () => {
  let component: PrzyciskiComponent;
  let fixture: ComponentFixture<PrzyciskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzyciskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzyciskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
