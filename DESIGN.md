# ActionNote web design system — "The Ledger"

Adopted Aug 14, 2026 (replaced "Neon Signal"). Master spec lives in the app
repo: `docs/DESIGN-LEDGER.md`. This file is the web summary.

## Concept
A beautiful paper ledger: your voice becomes something written down.

## Tokens (`:root` of index.html is source of truth)
- Ground `--paper #F6F5F0` (bone paper) · cards `--sheet #FFFFFF` · inset `--shade #EFEDE6`
- Text `--ink #22242C` / `--ink-2 #5A5C66` / `--ink-3 #9A9CA6`
- Accent `--ox #8A2F28` — the notebook margin-rule red. Accents, stamps,
  selected states only; NEVER large fills or big buttons.
- `--green #3E7A50` — checkmarks and "done", nothing else.
- Rules `--rule #E3E1D8`, ruled-line bg `--ruled #DCDAD0`

## Type
- Display: Source Serif 4 (webfont; mirrors the app's New York), weights 500–700 + italics
- UI/body: Inter
- Stamps: Inter 700, uppercase, letterspaced 1.6–2px, thin oxblood border, ~-1.5° rotation

## Vernacular (use 1–2 per section, not everywhere)
Ruled baseline lines (repeating-linear-gradient), a red margin rule, stamps,
dashed entry separators, cards tilted ±0.5°, ink CTAs (solid #22242C, paper
text). Corners: 6–12px; pills stay round. Shadows soft and black-based.

## Hard rules
- No purple (#8B7BFF era), no neon, no glows, no dark-gradient heroes.
- App icon stays the existing purple mark (deliberate, Aug 14) — it is the
  one legacy object, treated as a stamp of its own.
- Claims: present tense only for shipped features; testimonials verbatim.
