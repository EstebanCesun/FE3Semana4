import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  standalone: true,
  template: `
    <h1>Página Pública</h1>
    <button (click)="login()">Login</button>
  `,
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login();
    this.router.navigate(['/protected']);
  }
}
