/* eslint-disable no-magic-numbers */
import { DOCUMENT, inject, Injectable } from '@angular/core';
import { State } from '@shared/models/state.model';

const LOCAL_STORAGE_ITEM_NAME = 'tcSlidesSettings';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  document = inject(DOCUMENT);

  getLocalStorage(): State | null {
    const settings = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME);
    if (settings !== null) {
      return JSON.parse(settings) as State;
    }

    return null;
  }

  setToLocalStorage(settings: State): void {
    if (settings !== null && typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_ITEM_NAME, JSON.stringify(settings));
    }
  }
}
