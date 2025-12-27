# Ahency - High-End Creative Agency Website Development Plan

## 1. Project Vision & Philosophy
**"A Digital Masterpiece."**
The goal is to create a website that acts not just as a portfolio, but as a piece of art itself. It must bridge the gap between functional agency information and high-concept visual design.
-   **Keywords:** Modern, Elegant, Immersive, Fluid, Kinetic, High-Art.
-   **Core Vibe:** "Silent Luxury" – Minimalist interface but maximalist interaction.

## 2. Technology Stack (The Foundation)
To achieve high performance mixed with complex visuals, we will use a modern React-based stack.

*   **Framework:** **Next.js 14+ (App Router)**
    *   *Why?* Best-in-class SEO, server-side rendering for performance, and easy routing.
*   **Styling:** **Tailwind CSS**
    *   *Why?* Rapid development, easy responsiveness, and maintainability.
*   **Animations & Interactions:** **Framer Motion**
    *   *Why?* The industry standard for complex React animations (layout transitions, scroll triggers, gestures).
*   **Smooth Scrolling:** **Lenis**
    *   *Why?* Native scrolling feels too "choppy" for a high-end feel. Lenis provides smooth, inertial scrolling essential for parallax effects.
*   **3D/WebGL (Optional but Recommended for "High Art"):** **React Three Fiber (R3F)** or **Spline**
    *   *Why?* For subtle 3D elements (e.g., a fluid distortion effect on images or a 3D hero object).
*   **Icons:** **Lucide React** (Clean, consistent strokes).

## 3. Design System & Aesthetics
*   **Color Palette:**
    *   **Background:** Deep Matte Black (`#050505`) or dark noise texture.
    *   **Text:** Off-White / Alabaster (`#F0F0F0`).
    *   **Accents:** Subtle metallic silver or a singular bold color (e.g., International Klein Blue or Neon Lime) used *sparingly* for calls-to-action.
*   **Typography:**
    *   **Headings:** Large, Editorial Serif (e.g., *Playfair Display* or custom font) to convey "High Art/Fashion".
    *   **Body:** Clean, geometric Sans-Serif (e.g., *Inter*, *Satoshi*, or *Neue Montreal*) for readability.
*   **Visual Language:**
    *   **Grid Lines:** Subtle, faint borders separating sections (brutalist touch).
    *   **Whitespace:** Extensive use of negative space to let content breathe.
    *   **Imagery:** High-fidelity images with hover distortion effects.

## 4. Key Features & Micro-Interactions
This is where the "magic" happens.

1.  **Custom Cursor:**
    *   A magnetic cursor that snaps to buttons and links.
    *   Changes state (grows/shrinks/blends) when hovering over images.
2.  **Preloader:**
    *   A typographic or abstract animation that builds anticipation before the site is revealed.
3.  **Scroll Animations:**
    *   **Parallax:** Images move at different speeds than text.
    *   **Text Reveal:** Words slide up or unblur as they enter the viewport (staggered animation).
    *   **Marquee:** Infinite scrolling text for client lists or services.
4.  **Navigation:**
    *   **FullScreen Menu:** A hamburger menu that opens a full-screen overlay with massive typography and staggered entry animations.
5.  **Page Transitions:**
    *   Seamless morphing between pages (no hard refreshing).

## 5. Site Map & Content Strategy

### A. Hero Section (Home)
*   **Visual:** Full-screen video reel or a WebGL fluid simulation.
*   **Copy:** Minimalist value proposition. "Elevating Brands through Visual Alchemy."
*   **Action:** "See Our Work" (Magnetic Button).

### B. Services (The Core)
Breakdown into 4 Pillars. Presented as an accordion or horizontal scroll section.
1.  **Branding:** Identity, Strategy, Voice.
2.  **Social Media:** Content Creation, Curation, Growth.
3.  **Graphic Design:** UI/UX, Print, Editorial.
4.  **Visual / Video:** Motion Graphics, 3D, Production.
*   *Interaction:* Hovering a service changes the background image to a relevant case study.

### C. Featured Work (Portfolio)
*   **Layout:** Masonry or asymmetric grid.
*   **Card Interaction:** Zoom on hover, title follows cursor, "View Case" prompt.

### D. The Studio (About)
*   **Focus:** The team's philosophy on art and design.
*   **Team:** Minimalist portraits that switch to "fun/creative" versions on hover.

### E. Contact
*   **Layout:** Split screen (Contact Info / Form).
*   **Form:** Floating labels, smooth input animations.
*   **Footer:** Massive footer with quick links and social handles.

## 6. Implementation Roadmap

### Phase 1: Setup & Core Structure
*   Initialize Next.js project.
*   Configure Tailwind & Fonts.
*   Setup Lenis Scroll & Framer Motion registry.
*   Build Global Layout (Header, Custom Cursor, Footer).

### Phase 2: Building Blocks (Components)
*   Create atomic components: `Button`, `Section`, `Typography`, `Card`.
*   Implement basic animations (FadeIn, SlideUp).

### Phase 3: Page Construction
*   **Home Page:** Hero, Reel, Services Preview.
*   **Services Page:** Detailed interactive list.
*   **Work Page:** CMS-driven project list (using dummy data for now).

### Phase 4: Polish & "Juice"
*   Refine micro-interactions (hover states, tap feedback).
*   Optimize performance (Lazy loading images).
*   Responsive testing (Mobile adaptation is critical).

## 7. Next Steps for Developer
1.  **Scaffold Project:** Run `npx create-next-app@latest`.
2.  **Install Dependencies:** `framer-motion`, `@studio-freight/lenis`, `lucide-react`, `clsx`, `tailwind-merge`.
3.  **Begin Phase 1.**
