# Wedding Invitation - Quick Visual Guide

## 🎨 Page Flow & Components

```
┌─────────────────────────────────────────┐
│      ENVELOPE REVEAL (Landing)          │
│   - Animated envelope opening           │
│   - "You are invited" reveal            │
│   - Floating animation with GSAP        │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           HERO SECTION                  │
│   - Elegant headline                    │
│   - Couple names (Niño & Marian)        │
│   - Wedding date & venue info           │
│   - Decorative elements                 │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│        COUPLE INTRODUCTION               │
│   ┌─────────────┬─────────────┐         │
│   │   Groom     │    Bride    │         │
│   │  (Photo)    │   (Photo)   │         │
│   │   Bio       │    Bio      │         │
│   │ Interests   │ Interests   │         │
│   └─────────────┴─────────────┘         │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│        OUR LOVE STORY (Timeline)        │
│   ╔═══════════════════════════════╗    │
│   ║ 2018: The Beginning           ║    │
│   ║ They met and fell in love     ║    │
│   ╚═══════════════════════════════╝    │
│               ↓ (timeline line)         │
│   ╔═══════════════════════════════╗    │
│   ║ 2021: Growing Together        ║    │
│   ║ Building their relationship   ║    │
│   ╚═══════════════════════════════╝    │
│               ↓ (timeline line)         │
│   ╔═══════════════════════════════╗    │
│   ║ 2025: Forever Begins          ║    │
│   ║ He proposed, she said yes!    ║    │
│   ╚═══════════════════════════════╝    │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│      EVENT DETAILS (3-Column Grid)      │
│   ┌──────┬──────┬──────┐              │
│   │📅    │⏰    │📍    │              │
│   │Date  │Time  │Venue │              │
│   │April │9:00  │Bacl. │              │
│   │18    │AM    │Church│              │
│   └──────┴──────┴──────┘              │
│   [Full invitation message below]      │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         GALLERY (3-Column Grid)         │
│   ┌──────┬──────┬──────┐              │
│   │Image │Image │Image │              │
│   │  1   │  2   │  3   │              │
│   └──────┴──────┴──────┘              │
│   ┌──────┬──────┬──────┐              │
│   │Image │Image │Image │              │
│   │  4   │  5   │  6   │              │
│   └──────┴──────┴──────┘              │
│   (All with hover overlays)            │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│        VENUE LOCATION                   │
│   ┌─────────────────────────────┐      │
│   │   Google Maps Embed          │      │
│   │   (500px height)             │      │
│   └─────────────────────────────┘      │
│                                         │
│   Venue Info Card:                      │
│   📍 Baclayon Church                    │
│   Baclayon, Bohol, Philippines          │
│                                         │
│   [Get Directions] [Contact Us]         │
│                                         │
│   Travel Tips:                          │
│   ✈️ Ferry/flight from Manila           │
│   🏨 Arrive day early                   │
│   🌞 Warm tropical weather              │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│           RSVP SECTION                  │
│   "Your presence is the greatest gift"  │
│                                         │
│   [Google Form Embedded]                │
│   (700px height)                        │
│                                         │
│   Can't find form?                      │
│   [✉️ Email Us] [📱 Call Us]            │
│                                         │
│   "Thank you for being part of our      │
│    special day! ❤️"                     │
└─────────────────────────────────────────┘
```

---

## 🎨 Color Palette

### Warm Brown Tones
```
🟫 Amber-950  (Text/Dark elements)    #78350f
🟫 Amber-900  (Text/Strong)           #92400e
🟫 Amber-800  (Text/Medium)           #b45309
🟫 Amber-700  (Text/Lighter)          #d97706
🟫 Amber-600  (Accents)               #d97706
```

### Light & Background
```
🟨 Amber-50   (Main background)       #fffbeb
🟨 Yellow-50  (Gradient bg)           #fefce8
🟨 Rose-100   (Accent bg)             #ffe4e6
⚪ White      (Cards/Content)         #ffffff
```

### Gradients Used
```
from-amber-50 via-yellow-50 to-amber-100
from-white via-amber-50/30 to-white
from-amber-50/50 via-white to-amber-50/50
from-amber-700 to-amber-800 (CTAs)
from-amber-50 to-rose-50 (Feature boxes)
```

---

## 📱 Responsive Breakpoints

| Size | Width | Devices |
|------|-------|---------|
| 📱 Mobile | 375px | iPhone, small phones |
| 📱 Mobile-L | 540px | Larger phones |
| 📱 Tablet | 768px | iPads |
| 💻 Desktop | 1024px | Laptops |
| 💻 Desktop-L | 1280px+ | Large screens |

### Layout Changes
- **Mobile:** Single column, stacked cards, large text
- **Tablet:** 2-3 columns, medium spacing
- **Desktop:** Full 3-column grids, optimized spacing

---

## ✨ Animation Types

### Entrance Animations
```
- Fade in + slide up (0.6s)
- Scale up from center (0.6s)
- Staggered children (0.15s between)
```

### Hover Effects
```
- Scale 1.02-1.05x
- Shadow increase
- Color transitions
- Icon grow 10%
```

### Scroll Animations
```
- WhileInView trigger
- Fade + slide on scroll
- Once per load (once: true)
- Amount: 20-30% visible
```

