import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roSlideSetTranslations: TranslatedSlideSet = {
  title: '\\Accesibilitatea web pe înțelesul tuturor',
  slides: [
    {
      content: md`
<div class="title-slide">

<!--A11yIcon-->

  <h1>
    <span>Accesibilitatea web</span>
    <span>pe înțelesul tuturor</span>
  </h1>

  <div class="footer">
    <span>Teodora Chiosa</span>
    <span>Martie 2026</span>
  </div>

</div>
      `,
    },
    {
      content: md`
## Despre mine

<div class="about-me-images">
  <img src="img/avatar.png" alt="o poză tip portret cu Teodora zâmbind la cameră">
  <img src="img/was.png" alt="Insigna pentru Specialist în accesibilitate digitală">
</div>

### Teodora Chiosa
- Specialist în accesibilitate web, cu certificat obținut de Asociația Internațională a Profesioniștilor în Accesibilitate
- Programator (Frontend Developer), cu experiență în crearea de componente reutilizabile pentru interfețe web
      `,
    },
    {
      content: md`
## Ce este accesibilitatea?

- Proiectarea produselor, dispozitivelor, serviciilor, vehiculelor sau mediilor pentru a fi utilizabile de către **persoanele cu dizabilități**. Sursa: [Accesibilitate - Wikipedia](https://ro.wikipedia.org/wiki/Accesibilitate)
      `,
    },
    {
      content: md`
## Ce este accesibilitatea web?

- Proiectarea și implementarea de **site-uri web** (inclusiv documente PDF) astfel încât acestea să poată fi accesate și utilizate de către persoanele cu dizabilități.
      `,
    },
  ],
};

export default roSlideSetTranslations;
