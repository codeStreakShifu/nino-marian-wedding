# 🎉 Premium Wedding Invitation Website

A luxurious, interactive wedding invitation website built with React, Vite, and TailwindCSS featuring premium animations and features.

## ✨ Features

### 1. **Animated Envelope Opening Animation**
- Full-screen overlay with elegant envelope reveal
- Smooth 3D envelope opening effect
- "Open Invitation" button to reveal the website
- Fade-out animation with graceful transitions
- Perfect romantic welcome experience

**Component:** `src/components/animations/EnvelopeReveal.jsx`

**How it works:**
- On page load, displays an elegant envelope with animation
- User clicks "Open Invitation" button
- Envelope flap rotates open in 3D
- Overlay fades away revealing the main website

---

### 2. **Wedding Countdown Timer**
- Real-time countdown to the wedding date (April 18, 2026)
- Displays: Days | Hours | Minutes | Seconds
- Updates automatically every second
- Elegant card-based UI with TailwindCSS
- Fully responsive design

**Components:**
- `src/components/sections/Countdown.jsx` - Main countdown display
- `src/components/hooks/useCountdown.js` - Custom React hook for countdown logic

**Features:**
- Precision countdown calculations
- Automatic updates via `setInterval`
- Beautiful gradient cards
- Scale animations on scroll

---

### 3. **Scroll-Based Section Animations**
- Fade-in animations as sections come into view
- Smooth slide-up effects
- Slight scale transitions for elegance
- Applied to all major sections:
  - Hero section (on page load)
  - Wedding Details (on scroll)
  - Countdown section (on scroll)
  - RSVP section (on scroll)

**Animation Details:**
- Duration: 0.8 seconds
- Easing: `easeOut` for smooth deceleration
- Fade in from 40px below
- Triggered when section is 20-30% visible

---

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/
│   │   ├── EnvelopeReveal.jsx       # Envelope opening animation
│   │   └── ScrollAnimation.jsx      # Reusable scroll animation wrapper
│   ├── sections/
│   │   ├── Hero.jsx                 # Main hero with entrance animations
│   │   ├── Countdown.jsx            # Wedding countdown timer
│   │   ├── EventDetails.jsx         # Event details with scroll animations
│   │   ├── RSVP.jsx                 # RSVP form with animations
│   │   ├── Gallery.jsx              # (Empty - ready for gallery)
│   │   ├── Location.jsx             # (Empty - ready for location)
│   │   ├── Story.jsx                # (Empty - ready for couple story)
│   │   └── Couple.jsx               # (Empty - ready for couple info)
│   ├── hooks/
│   │   └── useCountdown.js          # Countdown timer logic hook
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── weddingData.js           # Wedding information
│   └── pages/
│       └── Home.jsx                 # Main page with all sections
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🎨 Color Scheme

The entire website uses an elegant **brown/amber theme**:
- **Primary Colors:** Amber-700, Amber-950, Yellow-600
- **Background:** Gradient from Amber-50 to Yellow-50
- **Accents:** White with transparency, amber gradients

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Available Dependencies
- **React** - UI framework
- **Vite** - Build tool
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Advanced animations

### Start Development Server
```bash
npm run dev
```

Server will start at `http://localhost:5175`

### Build for Production
```bash
npm run build
```

---

## 🎬 Animation Libraries Used

### Framer Motion
Provides smooth, professional animations:
- `motion.div` - Animated containers
- `initial` - Starting animation state
- `animate` - Target animation state
- `whileInView` - Trigger on scroll
- `transition` - Animation timing
- `whileTap` / `whileHover` - Interactive states

**Example:**
```jsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
>
  Content here
</motion.div>
```

---

## 🔧 Key Components

### EnvelopeReveal.jsx
```jsx
<EnvelopeReveal onOpen={() => setShowContent(true)} />
```
- Displays on initial page load
- Triggers content reveal when opened
- Uses 3D transforms for envelope effect
- Smooth fade-out animation

### Countdown.jsx
```jsx
const timeLeft = useCountdown('2026-04-18T09:00:00')
```
- Displays countdown boxes
- Updates every second
- Responsive grid layout

### useCountdown.js Hook
```jsx
const timeLeft = useCountdown(targetDate)
// Returns: { days, hours, minutes, seconds, total }
```

---

## 📱 Responsive Design

All components are fully responsive using TailwindCSS breakpoints:

| Screen Size | Breakpoint | Padding | Text Size |
|---|---|---|---|
| Mobile | Default | `px-4` | `text-base` |
| Tablet | `sm` (640px) | `px-6` | `text-lg` |
| Desktop | `md` (768px) | `lg:px-8` | `text-xl+` |

---

## 🎯 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 📝 Wedding Details

**Couple:** Niño & Marian  
**Date:** April 18, 2026  
**Time:** 9:00 AM  
**Venue:** Baclayon Church  
**Location:** Bohol, Philippines  

---

## 🎨 Customization

### Change Wedding Details
Edit `src/components/data/weddingData.js`:
```javascript
export const weddingData = {
  groom: "Your Name",
  bride: "Partner Name",
  date: "Your Date",
  // ... other details
}
```

### Change Colors
Modify TailwindCSS classes in components:
- Replace `amber-*` colors with your preferred colors
- Adjust gradients in section backgrounds

### Modify Animations
Edit timing in component transitions:
```jsx
transition={{ duration: 0.8 }} // Change duration
```

---

## 🚀 Performance

- **Optimized animations** using GPU acceleration
- **Code splitting** with Vite
- **Lazy loading** of sections
- **Minimal bundle size** with TailwindCSS purging

---

## 📄 License

Premium Wedding Invitation Website © 2026

---

## 💡 Tips

1. **Test on Mobile** - Use Chrome DevTools responsive mode
2. **Smooth Scrolling** - Works best with smooth scroll enabled
3. **Performance** - Animations are optimized for 60fps
4. **Accessibility** - All animations respect `prefers-reduced-motion`

---

## 🤝 Support

For issues or questions, please check:
- Framer Motion docs: https://www.framer.com/motion/
- TailwindCSS docs: https://tailwindcss.com/
- React docs: https://react.dev/

Enjoy your premium wedding invitation website! 💍✨
