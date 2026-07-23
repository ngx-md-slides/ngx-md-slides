import { TranslatedPresentation } from '@shared/models/translation.model';
import md from '@shared/markdown-compiler';

const enCatsTranslations: TranslatedPresentation = {
  title: 'Cats',
  slides: [
    {
      backgroundColor: 'var(--purple)',
      content: md`
# Cats

<!--MyExample-->
      `,
    },
    {
      backgroundColor: 'var(--teal)',
      content: md`
## A cat image

<figure align="center">
  <img src="https://live.staticflickr.com/154/404515315_fe7f651e9f_h.jpg" alt="A photo of a cat with mostly orange fur and white fur spots on the center of its face, on its chest and on its paws. The cat is lying down on a piece of fabric with flowers and leaves printed on it." style="width: 15lh;">
  <figcaption>"Cat" by <a href="https://www.flickr.com/photos/takahiko/404515315/in/photostream/">Takahiko Miyara on Flickr</a></figcaption>
</figure>
      `,
    },
    {
      backgroundColor: 'var(--red)',
      content: md`
## Red
      `,
    },
    {
      backgroundColor: 'var(--orange)',
      content: md`
## Orange
      `,
    },
    {
      backgroundColor: 'var(--yellow)',
      content: md`
## Yellow
      `,
    },
    {
      backgroundColor: 'var(--lime)',
      content: md`
## Lime
      `,
    },
    {
      backgroundColor: 'var(--green)',
      content: md`
## Green
      `,
    },
    {
      backgroundColor: 'var(--emerald)',
      content: md`
## Emerald
      `,
    },
    {
      backgroundColor: 'var(--teal)',
      content: md`
## Teal
      `,
    },
    {
      backgroundColor: 'var(--cyan)',
      content: md`
## Cyan
      `,
    },
    {
      backgroundColor: 'var(--azure)',
      content: md`
## Azure
      `,
    },
    {
      backgroundColor: 'var(--blue)',
      content: md`
## Blue
      `,
    },
    {
      backgroundColor: 'var(--indigo)',
      content: md`
## Indigo
      `,
    },
    {
      backgroundColor: 'var(--violet)',
      content: md`
## Violet
      `,
    },
    {
      backgroundColor: 'var(--purple)',
      content: md`
## Purple
      `,
    },
    {
      backgroundColor: 'var(--magenta)',
      content: md`
## Magenta
      `,
    },
    {
      backgroundColor: 'var(--pink)',
      content: md`
## Pink
      `,
    },
    {
      backgroundColor: 'var(--rose)',
      content: md`
## Rose
      `,
    },
    {
      content: md`
## No color
      `,
    },
  ],
};

export default enCatsTranslations;
