/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WyplataComponent } from './wyplata.component';

describe('WyplataComponent', () => {
  let component: WyplataComponent;
  let fixture: ComponentFixture<WyplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
