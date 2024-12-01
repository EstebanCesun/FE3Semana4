import { Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'public', component: PublicComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'public', pathMatch: 'full' }
];
