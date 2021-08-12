/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StanKontaComponent } from './stan-konta.component';

describe('StanKontaComponent', () => {
  let component: StanKontaComponent;
  let fixture: ComponentFixture<StanKontaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanKontaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanKontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
