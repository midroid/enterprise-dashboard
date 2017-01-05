import { Routes } from '@angular/router';
import { Landing } from 'app/landing/landing';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/landing',
    pathMatch: 'full' 
  },
  { path: 'landing', component: Landing }
];