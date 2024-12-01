import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login() {
    this.isAuthenticated = true;
    localStorage.setItem('authToken', 'sample-token');
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('authToken');
  }
}
