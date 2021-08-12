/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZmienneGlobalneService } from './ZmienneGlobalne.service';

describe('Service: ZmienneGlobalne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZmienneGlobalneService]
    });
  });

  it('should ...', inject([ZmienneGlobalneService], (service: ZmienneGlobalneService) => {
    expect(service).toBeTruthy();
  }));
});
