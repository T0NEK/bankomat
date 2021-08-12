/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WplataMgComponent } from './wplata-mg.component';

describe('WplataMgComponent', () => {
  let component: WplataMgComponent;
  let fixture: ComponentFixture<WplataMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WplataMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WplataMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
