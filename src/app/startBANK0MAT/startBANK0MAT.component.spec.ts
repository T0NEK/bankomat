/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartBANK0MATComponent } from './startBANK0MAT.component';

describe('StartBANK0MATComponent', () => {
  let component: StartBANK0MATComponent;
  let fixture: ComponentFixture<StartBANK0MATComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBANK0MATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBANK0MATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
