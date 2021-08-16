/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontaMgComponent } from './konta-mg.component';

describe('KontaMgComponent', () => {
  let component: KontaMgComponent;
  let fixture: ComponentFixture<KontaMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
