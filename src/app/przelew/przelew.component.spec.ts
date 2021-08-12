/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrzelewComponent } from './przelew.component';

describe('PrzelewComponent', () => {
  let component: PrzelewComponent;
  let fixture: ComponentFixture<PrzelewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzelewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzelewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
