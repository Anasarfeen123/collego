# Collego — Landing Page Design Specification
> **Paradigm:** Editorial Playful Geometry
> **Visual Tone:** High-End Design Magazine × Modern Science Museum × Awwwards Portfolio

---

## 1. Landing Page Visual Blueprint

The landing page rejects the typical three-column feature block and standard SaaS hero layouts. Instead, it is structured like an editorial magazine cover, divided by thin geometric division lines and anchored by physical, heavy-feeling cards and bold layout-defining shapes.

![Collego Editorial Landing Page Mockup](file:///home/anasa/.gemini/antigravity-cli/brain/b37b07a2-c108-4062-800c-c0ed5ac8d82e/collego_landing_editorial_1782667187332.jpg)

---

## 2. Hero Section: The "Magazine Cover" Layout

The hero section uses a rigid grid structure with asymmetrical, overlapping elements to create rhythm and balance.

### Grid Construction & Elements
*   **Background:** Solid Bone-White (`#F9F8F6`).
*   **Division Lines:** Thin `1px` charcoal borders (`#1C252C` with 15% opacity) acting as page frames, separating columns and headers.
*   **Headline Block (Left-Aligned):** 
    *   Set in **Clash Display Bold** (or **Cabinet Grotesk**) at `4.5rem` (`72px`).
    *   *Headline Copy:*
        > **FIND THE COLLEGE**
        > **THAT FITS YOU.**
        > **NOT JUST YOUR RANK.**
*   **Search Engine Capsule:**
    *   A massive, solid Ink Charcoal speech-bubble-like capsule (`#1C252C`) containing the input text field.
    *   *Input Placeholder:* `"Search Engineering Colleges, Programs, Interests..."` in soft cream gray.
    *   *Action Button:* An offset Volt Green pill (`#AEEA00`) with dark typography reading **"FIND YOUR FIT"**.
*   **Asymmetrical Geometry Frame (Right-Aligned):**
    *   A square container bordered by thin lines, containing a large **Volt Green Circle** (`#AEEA00`).
    *   A floating **Solar Orange semicircle** (`#FF9800`) overlapping the top border of the frame.
    *   A **Lavender Cylinder** (`#9575CD`) resting on the left margin, adding depth and three-dimensionality.

---

## 3. Typography Hierarchy

Typography does not merely display information; it **is** the graphic system.

```
+-------------------------------------------------------------+
|  Clash Display Bold (72px)  -  Primary Headlines            |
|  Cabinet Grotesk Medium (36px) -  Section Subheadings        |
|  Satoshi Regular (16px)     -  Short Editorial Paragraphs   |
+-------------------------------------------------------------+
```

### Scale & Spacing Config
```css
h1.hero-title {
  font-family: 'Clash Display', 'Cabinet Grotesk', sans-serif;
  font-size: 4.5rem;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

h2.section-title {
  font-family: 'Clash Display', sans-serif;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.02em;
}

p.body-editorial {
  font-family: 'Satoshi', 'General Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 32ch; /* Intentionally short for readability */
  color: rgba(28, 37, 44, 0.85);
}
```

---

## 4. Scroll Flow: Dynamic Section Compositions

To keep the user engaged, every section changes layout style entirely. The pattern of `headline -> 3 cards -> button` is strictly banned.

### Scroll Flow Layout Map
```
+--------------------------------------------------+
| Hero: Bold Headline + Search + Geometric Column |
+--------------------------------------------------+
| Section 1: The Predictor Radar (Asymmetric Grid) |
+--------------------------------------------------+
| Section 2: Counselling Timeline (Horizontal Flow) |
+--------------------------------------------------+
| Section 3: Student Forums (Conversation Streams)|
+--------------------------------------------------+
```

---

### Section 1: The Predictor Radar (Asymmetric Layout)
*   **Layout Style:** 60/40 Split.
*   **Left Column (60% Width):**
    *   Large, low-density card displaying a live interaction mockup of the **College Predictor**. 
    *   Features a large card with a Volt Green indicator badge displaying `"94% Match Probability"`.
    *   An interactive slider displaying `"Rank: 142"` versus a historical cutoff limit of `200`.
*   **Right Column (40% Width):**
    *   Large title: `Predicting without the guesswork.`
    *   Short copy explaining how machine learning models crunch 10 years of JOSAA counseling data to predict admission likelihood.
    *   An offset, thick-bordered Volt Green button reading `"Run your numbers"`.

---

### Section 2: Counselling Planner (Vertical Geometric Timeline)
*   **Layout Style:** Alternating asymmetrical block layout.
*   **Visual Anchor:** A bold, thick vertical line (`3px solid #1C252C`) runs down the center of the viewport, but elements are placed offset to the left and right at varying intervals.
*   **Milestone Cards:**
    *   Instead of standard bullet points, milestones (e.g., "Registration", "Mock Allocation", "Seat Locking") are housed in heavily-shadowed physical cards that float off the line.
    *   *Card 1 (Left Offset):* **Electric Purple** accent tag, tilted at `1deg`.
    *   *Card 2 (Right Offset):* **Sky Blue** accent tag, tilted at `-0.5deg`.
    *   *Card 3 (Left Offset):* **Solar Orange** accent tag, resting flush.

---

### Section 3: Discussion Streams (The Forums)
*   **Layout Style:** Interlocking Conversation Streams.
*   **Visual Structure:** A 3-column masonry grid where cards slightly overlap each other.
*   **Content:**
    *   Cards display real student questions, upvotes, and comments.
    *   Each card features a thick border (`2px solid #1C252C`) and a heavy black offset shadow (`box-shadow: 6px 6px 0px #1C252C`).
    *   On hover, the card "sinks" into the page (translation: `translate(4px, 4px)`, shadow reduces: `box-shadow: 2px 2px 0px #1C252C`) to feel physical.

---

## 5. Spotlight Search Interaction Design

The search bar is the central gateway. Activating it transforms the viewport.

```
+---------------------------------------------------+
|  [ Spotlight Search Modal ]                       |
|  > BITS Pilani                                    |
|                                                   |
|  Quick Actions:                                   |
|  [Predict Admission]  [Check Cutoff]  [View Fees] |
|                                                   |
|  Matches:                                         |
|  * BITS Pilani (Computer Science)   - 88% Match    |
|  * BITS Pilani (Electronics)        - 95% Match    |
+---------------------------------------------------+
```

1.  **Interaction Trigger:** Clicking the hero search input or pressing `Cmd + K` opens the Spotlight canvas.
2.  **Backdrop:** The background dims to a soft, semi-transparent warm gray, blurring the elements underneath.
3.  **Real-time Suggestions:** As the student types, results are categorized instantly into **Colleges**, **Exams**, and **Trending Forum Topics**.
4.  **Quick Action Pills:** Floating capsules let the user instantly filter search scopes.

---

## 6. Physical Card Mechanics (CSS Tokens)

Cards are defined by their tactile weight and interactive behaviors.

```css
.editorial-card {
  background: #FFFFFF;
  border: 2px solid #1C252C;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 6px 6px 0px #1C252C;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), 
              box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}

.editorial-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: 10px 10px 0px #1C252C;
}

.editorial-card:active {
  transform: translate(4px, 4px);
  box-shadow: 2px 2px 0px #1C252C;
}
```

---

## 7. Responsive Editorial Reflow

Editorial asymmetry must scale beautifully down to mobile viewports without losing its artistic identity.

```
[ Desktop Grid ]                       [ Mobile Flow ]
+---------------+---------------+      +-------------------+
|               |  Shape Frame  |      |   Headline Block  |
|  Headline     |  (Volt Circle)|      +-------------------+
|  & Search     |               |  =>  |   Spotlight Search|
+---------------+---------------+      +-------------------+
|     Asymmetric Content Cards  |      |   Volt Circle     |
+-------------------------------+      |   (Fills Width)   |
                                       +-------------------+
                                       |   Stacked Cards   |
                                       +-------------------+
```

*   **Tablet (MD Breakpoint):** Grid borders are preserved. The right-aligned Shape Frame shifts underneath the headline, turning into a horizontal geometric banner.
*   **Mobile (SM Breakpoint):** Text sizes scale proportionally to maintain hierarchy. Asymmetric card overlaps collapse into a clean, vertically-stacked column system. Cards retain their bold borders and offset shadows.

---

## 8. Awwwards Criteria Checklist

To ensure this page stands out as a world-class creative site:
*   [x] **No Generic Components:** Completely custom buttons, sliders, input capsules, and borders.
*   [x] **Consistent Gravity:** All spring physics animations maintain consistent tension and friction.
*   [x] **High Contrast Typography:** Ink Charcoal text on Parchment White satisfies contrast metrics while looking artistic.
*   [x] **Grid Integrity:** All lines and separations align to a strict modular horizontal layout.
