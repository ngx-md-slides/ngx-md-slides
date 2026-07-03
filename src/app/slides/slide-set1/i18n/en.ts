import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const enSlideSet1Translations: TranslatedSlideSet = {
  title: '\\ngx-md-slides',
  slides: [
    {
      backgroundColor: '\\var(--purple)',
      content: md`
# Welcome to <br/><span class="project-name"><a href="https://github.com/ngx-md-slides/ngx-md-slides"><img alt="" src="favicon.svg">ngx-md-slides</a></span>
      `,
    },
    {
      backgroundColor: '\\var(--purple)',
      content: md`
## What is this?

It's a tool that helps you **create slides** using only code.
      `,
    },
    {
      backgroundColor: '\\var(--indigo)',
      content: md`
## Features

- Accessibility
- Multi language support
- Light/dark mode support
- Markdown and HTML/CSS support
- Live demo support (Angular components)
      `,
    },
    {
      backgroundColor: '\\var(--azure)',
      content: md`
## How to use?

- [Fork this project](https://github.com/ngx-md-slides/ngx-md-slides/fork) and modify it however you wish.
- [Check out the source code of this slide set](https://github.com/ngx-md-slides/ngx-md-slides/blob/master/src/app/slides/slide-set1/i18n/en.ts) and [Read the guide](add link later).
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

<!--RemoveButtonEn-->
      `,
    },
  ],
};

export default enSlideSet1Translations;
