# Copilot instructions for this repo

## Project shape
- This is a static portfolio site, not a framework app. Pages are plain HTML files (`index.html`, `projects.html`, `project.html`, `music.html`, `contact.html`), and the DOM is assembled in `js/main.js`.
- Content is data-driven: edit `js/data.js` for site copy, project entries, and music details. `js/main.js` renders it into the page based on `body[data-page]`.
- The app uses a simple custom render pattern: `R[page]()` selects the page handler, then injects HTML strings into `#app`. Keep that pattern if you add new sections or pages.
- Styling is centralized in `css/style.css`; prefer extending existing classes and color variables instead of introducing a new CSS structure.

## Important architecture details
- `SITE`, `PROJECTS`, and `MUSIC` are global objects in `js/data.js`; they drive the whole site. A new project is not a new HTML page; it is a new object in `PROJECTS` with an `id` used by `project.html?id=...`.
- The content is sanitized with `esc()` before rendering (`js/main.js`), so text should be passed through the data objects rather than concatenated freely into raw HTML.
- Media rendering is centralized in the `media()` helper: supports `image`, `video`, and YouTube embeds from `src` values.
- The contact form uses `SITE.formspree` if set; otherwise it falls back to a `mailto:` link, so do not assume a backend exists.

## Workflow and conventions
- There is no build step or package manager. For local work, open the folder in VS Code and use Live Server (`README.md` is the source of truth for this workflow).
- Keep changes static and lightweight: this repo is intentionally plain HTML/CSS/JS with no bundler, transpiler, or tests.
- For content updates, prefer `js/data.js` over editing individual HTML files. The HTML entry pages only set `data-page` and load the shared scripts.
- When adding a project, copy the existing template block in `js/data.js` and update `id`, `title`, `date`, `blurb`, `cover`, `sections`, `media`, and optional `links`.
- Use the existing `img()` / `fallback()` pattern for local images and keep asset paths relative to the root (`images/...`, `files/...`).

## Project-specific patterns
- The site is intentionally a single-file application with minimal abstraction. Favor small helper functions and string templates already used in `js/main.js` instead of introducing frameworks or modules.
- `README.md` says to keep image files under ~500 KB and to use `.jpg` for portraits/images. Respect this.
- `SITE.resume` is expected to live at `files/resume.pdf`; the site embeds it in an iframe and offers download/open actions.
- The design language is a warm, earthy palette defined by CSS custom properties in `css/style.css`; reuse those variables (`--forest`, `--orange`, `--sand`, etc.) when styling.

## Editing guidance
- If you need to update page structure or a new page section, check how `R.home()`, `R.projects()`, `R.project()`, `R.music()`, and `R.contact()` are written before adding a new one.
- If you change navigation or page IDs, keep them consistent with `nav` in `js/main.js` and the `body[data-page]` values in the HTML pages.
- Do not add a backend or dependency-heavy solution unless the user explicitly asks; this project is built around static hosting and CDN fonts.
