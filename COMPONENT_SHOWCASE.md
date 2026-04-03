# 🎬 Component Showcase & Code Examples

## 1️⃣ EnvelopeReveal Component

### Visual Preview
```
┌─────────────────────────────────────────┐
│                                         │
│      ╔════════════════════════════╗    │
│      ║      ✉️                    ║    │
│      ║                            ║    │
│      ║   Love & Commitment       ║    │
│      ║    April 18, 2026         ║    │
│      ║                            ║    │
│      ╚════════════════════════════╝    │
│                                         │
│        [Open Invitation Button]        │
│                                         │
└─────────────────────────────────────────┘
```

### Code Usage
```jsx
import EnvelopeReveal from "../animations/EnvelopeReveal"
import { useState } from 'react'

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  
  return (
    <>
      {!showContent && (
        <EnvelopeReveal onOpen={() => setShowContent(true)} />
      )}
      {showContent && <MainContent />}
    </>
  )
}
```

### Animation Flow
```
Page Load
   ↓
Envelope visible with button
   ↓
User clicks "Open Invitation"
   ↓
Envelope front flap rotates 180° (1s)
   ↓
Envelope back fades out
   ↓
Content revealed (fadeIn)
```

---

## 2️⃣ Countdown Component

### Visual Preview
```
┌─────────────────────────────────────────┐
│          The Big Day                    │
│                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌─────┐│
│  │  47  │  │  10  │  │  25  │  │  08 ││
│  └──────┘  └──────┘  └──────┘  └─────┘│
│   Days     Hours    Minutes   Seconds  │
│                                         │
└─────────────────────────────────────────┘
```

### Code Usage
```jsx
import Countdown from "../sections/Countdown"

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />  {/* Add countdown */}
      <EventDetails />
    </>
  )
}
```

### Hook Example
```jsx
import { useCountdown } from '../hooks/useCountdown'

export default function MyComponent() {
  // Change to your wedding date
  const timeLeft = useCountdown('2026-04-18T09:00:00')
  
  return (
    <div>
      <p>Days remaining: {timeLeft.days}</p>
      <p>Time remaining: {timeLeft.hours}h {timeLeft.minutes}m</p>
    </div>
  )
}
```

---

## 3️⃣ Scroll Animations

### Animation Pattern
```jsx
<motion.section
  initial={{ opacity: 0, y: 40 }}        // Hidden state
  whileInView={{ opacity: 1, y: 0 }}     // Visible state
  transition={{ duration: 0.8 }}         // 0.8 seconds
  viewport={{ once: true, amount: 0.3 }} // Trigger at 30%
>
  Your content here
</motion.section>
```

### Applied to All Sections

#### Hero (Entrance)
```jsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}    // On page load
  transition={{ delay: 0.4 }}
>
  {weddingData.groom}
</motion.h1>
```

#### EventDetails (On Scroll)
```jsx
<motion.p
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}  // On scroll
  transition={{ delay: 0.3 }}
>
  <strong>Date:</strong> {weddingData.date}
</motion.p>
```

#### Countdown (On Scroll)
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
  <p className="text-5xl font-serif">{value}</p>
</motion.div>
```

#### RSVP (On Scroll)
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ amount: 0.3 }}
>
  <iframe src={googleForm} />
</motion.div>
```

---

## 4️⃣ Responsive Layout

### Mobile → Tablet → Desktop Flow
```
Mobile (default)
├─ px-4 padding
├─ text-sm
├─ Full width
└─ Stacked layout

Tablet (sm: 640px)
├─ px-6 padding
├─ text-base
├─ Slightly larger
└─ Optimized spacing

Desktop (md: 768px, lg: 1024px)
├─ lg:px-8 padding
├─ text-lg+
├─ max-w-5xl container
└─ Full feature display
```

### Code Example
```jsx
<div className="
  w-screen                    // Full width
  px-4 sm:px-6 lg:px-8       // Responsive padding
  py-12 sm:py-16 md:py-20    // Responsive vertical spacing
  text-sm sm:text-base md:text-lg  // Responsive text
">
  Content here
</div>
```

---

## 5️⃣ Color System

### Brown/Amber Theme
```
Palette Colors:

Amber (Primary)
├─ amber-50    #fffbf0  (Lightest background)
├─ amber-100   #fef3c7  (Light background)
├─ amber-200   #fde68a  (Medium light)
├─ amber-700   #b45309  (Primary)
└─ amber-950   #120a07  (Darkest text)

Yellow (Accent)
├─ yellow-50   #fefce8  (Light)
├─ yellow-600  #ca8a04  (Accent)
└─ yellow-600  #dca500  (Hover)

White/Translucent
├─ white/50    (Subtle backgrounds)
├─ white/70    (Card backgrounds)
└─ white       (Pure white)
```

