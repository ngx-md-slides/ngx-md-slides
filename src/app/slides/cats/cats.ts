import { Component } from '@angular/core';

import { Slide } from '@shared/components/slide/slide';
import { SlidesContainer } from '@shared/components/slides-container/slides-container';
import { SlideSet } from 'app/shared/components/slide-set/slide-set';
import { Markdown } from '@shared/components/markdown/markdown';
import { TableOfContents } from 'app/shared/components/table-of-contents/table-of-contents';
import { TranslatePipe } from '@ngx-translate/core';
import { MyExample } from '../welcome/examples/remove-button/my-example';

@Component({
  selector: 'app-cats',
  imports: [SlidesContainer, Slide, Markdown, TableOfContents, TranslatePipe],
  templateUrl: './cats.html'
})
export class Cats extends SlideSet {
  override setName = 'sets.cats.slides';
  override components = [MyExample];
}
