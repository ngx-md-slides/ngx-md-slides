import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

@Injectable()
export class CustomTranslationsLoader implements TranslateLoader {
  private translations = {
    en: () => import('@shared/i18n/en').then((module) => module.default),
    ro: () => import('@shared/i18n/ro').then((module) => module.default),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTranslation(lang: keyof typeof this.translations): Observable<any> {
    const translation = this.translations[lang]();

    return from(translation);
  }
}
