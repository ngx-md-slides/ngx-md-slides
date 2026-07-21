import { TranslatedPresentation } from '@shared/models/translation.model';
import md from '@shared/markdown-compiler';

const roCatsTranslations: TranslatedPresentation = {
  title: 'Pisici',
  slides: [
    {
      backgroundColor: 'var(--purple)',
      content: md`
# Pisici

<!--MyExample-->
      `,
    },
    {
      backgroundColor: 'var(--teal)',
      content: md`
## O imagine cu o pisică

<figure align="center">
  <img src="https://live.staticflickr.com/154/404515315_fe7f651e9f_h.jpg" alt="O poză cu o pisică portocalie cu alb. Pisica este așezată pe un fel de țesătură cu motive de flori și frunze." style="width: 15lh;">
  <figcaption>"Pisică" de <a href="https://www.flickr.com/photos/takahiko/404515315/in/photostream/">Takahiko Miyara pe Flickr</a></figcaption>
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
## Fără culoare
      `,
    },
  ],
};

export default roCatsTranslations;
