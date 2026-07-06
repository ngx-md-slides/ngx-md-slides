import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roCatsTranslations: TranslatedSlideSet = {
  title: '\\Pisici',
  slides: [
    {
      backgroundColor: '\\var(--purple)',
      content: md`
# Pisici
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Îmi plac pisicile

![](https://upload.wikimedia.org/wikipedia/commons/2/2a/Jewelkatz_Romeo_Of_Stalker-Bars.jpg)

      `,
    },
  ],
};

export default roCatsTranslations;
