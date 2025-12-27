# Ahency - Visual UI/UX Design Plan

## 1. Design Concept: "Kinetic Brutalism"
**Core Philosophy:** A fusion of raw, structural layout (Brutalism) with fluid, high-frame-rate elegance (Kinetic). The website should feel like a living art gallery, not a brochure.

*   **Atmosphere:** Dark, moody, cinematic, and expensive.
*   **Metaphor:** "The Black Mirror." A sleek, polished surface that reveals depth when touched.
*   **Keywords:** Immersive, Fluid, Grainy, Typographic, Spatial.

---

## 2. Visual Identity & System

### A. Typography (The Voice)
Typography is the primary visual element, acting as both image and text.
*   **Display Font (Headings):** *Editorial Serif* (e.g., *GT Alpina*, *Editorial New*, or *Playfair Display*).
    *   **Usage:** Massive scale. Tight leading (line-height). High contrast. Used for emotive words ("Create", "Vision", "Art").
    *   **Treatment:** Italicized keywords for emphasis.
*   **Utility Font (Body/UI):** *Neo-Grotesque Sans* (e.g., *Neue Montreal*, *Switzer*, or *Inter*).
    *   **Usage:** Small, geometric, uppercase for navigation and labels. Highly readable for long-form text.
    *   **Treatment:** Wide kerning (letter-spacing) for uppercase labels to add elegance.

### B. Color Palette (The Mood)
*   **Canvas:** `#050505` (Obsidian) - Not pure black, but a rich, deep charcoal.
*   **Ink:** `#EAEAEA` (Mist) - Soft off-white for text to reduce eye strain.
*   **Accent:** `#B8B8B8` (Chrome) - For metallic gradients on hover.
*   **Highlight:** A single "Electric" color used *only* for interaction feedback (e.g., a tiny dot on active inputs), such as *Cobalt Blue* or *Acid Green*.

### C. Texture & Materiality
To avoid looking "flat," we will use subtle textures:
*   **Noise Overlay:** A 5% opacity CSS film grain overlaid on the entire screen to give a "cinema quality" feel.
*   **Glassmorphism:** Navigation bars and modals will use a backdrop-blur with a faint white border (1px opacity 10%) to simulate etched glass.

---

## 3. Micro-Interactions & Motion Design
The "Premium" feel comes from how the interface *reacts* to the user.

### A. The Cursor (The Conductor)
The default system cursor is hidden.
*   **Default State:** A small, solid white dot (`6px`).
*   **Hover State (Link/Button):** The dot expands into a translucent circle (`64px`) that acts as a lens or blends (difference mode) with the content beneath.
*   **Magnetic Effect:** When near a button, the cursor "snaps" to the button, and the button moves slightly with the mouse position (magnetic physics).

### B. Scroll Physics
*   **Inertia:** Scrolling is not 1:1. It has mass and momentum (using Lenis).
*   **Parallax:**
    *   Images move slower than text (creating depth).
    *   Videos scale up slightly as they enter the center of the viewport.

### C. "Alive" Elements
*   **Buttons:** Not just color changes. On hover, the text slides up and is replaced by the same text from below (Ticker effect). Or the background fills with a liquid animation.
*   **Images:** No static images. All images have a subtle "breathing" zoom effect or react to mouse movement (WebGL distortion).

---

## 4. UI Layout & Component Strategy

### A. The Navigation (Global)
*   **State:** Fixed at the top (or floating pill at bottom).
*   **Visual:** Frosted glass background.
*   **Interaction:** When "Menu" is clicked, it doesn't just drop down; it engulfs the screen in a curtain wipe animation, revealing massive navigation links arranged vertically.

### B. The "Bento" Grid (Services)
For the Branding, Social, Design, and Video sections:
*   Use a **Bento Grid** layout (asymmetrical box grid).
*   **Box 1 (Large):** High-res video loop of a showreel.
*   **Box 2 (Medium):** Typography-heavy service description.
*   **Box 3 (Small):** An interactive 3D object or animated icon.
*   **Hover:** Hovering one box dims the others, focusing attention.

### C. Portfolio Cards
*   **Concept:** "The Gallery Wall."
*   **Visual:** Large, portrait-aspect ratio thumbnails.
*   **Interaction:** The title of the project is hidden until hover. On hover, the image scales down slightly, and the title floats attached to the cursor.

---

## 5. Detailed Page visual Experience

### Homepage: The "Hook"
1.  **Loader:** Screen is black. A percentage counter (0% to 100%) counts up in the center using the Serif font.
2.  **Hero Reveal:** The black curtain lifts. A full-screen video loop plays (abstract ink in water or geometric 3D). Overlaid is the agency name in massive, transparent text with a stroke outline.
3.  **Scroll Prompt:** A subtle "Scroll" line animates downwards.

### About Section: The "Story"
*   **Layout:** Split screen. Left side is sticky (holds the title "WHO WE ARE"), right side scrolls through paragraphs.
*   **Team:** Circular avatars. When hovered, the circle expands into a full rectangular video of that person waving or working.

### Contact: The "Invitation"
*   **Visual:** The entire background becomes the "Submit" button area.
*   **Input Fields:** Minimalist lines. No boxes. When active, the line glows.
*   **Footer:** Enormous typography repeating the agency name, partially cut off at the bottom, suggesting continuity.

---

## 6. Implementation Notes for Developer
*   **Asset Prep:** Ensure all videos are compressed (WebM) and muted.
*   **Z-Index Management:** Cursor must always be `z-index: 9999`.
*   **Accessibility:** Ensure high contrast is maintained despite the "dark mode" aesthetic.
*   **Loading:** Use `React Suspense` for heavy 3D or Video elements to prevent layout shift.
