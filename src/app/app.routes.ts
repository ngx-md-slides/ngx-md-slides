import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./slides/welcome/welcome').then((m) => m.Welcome),
    data: { title: 'sets.welcome.title' },
  },
  {
    path: 'cats',
    loadComponent: () => import('./slides/cats/cats').then((m) => m.Cats),
    data: { title: 'sets.cats.title' },
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    data: { title: 'ui.notFoundTitle' },
  },
];
