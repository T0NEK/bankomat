/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KontaNewMgComponent } from './konta-new-mg.component';

describe('KontaNewMgComponent', () => {
  let component: KontaNewMgComponent;
  let fixture: ComponentFixture<KontaNewMgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaNewMgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaNewMgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
