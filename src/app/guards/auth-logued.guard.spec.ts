import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authLoguedGuard } from './auth-logued.guard';

describe('authLoguedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authLoguedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
