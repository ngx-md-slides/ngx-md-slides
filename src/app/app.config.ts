import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  provideTranslateService,
  TranslateLoader,
} from '@ngx-translate/core';

import { CustomTranslationsLoader } from '@shared/custom-translations-loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    provideClientHydration(withEventReplay()),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslationsLoader,
        deps: [HttpClient],
      },
      fallbackLang: 'en',
      lang: 'en',
    }),
  ],
};
