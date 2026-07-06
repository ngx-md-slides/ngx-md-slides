import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const enCatsTranslations: TranslatedSlideSet = {
  title: '\\Cats',
  slides: [
    {
      backgroundColor: '\\var(--purple)',
      content: md`
# Cats
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## I like kitties

![](https://upload.wikimedia.org/wikipedia/commons/2/2a/Jewelkatz_Romeo_Of_Stalker-Bars.jpg)
      `,
    },
  ],
};

export default enCatsTranslations;
