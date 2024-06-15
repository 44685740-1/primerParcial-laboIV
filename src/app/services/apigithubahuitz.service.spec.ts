import { TestBed } from '@angular/core/testing';

import { ApigithubahuitzService } from './apigithubahuitz.service';

describe('ApigithubahuitzService', () => {
  let service: ApigithubahuitzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApigithubahuitzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
