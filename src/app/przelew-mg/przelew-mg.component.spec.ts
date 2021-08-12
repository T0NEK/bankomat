/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrzelewMgComponent } from './przelew-mg.component';

describe('PrzelewMgComponent', () => {
  let component: PrzelewMgComponent;
  let fixture: ComponentFixture<PrzelewMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzelewMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzelewMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
