# Jakarta Noir Theme

The **Jakarta Noir** Theme is for [Grav CMS](http://github.com/getgrav/grav).

![Jakarta Noir](screenshot.jpg)

**Jakarta Noir** is a minimalist-clean, editorial bento portfolio and blogging theme built for **Grav CMS 2.0** (and compatible with **Grav 1.7+**). Designed specifically for creative programmers and vibe coders, it pairs geometric display typography, italic editorial accents, and technical monospace telemetry inside a zero-database modular architecture with switchable **Obsidian Dark** and **Editorial Paper Light** color modes and 100% self-hosted fonts.

## Features

* **Modular Bento Architecture (`Grav 2.0`):** Single-page modular layout (`_hero`, `_works`, `_logs`, `_collaborate`) driven entirely by clean YAML frontmatter and Twig 3 partials.
* **Dual Color Modes (Dark / Light):** Instant switching between **Obsidian Dark Mode** (`#08090d`) and **Editorial Paper Light Mode** (`#f5f4f0`) via the floating glass navbar toggle (persisted in `localStorage`) or theme configuration settings, with customizable primary and secondary accent CSS variables.
* **Self-Hosted Typography:** Bundled local `.woff2` font files in `fonts/` with zero external Google Fonts requests for privacy-first and EU/GDPR-friendly deployments.
* **Vibe Prompt Specs Overlay:** Global `</> Prompts` toggle in the navbar revealing the AI model, build duration, and exact prompt formula over every artwork reel slide and project card.
* **Interactive Featured Artwork Reel:** Tabbed `01`, `02`, `03` showcase stage with synchronized captions and build-time badges.
* **Filterable Works, Built-In Modals & Grav Form Support:** Category filter pills (`All`, `Visual Systems`, `Vibe Apps`, `Creative Dev`), Case Study viewer modal (`Inspect →`), Markdown Article Reader modal, numbered collaboration service pillars, configurable contact email copy bar, and native Grav `Form` plugin integration (with `mailto:` fallback).
* **Responsive Mobile-First Reflow:** Tested down to `390px` mobile viewports with clean single-column grid collapse and zero horizontal overflow.

---

## Installation

Installing the **Jakarta Noir** theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to keep the theme updated with simple terminal commands or via the Grav Admin panel.

### GPM Installation (Preferred)

The simplest way to install this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-cli-gpm) through your system's Terminal (also called the command line). From the root of your Grav install type:

```bash
bin/gpm install jakarta-noir
```

This will install the Jakarta Noir theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/jakarta-noir`.

### Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `jakarta-noir`. You can find these files either on GitHub or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under:

```text
/your/site/grav/user/themes/jakarta-noir
```

> **NOTE:** This theme is a modular component for Grav which requires the `Grav` and `Error` plugins (and optionally the `Form` plugin for the project brief contact form).

---

## Updating

As development for the **Jakarta Noir** theme continues, new versions may become available that add additional features and functionality, improve compatibility with newer Grav releases, and generally provide a better user experience. Updating Jakarta Noir is easy, and can be done through Grav's GPM system, as well as manually.

### GPM Update (Preferred)

The simplest way to update this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-cli-gpm). From the root of your Grav install type:

```bash
bin/gpm update jakarta-noir
```

This command will check your Grav install to see if your Jakarta Noir theme is due for an update. If a newer release is found, you will be asked whether or not you wish to update. To continue, type `y` and hit enter. The theme will automatically update and clear Grav's cache.

### Manual Update

Manually updating Jakarta Noir is pretty simple. Here is what you will need to do to get this done:

1. Delete the `your/site/user/themes/jakarta-noir` directory.
2. Download the new version of the Jakarta Noir theme from either GitHub or [GetGrav.org](http://getgrav.org/downloads/themes).
3. Unzip the zip file in `your/site/user/themes` and rename the resulting folder to `jakarta-noir`.
4. Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing:
   ```bash
   bin/grav clearcache
   ```

> **Note:** Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any configuration files located elsewhere (for example a YAML settings file placed in `user/config/themes/jakarta-noir.yaml`) will remain intact.

---

## Setup

### 1. Activate the Theme

If you want to set **Jakarta Noir** as the default theme, you can do so by following these steps:

1. Navigate to `/your/site/grav/user/config`.
2. Open the `system.yaml` file.
3. Change the `theme:` setting to `theme: jakarta-noir`.
4. Save your changes and clear the Grav cache (`bin/grav clearcache`).

Alternatively, open **Grav Admin → Themes**, locate **Jakarta Noir**, and click **Activate**.

### 2. Install Sample Modular Pages

This repository includes ready-to-use sample modular pages inside `demo-pages/06.jakarta-noir/`:

1. Copy `user/themes/jakarta-noir/demo-pages/06.jakarta-noir` into `user/pages/06.jakarta-noir` (or replace `user/pages/01.home` to use it as your primary homepage).
2. If placed at `user/pages/06.jakarta-noir`, set `home: alias: '/jakarta-noir'` in `user/config/system.yaml` (or via **Grav Admin → Configuration → System → Home page**).
3. Clear the cache (`bin/grav clearcache`) and reload your site.

---

## Directory Structure

```text
jakarta-noir/
├── blueprints.yaml                     # Grav Admin theme configuration schema & metadata
├── CHANGELOG.md                        # Release history following Grav GPM format
├── jakarta-noir.php                    # Theme PHP class registration
├── jakarta-noir.yaml                   # Default theme configuration values
├── LICENSE                             # MIT open-source license
├── README.md                           # Theme documentation
├── screenshot.jpg                      # Marketplace preview image (1000x800 JPEG)
├── thumbnail.jpg                       # Marketplace square thumbnail (300x300 JPEG)
├── css/
│   └── jakarta-noir.css                # Self-hosted @font-face, Dark/Light tokens, Bento grid & form styles
├── fonts/
│   └── jakarta-noir-*.woff2            # Self-hosted WOFF2 sans, italic serif & monospace fonts
├── js/
│   └── jakarta-noir.js                 # Theme switcher, prompt inspector, reel tabs, filters & DOM modals
├── templates/
│   ├── default.html.twig               # Standard fallback page template
│   ├── modular.html.twig               # Modular page assembler
│   ├── partials/
│   │   └── base.html.twig              # Master HTML5 layout, floating glass navbar, modals & footer
│   └── modular/
│       ├── hero.html.twig              # Hero split bento, artwork reel, Dual Discipline & Vibe Stack
│       ├── works.html.twig             # Filterable Selected Works & Vibe Artifacts grid
│       ├── logs.html.twig              # Vibe Logs & Editorial Notes (Featured card + index list)
│       └── collaborate.html.twig       # Unified Collaborate & Grav Form contact brief section
└── demo-pages/
    └── 06.jakarta-noir/
        ├── modular.md                  # Parent modular ordering configuration
        ├── _hero/
        │   ├── hero.md
        │   ├── reel-01.png
        │   ├── reel-02.png
        │   └── reel-03.png
        ├── _works/
        │   ├── works.md
        │   ├── work-01.png
        │   ├── work-02.png
        │   ├── work-03.png
        │   └── work-04.png
        ├── _logs/
        │   └── logs.md
        └── _collaborate/
            └── collaborate.md
