/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrzelewAllMgComponent } from './przelew-all-mg.component';

describe('PrzelewAllMgComponent', () => {
  let component: PrzelewAllMgComponent;
  let fixture: ComponentFixture<PrzelewAllMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzelewAllMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzelewAllMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
