# 🎬 Premium Features Implementation Guide

This guide explains each premium feature and how to use them in your wedding invitation website.

---

## Feature 1: Animated Envelope Opening 💌

### Overview
Creates a stunning full-screen overlay with an animated envelope that opens to reveal your website.

### Component Location
`src/components/animations/EnvelopeReveal.jsx`

### How It Works

1. **Display** - Shows on page load
2. **User Interaction** - User clicks "Open Invitation" button
3. **Animation** - Envelope flap rotates in 3D using `rotateX` transform
4. **Reveal** - Main content fades in after 1.2 seconds

### Usage in Home.jsx

```jsx
import { useState } from 'react'
import EnvelopeReveal from "../animations/EnvelopeReveal"
import Hero from "../sections/Hero"
import Countdown from "../sections/Countdown"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      {!showContent && <EnvelopeReveal onOpen={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Hero />
          <Countdown />
          {/* Other sections */}
        </>
      )}
    </>
  )
}
```

### Animation Details

**Envelope Opening:**
```jsx
const frontFlap = {
  closed: { rotateX: 0 },
  opening: {
    rotateX: -180,  // Rotates 180 degrees
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
```

### Customization

**Change button text:**
```jsx
<motion.button onClick={handleOpen}>
  Your Custom Text
</motion.button>
```

**Change envelope content:**
```jsx
<p className="text-amber-900 text-lg sm:text-xl font-serif font-semibold">
  Your custom invitation text
</p>
```

**Adjust animation timing:**
```jsx
setTimeout(() => {
  onOpen()
}, 1200)  // Change delay time in milliseconds
```

---

## Feature 2: Wedding Countdown Timer ⏱️

### Overview
Real-time countdown displaying days, hours, minutes, and seconds until the wedding.

### Components

1. **useCountdown.js** - Custom React hook for countdown logic
2. **Countdown.jsx** - UI component displaying the countdown

### How It Works

The `useCountdown` hook:
1. Calculates time difference between now and wedding date
2. Updates every second using `setInterval`
3. Returns object with `{ days, hours, minutes, seconds, total }`

The `Countdown` component:
1. Uses the hook to get time values
2. Displays each unit in an animated card
3. Cards fade in on scroll with stagger effect

### Usage in Home.jsx

```jsx
import Countdown from "../sections/Countdown"

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />  // Add this line
      <EventDetails />
    </>
  )
}
```

### Hook Usage Example

```jsx
// In any component
import { useCountdown } from '../hooks/useCountdown'

export default function MyComponent() {
  const timeLeft = useCountdown('2026-04-18T09:00:00')
  
  return (
    <div>
      <p>Days: {timeLeft.days}</p>
      <p>Hours: {timeLeft.hours}</p>
      <p>Minutes: {timeLeft.minutes}</p>
      <p>Seconds: {timeLeft.seconds}</p>
    </div>
  )
}
```

### Customization

**Change wedding date/time:**
```jsx
// In Countdown.jsx
const weddingDate = '2026-04-18T09:00:00'
// Change to your date in ISO format
```

**Change styling:**
```jsx
// Change card appearance
<div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-amber-200/30 px-6 py-6">
  {/* Modify colors, padding, shadows */}
</div>
```

**Change label text:**
```jsx
<CountdownUnit value={timeLeft.days} label="Days Remaining" />
```

### Hook Details

```javascript
// Returns object structure
{
  days: number,      // Days remaining
  hours: number,     // Hours (0-23)
  minutes: number,   // Minutes (0-59)
  seconds: number,   // Seconds (0-59)
  total: number      // Total milliseconds remaining
}
```

---

## Feature 3: Scroll Animations 🎨

### Overview
Elegant fade-in and slide-up animations triggered when sections come into view.

### Implementation Methods

#### Method 1: Using Framer Motion Directly

```jsx
import { motion } from 'framer-motion'

export default function MySection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Content */}
    </motion.section>
  )
}
```

**Parameters:**
- `initial` - Starting state (hidden)
- `whileInView` - Target state when visible
- `transition` - Animation timing
- `viewport` - Trigger settings
  - `once: true` - Animate only once
  - `amount: 0.3` - Trigger when 30% visible

#### Method 2: Using ScrollAnimation Wrapper

```jsx
import ScrollAnimation from '../animations/ScrollAnimation'

export default function MySection() {
  return (
    <section>
      <ScrollAnimation>
        <h2>This fades in on scroll</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p>Each element can animate separately</p>
      </ScrollAnimation>
    </section>
  )
}
```

### Animation Examples

**Fade In:**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Slide Up:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Scale & Fade:**
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