```

---

## Configuration & Editing Content

### Theme Options (`user/config/themes/jakarta-noir.yaml`)

You can configure global theme defaults through **Grav Admin → Themes → Jakarta Noir** or by creating `user/config/themes/jakarta-noir.yaml`:

```yaml
enabled: true
brand_title: 'Jakarta Noir'
default_mode: 'dark'
accent_crimson: '#e11d48'
accent_cyan: '#22d3ee'
contact_email: ''
footer_text: ''
footer_socials: []
```

* **`accent_crimson` & `accent_cyan`:** Dynamically override the `--crimson` and `--cyan` CSS custom properties across buttons, badges, ambient glows, and focus states.
* **`contact_email`:** Controls the one-click **Copy Email** button in the Collaborate module (and provides a `mailto:` fallback if the Grav `Form` plugin is disabled). Hidden automatically when left empty.
* **`footer_text` & `footer_socials`:** Configure an optional footer tagline/copyright badge and footer social links. Both default to empty and remain hidden until configured.

### Editing Modular Content

Every section on the landing page is managed through its corresponding Markdown file inside your modular page folder (using **Expert Mode** in Grav Admin or any code editor):

1. **Module Ordering (`modular.md`):**
   Controls the vertical order of modular blocks (`_hero`, `_works`, `_logs`, `_collaborate`) via `content.order.custom`.
2. **Hero, Artwork Reel & Stack (`_hero/hero.md`):**
   * Configure `eyebrow`, `status_text`, `headline_start`, `headline_italic`, `headline_end`, and CTA buttons (`primary_text`, `primary_url`, `secondary_text`, `secondary_url`).
   * Update the `01`–`03` interactive reel slides (`reel`: `title`, `category`, `model`, `build_time`, `image`, `prompt`), the *About // Dual Discipline* card (`about_title_bold`, `about_title_italic`, `about_summary`, `about_metrics`), and *Core Creative & Vibe Stack* (`design_stack`, `dev_stack`).
   * Upload reel artwork images directly into `_hero/` via Grav Admin **Page Media**.
3. **Portfolio Works (`_works/works.md`):**
   * Configure section headings (`heading_bold`, `heading_italic`), filter pill categories (`categories`), and project entries (`projects`), including `code`, `title`, `category`, `year`, `build_time`, `image`, `summary`, `prompt`, and `stack`.
4. **Vibe Logs & Blog Articles (`_logs/logs.md`):**
   * Configure section headings (`heading_bold`, `heading_italic`, `subtitle`) and chronological `posts` (`category`, `date`, `read_time`, `build_meta`, `title`, `excerpt`, `body`). The first entry in `posts` automatically populates the left-column **Featured** card, while all entries appear in the right-column list and open in the **Markdown Reader** modal.
5. **Collaborate & Contact (`_collaborate/collaborate.md`):**
   * Customize `heading_bold`, `heading_italic`, `description`, optional page-level `email` override, numbered collaboration `services` (`title`, `desc`), `socials` links (`label`, `url`), and the Grav `form:` definition (`save` or `email` process).

---

## Third-Party Technologies & Credits

**Jakarta Noir** is built with zero heavy frontend framework dependencies and relies only on the following open-source technologies:

* **[Grav CMS 2.0](https://getgrav.org/) & [Twig 3](https://twig.symfony.com/):** Flat-file CMS core, modular collection engine, and template inheritance (MIT License).
* **[Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), [Noto Serif Display](https://fonts.google.com/noto/specimen/Noto+Serif+Display) & [Noto Sans Mono](https://fonts.google.com/noto/specimen/Noto+Sans+Mono):** Self-hosted `.woff2` geometric sans, editorial italic serif, and monospace typefaces bundled locally in `fonts/` (SIL Open Font License 1.1).
* **Native Web Platform APIs:** Vanilla ES6+ JavaScript, CSS Custom Properties, CSS Grid/Flexbox, DOM APIs, and Clipboard API.
