import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./presentations/welcome/welcome').then((m) => m.Welcome),
    data: { title: 'presentations.welcome.title' },
  },
  {
    path: 'cats',
    loadComponent: () => import('./presentations/cats/cats').then((m) => m.Cats),
    data: { title: 'presentations.cats.title' },
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    data: { title: 'ui.notFoundTitle' },
  },
];
