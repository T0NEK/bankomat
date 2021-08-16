/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LogowanieMgComponent } from './logowanie-mg.component';

describe('LogowanieMgComponent', () => {
  let component: LogowanieMgComponent;
  let fixture: ComponentFixture<LogowanieMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogowanieMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogowanieMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
