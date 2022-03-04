import { TestBed } from '@angular/core/testing';

import { DonServiceService } from './don-service.service';

describe('DonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonServiceService = TestBed.get(DonServiceService);
    expect(service).toBeTruthy();
  });
});
