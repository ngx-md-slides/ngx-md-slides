import { Component, Input } from '@angular/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-markdown',
  imports: [SafeHtmlPipe],
  templateUrl: './markdown.html',
  styles: `
  :host {height: 100%}
  .markdown-container {height: 100%}
  `,
})
export class Markdown {
  @Input() data: string = '';
}
