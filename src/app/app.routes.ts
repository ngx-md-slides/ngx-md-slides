import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'web-a11y-for-everyone',
    pathMatch: 'full',
  },
  {
    path: 'web-a11y-for-everyone',
    loadComponent: () => import('./slides/slide-set1/slide-set1').then((m) => m.SlideSet1),
    data: { title: 'sets.set1.title' },
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    data: { title: 'ui.notFoundTitle' },
  },
];
