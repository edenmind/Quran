import { TestBed } from '@angular/core/testing';

import { TafsirServiceService } from './tafsir-service.service';

describe('TafsirServiceService', () => {
  let service: TafsirServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TafsirServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
