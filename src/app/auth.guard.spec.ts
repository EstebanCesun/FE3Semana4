import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isLoggedIn: () => true } },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for logged-in users', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should redirect for not logged-in users', () => {
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    guard.canActivate();
    expect(router.navigate).toHaveBeenCalledWith(['/public']);
  });
});
