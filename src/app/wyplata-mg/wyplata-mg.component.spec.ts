/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WyplataMgComponent } from './wyplata-mg.component';

describe('WyplataMgComponent', () => {
  let component: WyplataMgComponent;
  let fixture: ComponentFixture<WyplataMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyplataMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyplataMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
