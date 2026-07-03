import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roSlideSetTranslations: TranslatedSlideSet = {
  title: '\\Bine ai venit la ngx-md-slides',
  slides: [
    {
      backgroundColor: '\\var(--purple)',
      content: md`
# Bine ai venit la <br/><span class="project-name"><a href="https://github.com/ngx-md-slides/ngx-md-slides"><img alt="" src="favicon.svg">ngx-md-slides</a></span>
      `,
    },
    {
      backgroundColor: '\\var(--purple)',
      content: md`
## Ce este asta?

Este un tool care te ajută să **creezi slide-uri** folosind numai cod.
      `,
    },
    {
      backgroundColor: '\\var(--indigo)',
      content: md`
## Funcționalități

- Accesibilitate
- Suport pentru multiple limbi
- Suport pentru mod luminos/întunecat
- Suport Markdown și HTML/CSS
- Suport pentru exemple live (componente Angular)
      `,
    },
    {
      backgroundColor: '\\var(--azure)',
      content: md`
## Cum se folosește?

- [Dai Fork la acest proiect](https://github.com/ngx-md-slides/ngx-md-slides/fork) și-l modifici după cum dorești.
- [Vezi codul sursă al acestui set de slide-uri](https://github.com/ngx-md-slides/ngx-md-slides/blob/master/src/app/slides/slide-set1/i18n/en.ts) și [citește ghidul de utilizare](add link later).
- Open another slide set using the <code>Menu</code> button, or change the settings using the <code>Settings</code> button.

`,
    },
    {
      backgroundColor: '\\var(--green)',
      content: md`
## Markdown support

This project uses Markdown ([Marked](https://marked.js.org/)) with [Marked Default Options](https://marked.js.org/using_advanced#options).

**Important:** Use HTML over Markdown to provide better accessibility. E.g. Use an HTML table with a caption instead of a Markdown table.

<table align="center" style="caption-side: bottom">
  <caption>Animals I wish to see in real life</caption>
  <tr>
    <th>Animal name</th>
    <th>Image</th>
  </tr>
  <tr>
    <td><a href="https://en.wikipedia.org/wiki/Ezo_flying_squirrel">Ezo flying squirrel</a></td>
    <td style="padding: 0;">
      <img style="display: flex; width: calc(25 * var(--unit))"
           src="img/ezo-squirrel.png"
           alt="A photo of an Ezo flying squirrel. It looks like a regular squirrel but it's cuter, smaller, rounder, has very big black eyes.">
    </td>
  </tr>
</table>
      `,
    },
    {
      backgroundColor: '\\var(--rose)',
      content: md`
### Known issues

Since slide content is added between **ticks**(\`) in a Typescript file, ticks can't be used for code.

Make sure to use the HTML <code>code</code> tag for inline code and the triple **tilde**(\~) for code blocks. Example:

~~~CSS
p {
  color: pink;
}
~~~
      `,
    },
    {
      backgroundColor: '\\var(--yellow)',
      content: md`
## Live examples support

<!--RemoveButtonRo-->
      `,
    },
  ],
};

export default roSlideSetTranslations;
