import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const enSlideSet1Translations: TranslatedSlideSet = {
  title: '\\Web Accessibility for Everyone',
  slides: [
    {
      backgroundColor: '\\var(--violet)',
      content: md`
<div class="title-slide">

<!--A11yIcon-->

  <h1>
    <span>Web Accessibility</span>
    <span>for Everyone</span>
  </h1>

  <div class="footer">
    <span>Teodora Chiosa</span>
    <span>March 2026</span>
  </div>

</div>
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## About me

<div class="about-me-images">
  <img src="img/avatar.png" alt="a portrait photo of Teodora smiling at the camera">
  <img src="img/was.png" alt="the Web Accessibility Specialist badge">
</div>

### Teodora Chiosa
- Web Accessibility Specialist, certified by the International Association of Accessibility Professionals (IAAP)
- Programmer (Frontend Developer), with experience in building reusable interface components for the web
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## What is Accessibility?

- The design of products, devices, services, vehicles, or environments to be usable by disabled people. [Accessibility - Wikipedia](https://en.wikipedia.org/wiki/Accessibility)
      `,
    },
    {
      backgroundColor: '\\var(--violet)',
      content: md`
## What is Web Accessibility?

- The design and implementation of websites (as well as PDF documents) so that they can be accessed and used by people with disabilities.
      `,
    },
  ],
};

export default enSlideSet1Translations;
