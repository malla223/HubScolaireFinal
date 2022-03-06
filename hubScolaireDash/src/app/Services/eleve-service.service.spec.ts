import { TestBed } from '@angular/core/testing';

import { EleveServiceService } from './eleve-service.service';

describe('EleveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EleveServiceService = TestBed.get(EleveServiceService);
    expect(service).toBeTruthy();
  });
});