### Special Animations
- **Envelope:** GSAP floating (3s cycle, sine.inOut)
- **Timeline:** Vertical line with animated dots
- **Cards:** Hover lift with shadow depth

---

## 🎯 Typography Hierarchy

```
H1 - Couple Names (3xl-7xl) ↑ Serif
H2 - Section Headers (3xl-5xl) ↑ Serif
H3 - Card Titles (2xl-3xl) ↑ Serif
H4 - Subsections (xl-2xl) ↑ Serif

P - Body Text (base-lg) ↑ Sans-serif
Caption - Small details (xs-sm) ↑ Sans-serif
Accent - Special text (italic) ↑ Serif
```

### Font Weights
- Bold: 700
- Semibold: 600
- Medium: 500
- Normal: 400

---

## 🎬 Section Heights & Spacing

| Section | Height | Top Padding | Bottom Padding |
|---------|--------|-------------|-----------------|
| Hero | min-h-screen | 0 | var |
| Couple | auto | 16-24 | 16-24 |
| Story | auto | 16-24 | 16-24 |
| EventDetails | auto | 16-24 | 16-24 |
| Gallery | auto | 16-24 | 16-24 |
| Location | auto | 16-24 | 16-24 |
| RSVP | auto | 16-24 | 16-24 |

---

## 📊 Grid Layouts

### Couple Section
```
Mobile:  1 column
Desktop: 2 columns (groom | bride)
Gap: 8-12 units
```

### Story Timeline
```
Mobile:  Stacked cards
Desktop: Alternating left/right
Gap: 12-16 units
Timeline: Vertical line in center
```

### Event Details
```
Mobile:  1 column
Tablet:  1-2 columns
Desktop: 3 columns (date | time | venue)
Gap: 6-8 units
```

### Gallery
```
Mobile:  1 column
Tablet:  2 columns
Desktop: 3 columns
Gap: 6-8 units
Aspect:  square (1:1)
```

---

## 🎪 Interactive Elements

### Hover States
```
Buttons:    Scale 1.05x, shadow increase
Cards:      Lift 4-8px, shadow increase
Images:     Scale 1.05x, overlay fade-in
Links:      Color change, underline
```

### Click States
```
Buttons:    Scale 0.95x (tap feedback)
Forms:      Standard browser behavior
Links:      Navigation
```

### Focus States
```
Keyboard:   Outline visible
Tab order:  Logical top-to-bottom
```

---

## 📐 Spacing System (Tailwind Units)

| Purpose | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Section Padding | 4-6 | 6-8 | 8-10 |
| Card Padding | 6 | 8 | 10 |
| Gap Between Items | 4-6 | 6-8 | 8 |
| Margin Between Sections | 12-16 | 16-20 | 20-24 |
| Text Line Height | 1.5 | 1.6 | 1.7 |

---

## 🔑 Key Visual Elements

### Decorative Dividers
```
- Horizontal lines: Border with gradient
- Vertical lines: w-0.5 or w-1 with opacity
- Dots: 1.5-2.5 width circles with gap spacing
```

### Icons & Symbols
```
- Section headers: ✦ (decorative star)
- Timeline: ⭕ (circle dots)
- CTA: Emoji (✉️ 📱 🗺️ 📸 etc)
- Decorative: Blurred circular gradients
```

### Overlays & Backdrops
```
- Backdrop blur: blur-sm
- Opacity: 30-70%
- Gradients: To transparent
- Hover: Darker overlays
```

---

## 🎯 User Journey

1. **Land** → Envelope reveals with floating animation
2. **Welcome** → Hero section sets romantic tone
3. **Meet Couple** → Introduction with photos & bios
4. **Learn Story** → Timeline of their love
5. **Get Details** → Date, time, venue info
6. **See Moments** → Photo gallery
7. **Find Venue** → Location with map & directions
8. **Confirm** → RSVP form with contact options

**Total Scroll Depth:** ~8000-10000px (varies with content)

---

## 🚀 Performance Considerations

### Optimizations
- ✅ Lazy image loading
- ✅ CSS grid/flex over absolute positioning
- ✅ GPU-accelerated animations (transform/opacity)
- ✅ Minimal repaints (use transform not position)
- ✅ Code splitting via Vite
- ✅ Gzip compression (133 KB JS)

### Load Strategy
1. Critical: Hero + Envelope
2. Important: Couple + Story
3. Standard: Details + Gallery
4. Footer: Location + RSVP

---

## 🛠️ Custom Classes Used

```css
/* Custom animations */
@apply group-hover:scale-110 transition-transform
@apply whileHover={{ scale: 1.05 }}
@apply whileInView={{ opacity: 1, y: 0 }}

/* Custom styling */
@apply backdrop-blur-sm bg-white/70
@apply shadow-2xl border border-amber-200/50
@apply rounded-lg overflow-hidden
```

---

## 📦 Component Props Reference

### Framer Motion Variants
```javascript
containerVariants {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

itemVariants {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}
```

### WhileInView Configuration
```javascript
viewport={{ once: true, amount: 0.2-0.3 }}
transition={{ delay: 0.2-0.5, duration: 0.6 }}
```

---

**Design System Version:** 1.0  
**Last Updated:** April 2026  
**Status:** ✅ Production Ready
