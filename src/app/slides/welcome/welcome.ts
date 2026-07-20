import { Component } from '@angular/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { Presentation } from 'app/shared/components/presentation/presentation';
import { Markdown } from '@shared/components/markdown/markdown';
import { MyExample } from './examples/remove-button/my-example';
import { TableOfContents } from 'app/shared/components/table-of-contents/table-of-contents';
import { TranslatePipe } from '@ngx-translate/core';

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
