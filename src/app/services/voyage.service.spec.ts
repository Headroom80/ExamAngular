import { TestBed } from '@angular/core/testing';

import { VoyageService } from './voyage.service';

describe('ListeService', () => {
  let service: VoyageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
