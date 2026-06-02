import { inject, Injectable, signal, WritableSignal } from '@angular/core';

import { State } from '@shared/models/state.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  localStorageService = inject(LocalStorageService);

  private state: WritableSignal<State> = signal({} as State);
  private defaultState: State = {
    view: 'slide',
    maxWidth: 100,
    isDarkMode: true,
    isFullscreen: false,
    currentSlide: 0,
    language: 'en'
  };

  constructor() {
    this.setState(this.defaultState);

    if (typeof localStorage !== 'undefined') {
      const localStorageDefault = this.localStorageService.getLocalStorage();
      if (localStorageDefault !== null) {
        this.setState(localStorageDefault);
      }
    }

  }

  getState(): State {
    return this.state();
  }

  setState(newState: State): void {
    this.state.set({ ...this.state(), ...newState });

    if (newState !== this.defaultState) {
      this.localStorageService.setToLocalStorage(this.state());
    }
  }
}
