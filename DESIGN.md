# Shourya Academy - Angular 21 Design System Implementation

## 1. Overview & Creative North Star: "The Academic Editorial"
This design system is tailored for Shourya Academy’s modern Angular application. We are using **CSS Custom Properties (`:root`)** combined with **Vanilla SCSS** for scalable, highly performant styling without relying on heavy utility frameworks unless required.

The interface emphasizes **Tonal Depth** and **Asymmetry**, achieving an editorial "high-end broadsheet" feel. 

## 2. Core Angular Integration (`theme.scss`)
You can drop the generated `theme.scss` directly into your Angular `styles.scss` (e.g., `@import 'theme';`).

### The Color Palette (CSS Variables)
*   **Primary (Deep Navy):** `--primary: #00081E` / `--primary-container: #0A1F44`. 
*   **Secondary (Saffron):** `--secondary: #835500` / `--secondary-container: #FEAE2C`. 
*   **Surface Hierarchy:** `--surface: #FBF8FC` descending to `--surface-container-lowest: #FFFFFF`.

### The Rules of Engagement
*   **The "No-Line" Rule:** Do not use `border: 1px solid`. Define boundaries strictly via background colors (e.g., use `background: var(--surface-container-low)` against `var(--surface)`).
*   **Surface Nesting:** Place `var(--surface-container-lowest)` UI cards strictly on `var(--surface-container)` backgrounds.
*   **Glassmorphism (Angular Components):** 
    ```scss
    .glass-header {
      background-color: color-mix(in srgb, var(--surface) 80%, transparent);
      backdrop-filter: blur(12px);
    }
    ```
    *Gradient buttons:*
    ```scss
    .btn-primary {
      background: linear-gradient(135deg, var(--primary), var(--primary-container));
    }
    ```

## 3. Typography Configuration
We use Google Fonts: **Plus Jakarta Sans** (Headlines, Labels) and **Noto Serif** (Body text). 

**Implementation in Angular:**
Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Plus+Jakarta+Sans:wght@500;800&display=swap" rel="stylesheet">
```

Variables:
*   `--font-headline: 'Plus Jakarta Sans', sans-serif;`
*   `--font-body: 'Noto Serif', serif;`
*   `--font-label: 'Plus Jakarta Sans', sans-serif;`

## 4. Angular Component Principles

### Buttons (`<button class="btn btn-primary">`)
*   **Primary:** Saffron background (`--secondary-container`) with `border-radius: 1rem`.
*   **Secondary:** Ghost style with `--outline-variant` boundary at 20% opacity.

### Cards (`<div class="editorial-card">`)
*   **Implementation:** No `<hr>` or border lines. Use `margin-bottom: var(--spacing-2)` (8px) or background shifts.
*   **Roundedness:** `border-radius: 1.5rem` (24px) for cards.

### Input Fields (`<input class="editorial-input">`)
*   **Base:** `background: var(--surface-container-lowest)`.
*   **State:** On focus, apply a `box-shadow` or border-bottom using `--primary` at 40% opacity. 
*   **Label:** `<label>` must be above the input, using `font-family: var(--font-label)`.

## 5. Layout Architecture 
*   **Spacing:** Use wide margins (`5rem` for sections). White space is deliberate. 
*   **Tonal Layering:** Shadows should be ambient: `box-shadow: 0 20px 32px rgba(27, 27, 30, 0.05);`
