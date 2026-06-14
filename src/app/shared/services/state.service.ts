import { Injectable, signal, WritableSignal } from '@angular/core';

import { State } from '@shared/models/state.model';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state: WritableSignal<State> = signal({} as State);
  private defaultState: State = {
    view: 'slide',
    maxWidth: 100,
    isFullscreen: false,
    currentSlide: 0,
    language: 'en'
  };

  constructor() {
    this.setState(this.defaultState);
  }

  getDefaultState(): State {
    return this.defaultState;
  }

  getState(): State {
    return this.state();
  }

  setState(newState: State): void {
    this.state.set({ ...this.state(), ...newState });
  }
}
