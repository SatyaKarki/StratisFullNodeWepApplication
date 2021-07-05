import { TestBed } from '@angular/core/testing';

import { StratisfullnodeService } from './stratisfullnode.service';

describe('StratisfullnodeService', () => {
  let service: StratisfullnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StratisfullnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
