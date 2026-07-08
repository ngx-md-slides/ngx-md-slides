import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-example',
  templateUrl: './my-example.html',
  imports: [TranslatePipe],
  styleUrl: './my-example.scss',
})
export class MyExample {
  catsCounter = signal(0);

  addCats(): void {
    this.catsCounter.update((value) => value + 1);
  }

  reset(): void {
    this.catsCounter.set(0);
  }
}