**Staggered Children:**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 }}
  >
    Item 1
  </motion.p>
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
  >
    Item 2
  </motion.p>
</motion.div>
```

### Applied Sections

#### Hero Section
- Loads with entrance animations
- Staggered text reveals
- Smooth decorative element animations

#### EventDetails Section
- Section fades in on scroll
- Heading animates separately
- List items slide in with delays

#### Countdown Section
- Cards fade in and scale
- Numbers are padded/formatted
- Responsive grid layout

#### RSVP Section
- iframe container scales in
- Heading animations
- Smooth appearance on scroll

---

## 🎨 Animation Best Practices

### 1. Performance
```jsx
// Use transform/opacity for better performance
<motion.div
  initial={{ opacity: 0, y: 40 }}  // ✅ Good - GPU accelerated
  whileInView={{ opacity: 1, y: 0 }}
/>

// Avoid animating layout properties
<motion.div
  initial={{ width: 0 }}  // ❌ Avoid - causes layout reflows
/>
```

### 2. Viewport Settings
```jsx
// Only animate once
viewport={{ once: true }}

// Trigger earlier/later
viewport={{ amount: 0.2 }}  // 20% visible to trigger
viewport={{ amount: 0.8 }}  // 80% visible to trigger
```

### 3. Timing
```jsx
// Typical durations
fast: 0.3s     // Quick interactions
normal: 0.6s   // Standard animations
slow: 0.8-1s   // Entrance animations

// Easing options
'easeIn'      // Slow start
'easeOut'     // Slow end
'easeInOut'   // Slow start and end
'linear'      // Constant speed
```

### 4. Accessibility
Framer Motion respects `prefers-reduced-motion`:
```jsx
// Animations automatically disable if user prefers reduced motion
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  // Automatically skipped if motion is disabled
/>
```

---

## 📱 Responsive Animation Considerations

### Mobile Optimization
```jsx
// Shorter animations on mobile
const duration = window.innerWidth < 640 ? 0.5 : 0.8

<motion.div
  transition={{ duration }}
/>
```

### Touch Interactions
```jsx
<motion.button
  whileTap={{ scale: 0.95 }}  // Feedback on mobile tap
  whileHover={{ scale: 1.05 }}  // Desktop hover
/>
```

---

## 🔧 Advanced Examples

### Parallax Effect
```jsx
<motion.div
  initial={{ y: 0 }}
  whileInView={{ y: -100 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  Moves up slower than scroll
</motion.div>
```

### Rotating Elements
```jsx
<motion.div
  initial={{ rotate: 0, opacity: 0 }}
  whileInView={{ rotate: 360, opacity: 1 }}
  transition={{ duration: 1 }}
>
  Spins while fading in
</motion.div>
```

### Blur & Filter Effects
```jsx
<motion.div
  initial={{ filter: 'blur(10px)', opacity: 0 }}
  whileInView={{ filter: 'blur(0px)', opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  Blurs fade effect
</motion.div>
```

---

## 🎬 Animation Flow Diagram

```
Page Load
    ↓
EnvelopeReveal Shows
    ↓
User Clicks "Open Invitation"
    ↓
Envelope opens (3D rotation) → 1.2s delay
    ↓
Content Appears
    ↓
Hero Section (entrance animations)
    ↓
User Scrolls
    ↓
Countdown (scroll animations)
    ↓
User Continues Scrolling
    ↓
EventDetails (scroll animations)
    ↓
User Continues Scrolling
    ↓
RSVP (scroll animations)
```

---

## 📚 Resources

- **Framer Motion Docs:** https://www.framer.com/motion/
- **React Hooks:** https://react.dev/reference/react/hooks
- **TailwindCSS:** https://tailwindcss.com/
- **Animation Timing Functions:** https://easings.net/

---

## 💡 Tips & Tricks

1. **Test animations** at different scrolling speeds
2. **Use Chrome DevTools** Performance tab to check FPS
3. **Always test on mobile** - different performance
4. **Keep durations consistent** across all animations
5. **Use delays** for staggered reveals
6. **Combine with TailwindCSS** for styling consistency
7. **Test with keyboard navigation** for accessibility

---

## 🚀 Next Steps

1. ✅ EnvelopeReveal - Implemented
2. ✅ Countdown - Implemented
3. ✅ Scroll Animations - Implemented on all sections
4. 📝 Add Gallery section with image animations
5. 📝 Add Location section with map
6. 📝 Add Couple Story section with animations
7. 📝 Add Music background to envelope reveal

Enjoy creating your premium wedding invitation! 💍✨
