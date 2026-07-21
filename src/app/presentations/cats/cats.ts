import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { Presentation } from '@shared/components/presentation/presentation';
import { Markdown } from '@shared/components/markdown/markdown';
import { TableOfContents } from '@shared/components/table-of-contents/table-of-contents';
import { MyExample } from '../welcome/examples/remove-button/my-example';

@Component({
  selector: 'app-cats',
  imports: [SlidesContainer, Slide, Markdown, TableOfContents, TranslatePipe],
  templateUrl: './cats.html'
})
export class Cats extends Presentation {
  override setName = 'presentations.cats.slides';
  override components = [MyExample];
}
