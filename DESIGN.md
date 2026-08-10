# ActionNote Design System — "Neon Signal"

Derived from the shipped brand: the neon-glow checkmark icon (chaotic signal
lines entering, one clean checkmark leaving), the dark in-app UI, and the
purple→violet App Store scenes. Web pages, marketing panels, and documents
should all draw from these tokens.

## Idea

**Signal from noise.** Dark, deep-indigo ground (the noise); one luminous
purple voice (the signal). Glow is meaning: only interactive or headline
elements glow. Everything else stays quiet.

## Color tokens

| Token | Value | Use |
|---|---|---|
| `--ink-0` | `#08060F` | page background base |
| `--ink-1` | `#0D0A1E` | background gradient upper |
| `--ink-2` | `#151129` | cards, surfaces |
| `--ink-3` | `#1E1936` | raised surfaces, hover |
| `--line`  | `rgba(255,255,255,.09)` | hairline borders |
| `--text`  | `#F4F2FF` | primary text |
| `--muted` | `#A79FCC` | secondary text (lavender-grey, never pure grey) |
| `--brand` | `#8B7BFF` | brand core |
| `--brand-hi` | `#C4B5FF` | glow highlights, gradient-text end |
| `--brand-deep` | `#5B4FE8` | pressed states, deep accents |
| `--grad` | `linear-gradient(120deg,#6A5CFF,#A855F7)` | CTAs, gradient text |
| `--glow` | `0 0 44px rgba(139,123,255,.40)` | neon emphasis shadow |
| `--ok` | `#34D399` | success, checkmarks, "free" accents |
| chips | EN `#2DD4BF` · AR `#34D399` · FR `#60A5FA` · ES `#F59E0B` | language identity dots |

Rules: never place `--brand` text on `--brand` fills; body text is `--text`
or `--muted` only; the green `--ok` appears at most once per viewport.

## Typography

- **Display / headings:** `Sora` (Google Fonts; weights 600, 700, 800).
  Geometric, slightly techy — matches the circuit motif.
- **Body / UI:** `Inter` (weights 400, 500, 600, 700). System fallback stack.
- Scale (desktop → mobile): display 68→44, h2 42→32, h3 20, body 17,
  small 14.5, caption 13. Line-height: 1.05 display, 1.15 headings, 1.65 body.
- Letter-spacing: -2.5px display, -1px h2, 0 body. Gradient text only on the
  display line's key phrase — one per page.

## Space, radius, elevation

- Spacing: 4px base; section padding 88px desktop / 56px mobile.
- Radius: 12 (chips) · 18 (buttons) · 24 (cards) · 32 (bands/phone frames).
- Elevation: cards get border `--line` only; phones/CTAs may add `--glow`.
  Never both a strong border and a glow on the same element.

## Signature motifs

1. **Circuit ground:** faint circuit-board SVG lines (from the icon's
   background) at ≤6% opacity behind hero/band sections. Decoration only.
2. **Signal underline:** key phrases get the gradient, not underlines.
3. **Phone shots:** real App Store screenshots (assets/shot-*.jpg), radius 28,
   slight tilt (±3°) in groups, `--glow` on the centerpiece only.
4. **Chips:** language/feature chips use the in-app chip colors on `--ink-2`.

## Components (as built in index.html)

- `.btn` gradient CTA (glow) / `.btn.ghost` quiet secondary
- `.card` feature card: `--ink-2`, `--line` border, icon tile 56px radius 16
- `.step` numbered how-it-works card with gradient number disc
- `.plan` pricing card; featured plan = brand border + glow, tag pill
- `.faq details` accordion: `--ink-2`, summary 600 weight
- `.chip` pill: 999 radius, 13px/600, brand-tinted background
- `.band` full-gradient CTA section, white text, white button

## Voice

Headlines state the outcome, not the tech ("Stop losing ideas", "Speak the
mess. Get the action."). Body copy is first-person-honest, no dashes, no
superlatives. Every claim must be literally true in the shipped app.
