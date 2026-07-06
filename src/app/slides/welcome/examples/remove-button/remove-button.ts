import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-remove-button-en',
  templateUrl: './remove-button.html',
  imports: [TranslatePipe],
  styleUrl: './remove-button.scss',
})
export class RemoveButtonEn {
  catsCounter = signal(0);

  addCats(): void {
    this.catsCounter.update((value) => value + 1);
  }

  reset(): void {
    this.catsCounter.set(0);
  }
}
