---
title: 'Collaborate'
heading_bold: 'Let''s craft visual systems &'
heading_italic: 'ship bold products.'
description: 'Available for select brand direction, high-craft web interfaces, custom Grav CMS themes, and rapid AI-accelerated MVP sprints. Based in Jakarta, collaborating worldwide.'
services:
  - title: 'Brand & Visual Direction'
    desc: 'Cohesive visual identities, design systems, and anti-slop editorial art direction.'
  - title: 'Vibe-Coded Web Apps'
    desc: 'Interactive prototypes and production web apps shipped at rapid studio velocity.'
  - title: 'Custom Grav CMS Themes'
    desc: 'Bespoke flat-file Twig & YAML themes engineered for speed and effortless editing.'
  - title: 'Creative Consulting'
    desc: 'Design-to-code workflow audits and AI prompting systems for product teams.'
socials:
  - label: 'GitHub'
    url: 'https://github.com'
  - label: 'X / Twitter'
    url: 'https://x.com'
  - label: 'Behance'
    url: 'https://behance.net'
form:
  name: collaborate-brief
  action: '#collaborate'
  classes: 'jn-form'
  fields:
    name:
      label: 'Your Name'
      placeholder: 'e.g. Raka Pratama'
      autocomplete: 'on'
      type: text
      validate:
        required: true
    email:
      label: 'Email Address'
      placeholder: 'you@studio.com'
      type: email
      validate:
        required: true
    scope:
      label: 'Collaboration Scope'
      type: select
      options:
        'Brand Identity & Visual System': 'Brand Identity & Visual System'
        'Vibe-Coded Web App / MVP': 'Vibe-Coded Web App / MVP'
        'Custom Grav CMS Theme': 'Custom Grav CMS Theme'
        'Creative Direction & Advisory': 'Creative Direction & Advisory'
    message:
      label: 'Project Notes & Timeline'
      placeholder: 'Tell me about what you are building, visual references, and target launch...'
      type: textarea
      rows: 4
      validate:
        required: true
  buttons:
    submit:
      type: submit
      value: 'Dispatch Brief →'
      classes: 'jn-btn jn-btn-crimson jn-btn-full'
  process:
    save:
      fileprefix: brief-
      dateformat: Ymd-His-u
      extension: txt
      body: "{% include 'forms/data.txt.twig' %}"
    # Optional: configure the Grav Email plugin and uncomment below to send email notifications
    # email:
    #   from: "{{ config.plugins.email.from }}"
    #   to: "{{ config.plugins.email.to }}"
    #   subject: "[Project Brief] {{ form.value.name|e }} — {{ form.value.scope|e }}"
    #   body: "{% include 'forms/data.html.twig' %}"
    message: 'Thank you! Your project brief has been received.'
---
