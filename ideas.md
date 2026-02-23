# VILA GYM - Design Philosophy

## Design Approach: Raw Athletic Authority

**Design Movement**: Industrial Strength Aesthetic + Urban Grit

A design that rejects minimalism and embraces the raw power of a real, physical academy. The visual language combines industrial elements with athletic intensity, creating a brand that feels grounded, authentic, and uncompromising.

### Core Principles

1. **Intensity Over Softness**: Bold typography, strong contrasts, dramatic imagery. No rounded corners or gentle transitions—sharp, defined edges.
2. **Real Over Polished**: Raw photography, authentic athletes, genuine gym environments. Avoid stock photo perfection.
3. **Hierarchy Through Contrast**: Black backgrounds with vibrant orange accents create immediate visual dominance.
4. **Functional Brutalism**: Layout is grid-based but asymmetric, with generous whitespace that serves purpose rather than aesthetics.

### Color Philosophy

- **Primary**: Deep Black (#0a0a0a) - Authority, power, professionalism
- **Secondary**: Vibrant Orange (#FF6B35 or similar) - Energy, passion, action
- **Tertiary**: White (#ffffff) - Clarity, contrast, trust
- **Accent**: Dark Gray (#1a1a1a) - Depth and layering

The orange is not decorative—it's the visual representation of intensity and drive. It appears on CTAs, highlights, and key elements.

### Layout Paradigm

- **Hero Section**: Full-width, dark background with dramatic athlete image and orange text overlay
- **Section Blocks**: Alternating full-width blocks with clear visual separation
- **Typography Hierarchy**: Large, bold headings in uppercase with orange accents
- **Asymmetric Grid**: Content flows in 2-3 column layouts with deliberate negative space
- **No Centered Layouts**: Prefer left-aligned or full-width blocks for authority

### Signature Elements

1. **Orange Accent Lines**: Thin, sharp lines separating sections or highlighting key text
2. **Bold Uppercase Typography**: All headings in uppercase for impact and authority
3. **Dark Overlays on Images**: Semi-transparent black overlays ensure text readability and maintain dark aesthetic

### Interaction Philosophy

- **Hover Effects**: Orange glow or slight scale on buttons, no soft transitions
- **CTAs**: Large, orange buttons with white text, high contrast
- **Micro-interactions**: Subtle but purposeful—no unnecessary animations
- **Mobile-First**: Touch-friendly buttons, clear navigation, readable text at all sizes

### Animation

- **Entrance**: Subtle fade-in or slide-in from edges, 300-400ms
- **Hover**: Quick color shift to darker orange, scale up slightly (1.05x)
- **Scroll**: Minimal parallax on hero images, fade-in for sections as they enter viewport
- **No Excessive Motion**: Animations support the content, never distract

### Typography System

- **Display Font**: Montserrat Bold or similar strong sans-serif for headings (all uppercase)
- **Body Font**: Inter or Roboto for body text (clean, readable)
- **Font Sizes**: Large headings (3-4rem on desktop), generous line-height (1.2-1.3)
- **Weight Hierarchy**: Bold for headings, regular for body, light for secondary text

---

## Implementation Notes

- Use CSS Grid for layout structure
- Leverage Tailwind's dark mode for consistent dark backgrounds
- Orange accent color: `#FF6B35` or `oklch(0.6 0.2 30)` in OKLCH format
- Avoid rounded corners—use sharp edges for industrial feel
- Images should be high-contrast, dramatic, and real
