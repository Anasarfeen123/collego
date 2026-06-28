# Collego UI Architecture — Design Iteration & Spacing Upgrades Report

The Collego UI has been updated to resolve card overlap issues with the workspace drawers.

## 📁 Source Code Map
All core source files are in the root directory:
*   **Structure:** [index.html](file:///home/anasa/Projects/Collego/index.html) — Dynamic layouts, interactive nodes, and unfoldable timelines.
*   **Styling:** [index.css](file:///home/anasa/Projects/Collego/index.css) — Variable themes (parchment white and neobrutalist dark), margin transitions, spring transforms, and particle classes.
*   **Interactivity:** [app.js](file:///home/anasa/Projects/Collego/app.js) — Real-time clock ticks, mouse parallax, upvote particle spawners, and SPA sweep intervals.

---

## 🛠️ Implemented Fixes & Upgrades

### 1. Card Spacing & Drawer Visibility (New!)
*   **The Issue:** When workspace popups (AI assistant, notifications feed, or bottom college preview) opened, the main application card was translated using transforms (`translateX` / `translateY`). Because the card takes up 82%-90% width of the viewport, the translation was not enough to clear the drawers. The drawers (which have a lower `z-index: 5` to look like they sit underneath the card) remained partially covered and blocked by the card's right and bottom edges.
*   **The Solution:** Refactored the layout transitions in [index.css](file:///home/anasa/Projects/Collego/index.css#L404) and [index.css](file:///home/anasa/Projects/Collego/index.css#L468-L485):
    *   Changed `.app-card-wrapper` transition to `all 0.4s` and added `min-width: 0` so the card wrapper can shrink dynamically.
    *   Substituted translate transforms with **margin-based layout compressions**:
        *   **AI Panel / Notifications Open:** `.app-card-wrapper` gets `margin-right: 404px;` and scales down to `0.98`. The card wrapper smoothly shrinks in width, leaving a 20px gap to the left of the `380px` drawer.
        *   **College Preview Open:** `.app-card-wrapper` gets `margin-bottom: 344px;` and scales down to `0.98`. The card wrapper smoothly shrinks in height, lifting its bottom edge to leave a 20px gap above the `320px` bottom preview drawer.
*   **The Result:** The main card automatically resizes and shifts out of the way, guaranteeing that the drawers are 100% visible and unblocked on all viewport sizes, while retaining the physical "sliding out from under the card's shadow" visual illusion.

### 2. Fixed Card Overlapping
*   **The Issue:** On tablet/mobile viewports, the horizontal flex columns in the Dashboard and alternating offsets in the Timeline squeezed cards, causing text overlaps.
*   **The Solution:** Introduced vertical collapses under 1024px:
    *   Toggled `.dashboard-grid-row` to stack vertically (`flex-direction: column`).
    *   Collapsed timeline milestones to stack vertically aligned with a left spine, removing alternating angles.

### 3. Redesigned Dark Mode
*   **The Issue:** Solid white outlines and white box shadows on dark gray cards looked unappealing.
*   **The Solution:** Refactored `body.theme-dark` tokens into a **Tactile Space-Slate Colorway**:
    *   **Desk Workspace:** Deep charcoal-blue `#090B10`.
    *   **Card Face Background:** Space-slate `#151C26`.
    *   **Tactile Shadows & Borders:** Solid black `#020304`.
*   **The Result:** Cards maintain the Neobrutalist tactile cartoon outline and shadow physics in dark mode, matching light mode.

---

## ⚙️ Verification & Launch
Open [http://localhost:5173/](http://localhost:5173/) in your web browser:
1.  **Test side drawers:** Click the AI sparkle button or notifications button. Watch the main application card dynamically compress its width to make room for the drawer, leaving it 100% visible.
2.  **Test bottom drawer:** Click a college card in the Predictor results. Watch the main application card dynamically shrink its height, lifting its bottom boundary to expose the preview drawer.
