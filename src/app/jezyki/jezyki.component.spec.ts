/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JezykiComponent } from './jezyki.component';

describe('JezykiComponent', () => {
  let component: JezykiComponent;
  let fixture: ComponentFixture<JezykiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JezykiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JezykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