### Using in Components
```jsx
// Background
className="bg-amber-50"
className="bg-gradient-to-b from-amber-50 to-yellow-50"

// Text
className="text-amber-950"  // Dark text
className="text-amber-700"  // Medium text
className="text-amber-800"  // Slightly lighter

// Borders
className="border-amber-200"
className="border border-amber-200/30"  // Transparent

// Cards
className="bg-white/50 backdrop-blur-sm"
```

---

## 6️⃣ Animation Timing Reference

### Typical Durations
```
Quick interactions:  0.2-0.3s
Standard animations: 0.6-0.8s
Entrance effects:    0.8-1.0s
Slow reveals:        1.0-1.5s
```

### Easing Functions
```
'easeIn'      // Slow start, fast end
'easeOut'     // Fast start, slow end ← Most used
'easeInOut'   // Slow start and end
'linear'      // Constant speed
'circleIn'    // Circular motion
```

### Example Timings
```jsx
// Quick button tap
transition={{ duration: 0.2 }}

// Standard scroll reveal
transition={{ duration: 0.8, ease: "easeOut" }}

// Staggered list
transition={{ delay: 0.3, duration: 0.6 }}

// Entrance animation
transition={{ delay: 0.4, duration: 0.8 }}
```

---

## 7️⃣ Component File Structure

### EnvelopeReveal.jsx
```
EnvelopeReveal (FC)
├─ useState(isOpened)
├─ handleOpen()
├─ Motion.div (overlay)
│  ├─ Decorative background circles
│  └─ Motion.div (envelope container)
│     ├─ Front flap (3D rotation)
│     ├─ Back flap (fade)
│     ├─ Content area
│     └─ Button
└─ AnimatePresence (exit animation)
```

### Countdown.jsx
```
Countdown (FC)
├─ useCountdown() hook
├─ Motion.section
│  ├─ Motion.h2 (heading)
│  └─ Grid
│     ├─ CountdownUnit (Days)
│     ├─ CountdownUnit (Hours)
│     ├─ CountdownUnit (Minutes)
│     └─ CountdownUnit (Seconds)
└─ Each unit has individual animations
```

### useCountdown.js
```
useCountdown(targetDate)
├─ useState (timeLeft)
├─ useEffect
│  ├─ calculateTimeLeft()
│  ├─ setInterval (1000ms)
│  └─ Cleanup interval
└─ Return { days, hours, minutes, seconds, total }
```

---

## 8️⃣ Common Customizations

### Change Countdown Date
```javascript
// File: Countdown.jsx, Line 6
const weddingDate = '2026-04-18T09:00:00'

// Format: YYYY-MM-DDTHH:MM:SS
// Example: '2025-12-25T18:30:00' for Christmas 2025, 6:30 PM
```

### Change Section Colors
```jsx
// Change background color
<section className="bg-amber-50">  // Original
<section className="bg-rose-50">   // Rose theme
<section className="bg-blue-50">   // Blue theme

// Change text color
className="text-amber-950"  // Original
className="text-rose-950"   // Rose theme
className="text-blue-950"   // Blue theme
```

### Adjust Animation Duration
```jsx
// In any motion component
transition={{ duration: 0.6 }}  // Faster
transition={{ duration: 1.0 }}  // Slower
```

### Change When Animation Triggers
```jsx
// In scroll animations
viewport={{ amount: 0.2 }}  // Trigger when 20% visible
viewport={{ amount: 0.5 }}  // Trigger when 50% visible
viewport={{ amount: 0.8 }}  // Trigger when 80% visible
```

---

## 9️⃣ Performance Tips

### Optimize Animations
```jsx
// ✅ Good - GPU accelerated
<motion.div initial={{ opacity: 0, y: 40 }} />

// ❌ Avoid - Causes reflows
<motion.div initial={{ width: 0 }} />

// ✅ Good - Use will-change
<div className="will-change-opacity" />
```

### Check Bundle Size
```bash
npm run build
# Check dist/assets/index-*.js size
```

### Performance Monitoring
- Use Chrome DevTools Performance tab
- Aim for 60 FPS animations
- Monitor CPU usage during scroll

---

## 🔟 Testing Checklist

### Functional Tests
- [ ] Envelope opens on button click
- [ ] Countdown updates every second
- [ ] Animations trigger on scroll
- [ ] No console errors

### Responsive Tests
- [ ] Mobile (375px - 425px)
- [ ] Tablet (600px - 800px)
- [ ] Desktop (1024px+)

### Browser Tests
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari

### Performance Tests
- [ ] First contentful paint < 1s
- [ ] Animations run at 60 FPS
- [ ] No layout shifts
- [ ] No jank during scroll

---

## 📚 Code Snippets Repository

### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
/>
```

### Slide Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>
```

### Scale In
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
/>
```

### Staggered Children
```jsx
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effect
```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

---

## 🎉 You're Ready!

All components are implemented, documented, and ready to use. 

**Next:** Customize with your details and launch! 🚀

---

**Happy Coding! 💍✨**
