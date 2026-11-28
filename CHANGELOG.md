# v1.0.2
## 11/28/2026

1. [](#improved)
    * Updated repository `homepage` and `bugs` URLs in `blueprints.yaml` and documentation to `https://github.com/ikrimabaskoro/grav-theme-jakarta-noir`.

# v1.0.1
## 11/24/2026

1. [](#improved)
    * Wire the "Send a Project Brief" section to Grav's `Form` plugin via `collaborate.md` frontmatter (with a `mailto:` fallback when `Form` is disabled).
    * Default `contact_email`, `footer_text`, and `footer_socials` to empty, read `theme_config.contact_email` in `collaborate.html.twig`, and hide the copy-email bar when unset.
    * Output custom `accent_crimson` and `accent_cyan` theme options as CSS custom properties (`--crimson`, `--cyan`).
    * Self-host WOFF2 typefaces locally in `fonts/` and remove external Google Fonts requests for EU/GDPR compliance.
    * Output `{{ assets.js()|raw }}` in `<head>` alongside `{{ assets.css()|raw }}` so plugin default-group scripts load properly.
    * Prefix navbar section anchors (`#works`, `#logs`, `#collaborate`) on non-modular pages and remove hardcoded page slug filtering.
    * Update `README.md` cache command to `bin/grav clearcache` and remove deprecated `Problems` plugin reference.
2. [](#bugfix)
    * Build Case Study and Log modal content strictly with DOM nodes and `textContent` in `js/jakarta-noir.js` to prevent unescaped `innerHTML` injection.

# v1.0.0
## 11/23/2026

1. [](#new)
    * Initial release of **Jakarta Noir** modular portfolio and blogging theme for Grav CMS `2.0`.
    * Add modular Twig templates (`hero`, `works`, `logs`, `collaborate`) with YAML frontmatter blueprints and sample content.
    * Add interactive `Inspect Vibe Prompts` overlay, live generative HTML5 Canvas artwork reel, category filtering, Case Study modal, and Markdown Article Reader modal.
