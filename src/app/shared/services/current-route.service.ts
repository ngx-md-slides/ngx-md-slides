import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CurrentRouteService {
  router = inject(Router);

  getCurrentRoute(): string {
    return this.router.url.split('#')[0];
  }
}
