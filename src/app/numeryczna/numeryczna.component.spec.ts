/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumerycznaComponent } from './numeryczna.component';

describe('NumerycznaComponent', () => {
  let component: NumerycznaComponent;
  let fixture: ComponentFixture<NumerycznaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumerycznaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerycznaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
