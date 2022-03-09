import { TestBed } from '@angular/core/testing';

import { DemandeDonService } from './demande-don.service';

describe('DemandeDonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeDonService = TestBed.get(DemandeDonService);
    expect(service).toBeTruthy();
  });
});
