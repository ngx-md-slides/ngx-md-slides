import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { Presentation } from '@shared/components/presentation/presentation';
import { Markdown } from '@shared/components/markdown/markdown';
import { TableOfContents } from '@shared/components/table-of-contents/table-of-contents';
import { MyExample } from './examples/remove-button/my-example';

@Component({
  selector: 'app-welcome',
  imports: [SlidesContainer, Slide, Markdown, TableOfContents, TranslatePipe],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome extends Presentation {
  override setName = 'presentations.welcome.slides';
  override components = [MyExample];
}
