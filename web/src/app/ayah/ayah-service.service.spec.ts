import { TestBed } from '@angular/core/testing';

import { AyahServiceService } from './ayah-service.service';

describe('AyahServiceService', () => {
  let service: AyahServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyahServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
