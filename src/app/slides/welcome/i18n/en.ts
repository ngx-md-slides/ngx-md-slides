import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const enWelcomeTranslations: TranslatedSlideSet = {
  title: '\\Welcome to ngx-md-slides!',
  examples: {
    addButton: '\\Add cat',
    removeButton: '\\Remove all cats',
    counter: '\\Cats counter',
    emptyState: '\\No cats...',
  },
  slides: [
    {
      backgroundColor: '\\var(--purple)',
      content: md`
# Welcome to <br/><a href="https://github.com/ngx-md-slides/ngx-md-slides"><img alt="" src="favicon.svg">ngx-md-slides</a>
      `,
    },
    {
      backgroundColor: '\\var(--purple)',
      content: md`
## What is ngx-md-slides?

It's a tool that helps you **create slides** using only code.
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Features

- Accessibility
- Multi language
- Light/dark mode
- Markdown and HTML/CSS
- [Live examples](./#live-examples) (Angular components)
      `,
    },
    {
      backgroundColor: '\\var(--azure)',
      content: md`
## How to use

- [Fork this project](https://github.com/ngx-md-slides/ngx-md-slides/fork) and modify it however you wish
- Read the usage guide (work in progress) for more details
- Or [check out the source code of this slide set](https://github.com/ngx-md-slides/ngx-md-slides/blob/master/src/app/slides/welcome/i18n/en.ts) first if you're curious
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## Markdown

This project uses Markdown ([Marked](https://marked.js.org/)) with [default options](https://marked.js.org/using_advanced#options).
      `,
    },
    {
      backgroundColor: '\\var(--yellow)',
      content: md`
## Live examples

Add Angular components in Markdown by mentioning the **component name** in an HTML comment.

<table align="center">
  <caption>Live example with cats</caption>
  <tr>
    <th>Code</th>
    <th style="width: 50%">Result</th>
  </tr>
  <tr>
    <td>
      <pre>

&lt;!--RemoveButtonEn--&gt;

</pre>
</td>
<td>

<!--RemoveButtonEn-->

</td>
</tr>
</table>
      `,
    },
    {
      backgroundColor: '\\var(--rose)',
      content: md`
## Limitations

Ticks(\`) can't be used for code. Use the HTML <code>code</code> tag for inline code and the triple **tilde**(\~) for code blocks.

<table align="center">
  <caption>Triple tilde code example</caption>
  <tr>
    <th>Code</th>
    <th>Result</th>
  </tr>
  <tr>
    <td>
      <pre>
~~~CSS
p {
  color: pink;
}
~~~
</pre>
</td>
<td>

~~~CSS
p {
  color: pink;
}
~~~

</td>
</tr>
</table>
      `,
    },
  ],
};

export default enWelcomeTranslations;
