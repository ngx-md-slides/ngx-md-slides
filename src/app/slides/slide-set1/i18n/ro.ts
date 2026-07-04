import { TranslatedSlideSet } from '@shared/models/translation.model';

const md = String.raw;

const roSlideSetTranslations: TranslatedSlideSet = {
  title: '\\Bine ai venit la ngx-md-slides!',
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
## Ce este ngx-md-slides?

Este un tool care te ajută să **creezi slide-uri** folosind numai cod.
      `,
    },
    {
      backgroundColor: '\\var(--blue)',
      content: md`
## Funcționalități

- Accesibilitate
- Multiple limbi
- Mod luminos/întunecat
- Markdown și HTML/CSS
- [Exemple live](/web-a11y-for-everyone#exemple-live) (componente Angular)
      `,
    },
    {
      backgroundColor: '\\var(--azure)',
      content: md`
## Cum se folosește

- [Dai Fork la acest proiect](https://github.com/ngx-md-slides/ngx-md-slides/fork) și-l modifici cum dorești
- [Citește ghidul de utilizare](add link later) pentru mai multe detalii
- Sau [vezi codul sursă al acestui set de slide-uri](https://github.com/ngx-md-slides/ngx-md-slides/blob/master/src/app/slides/slide-set1/i18n/en.ts) mai întâi dacă ești curios
      `,
    },
    {
      backgroundColor: '\\var(--orange)',
      content: md`
## Markdown

Acest proiect folosește Markdown ([Marked](https://marked.js.org/)) cu [opțiuni predefinite](https://marked.js.org/using_advanced#options).

**Important:** Folosește HTML pentru a oferi o accesibilitate sporită.
E.g. Folosește un tabel HTML cu o legendă/<code>caption</code>.

<table align="center" style="caption-side: bottom">
  <caption>Animale pe care doresc să le văd înainte de a muri</caption>
  <tr>
    <th>Nume animal</th>
    <th>Imagine</th>
  </tr>
  <tr>
    <td>Veverița zburătoare Ezo</td>
    <td style="padding: 0;">
      <img style="display: flex; width: auto; height: 4lh"
           src="img/ezo-squirrel.png"
           alt="O poză cu o veveriță zburătoare Ezo. Arată ca o veveriță obișnuită, doar că e mai drăguță, mai mică, mai rotundă și are ochi mari și negri.">
    </td>
  </tr>
</table>
      `,
    },
    {
      backgroundColor: '\\var(--rose)',
      content: md`
## Limitări

Tickurile(\`) nu pot fi folosite pentru cod. Folosește HTML <code>code</code> pentru cod pe aceeași linie și triplu **tilda**(\~) pentru cod pe mai multe linii.

<table align="center" style="caption-side: bottom">
  <caption>Exemplu de cod cu triplu tilda</caption>
  <tr>
    <th>Cod</th>
    <th>Rezultat</th>
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
    {
      backgroundColor: '\\var(--yellow)',
      content: md`
## Exemple live

Adaugă componente Angular în Markdown prin menționarea numelui componentei într-un comentariu HTML.

<table align="center">
  <caption>Exemplu live cu pisici</caption>
  <tr>
    <th>Cod</th>
    <th style="width: 50%">Rezultat</th>
  </tr>
  <tr>
    <td>
      <pre>

&lt;!--RemoveButtonRo--&gt;

</pre>
</td>
<td>

<!--RemoveButtonRo-->

</td>
</tr>
</table>
      `,
    },
  ],
};

export default roSlideSetTranslations;
