/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WplataComponent } from './wplata.component';

describe('WplataComponent', () => {
  let component: WplataComponent;
  let fixture: ComponentFixture<WplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
