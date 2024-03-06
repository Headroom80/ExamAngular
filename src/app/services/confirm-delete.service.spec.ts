import { TestBed } from '@angular/core/testing';

import { ConfirmDeleteService } from './confirm-delete.service';

describe('ConfirmDeleteService', () => {
  let service: ConfirmDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
