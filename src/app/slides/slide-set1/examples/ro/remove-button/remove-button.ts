import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-remove-button-ro',
  templateUrl: './remove-button.html',
  styleUrl: './remove-button.scss',
})
export class RemoveButtonRo {
  catsCounter = signal(0);

  addCats(): void {
    this.catsCounter.update((value) => value + 1);
    console.log(this.catsCounter());
  }

  reset(): void {
    this.catsCounter.set(0);
    console.log(this.catsCounter());
  }
}
