import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  standalone: true,
  template: `
    <h1>Página Protegida</h1>
    <button (click)="logout()">Logout</button>
  `,
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/public']); 
  }
}
