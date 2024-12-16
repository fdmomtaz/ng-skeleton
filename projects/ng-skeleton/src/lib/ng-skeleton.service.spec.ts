import { TestBed } from '@angular/core/testing';

import { NgSkeletonService } from './ng-skeleton.service';

describe('NgSkeletonService', () => {
  let service: NgSkeletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSkeletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
