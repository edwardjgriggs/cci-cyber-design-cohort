# Vault 7 — Cybersecurity Training Game

**An interactive cybersecurity training experience built for Virginia's Commonwealth Cyber Initiative (CCI) Design Cohort — Team 7.**

## Overview

Vault 7 is a browser-based training game that walks non-technical users through core cybersecurity skills via mission-style scenarios:

- **Operation First Line** — password security (builder + cracking mechanics)
- **Operation Bait & Hook** — phishing detection and inbox triage
- Agent-style mission briefings, scoring, and completion screens

## Run Locally

The game is a single standalone HTML file — no build step required.

```bash
# From the repo root
python -m http.server 8080
# Then open http://localhost:8080/
```

Or just open `index.html` directly in a browser.

## Live Site

Deployed via GitHub Pages: https://edwardjgriggs.github.io/cci-cyber-design-cohort/

## Project Files

- `index.html` — the standalone Vault 7 game
- `public/vault7.html` — same game, served at `/vault7.html`
- `google-site/` — marketing site HTML embeds (home, problem, solution, team)

## Team

Developed by Team 7 as part of the Commonwealth Cyber Initiative's undergraduate cybersecurity design program in Virginia.

## Context

The [Commonwealth Cyber Initiative](https://cyberinitiative.org/) is a Virginia statewide investment connecting academic, industry, and government partners to advance cybersecurity research and education.

## License

MIT — see [LICENSE](LICENSE).
