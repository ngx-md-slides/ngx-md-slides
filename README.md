# ngx-md-slides

A way to make multi-lingual presentations, using markdown and Angular components.

## Motivation

I don't like working with PowerPoint.

## Implemented:

- [x] Add Max width / Zoom option
- [x] Add fullscreen option (via "Present" button)
- [x] Add keyboard navigation
  - [x] `Ctrl` + `F5` for fullscreen
  - [x] `Left arrow` and `Page up`, in fullscreen mode, for slide navigation
  - [x] `Right arrow` and `Page down`, in fullscreen mode, for slide navigation
  - [x] `Home` for going to the first slide and `End` for going to the last slide, in fullscreen mode
- [x] Add markdown support
- [x] Add reusable components support
- [x] Add dark mode
- [x] Add slide number
- [x] Add routing (switch between slide sets)
- [x] Language switcher and i18n setup
- [x] Make menu (slide sets links) sticky (top) 
- [x] Implement responsive UI (Update translations, Update a11y)
- [x] Update the max-width / zoom feature to use minus/plus buttons instead and a select control for the zoom level (similar to FireFox's PDF viewer) 
- [x] Use TypeScript for translations instead of JSON
- [x] Add support for Angular components in Markdown
- [x] Add a section at the end for credits, links, etc.
- [x] Fix Vercel 404 error

## To do:

- [ ] Add total number of pages and a "jump to page" feature
- [ ] Perform accessibility checks (WCAG 2.2 minimum) and add an accessibility statement
- [ ] Save presentation as PDF
- [ ] Add loading states
- [ ] Implement non-hardcoded languages (and use a `select` element)

## Folder structure
```
app
|__ layout
|__ shared
|__ slides <-- all slide sets
|____ slide-set1 <-- demo slide set
|______ i18n <-- translations for slide-set1
```

## How to run

- fork this project
- run `npm install` in the "ngx-md-slides" folder
- run `npm run start` for local development
- edit the example slide sets

## Credits

- Icons: [Lucide](https://lucide.dev/)
