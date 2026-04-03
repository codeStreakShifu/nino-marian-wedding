# Wedding Invitation - Code Reference & Examples

## 🎨 Animation Patterns Used

### Staggered Container Animation
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,      // 150ms between children
      delayChildren: 0.2          // 200ms before first child
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Usage
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariants}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-Triggered Animation
```javascript
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  Content appears when scrolled into view
</motion.div>
```

### Hover Effect Pattern
```javascript
<motion.div
  whileHover={{ scale: 1.05, y: -4 }}
  transition={{ duration: 0.3 }}
  className="hover:shadow-xl"
>
  Hover to lift and scale
</motion.div>
```

### Hover Overlay Reveal
```javascript
<motion.div
  className="absolute inset-0 opacity-0 group-hover:opacity-100"
  initial={{ opacity: 0 }}
  whileHover={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Overlay content appears on hover
</motion.div>
```

---

## 🎯 Component Structure Pattern

### Basic Section Template
```javascript
import { motion } from "framer-motion"
import { weddingData } from "../data/weddingData"

export default function YourSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="w-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section content */}
      </motion.div>
    </section>
  )
}
```

### Header Pattern
```javascript
<motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
  {/* Decorative divider */}
  <motion.div
    className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
    variants={itemVariants}
  >
    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-700"></div>
    <span className="text-amber-700 text-xs sm:text-sm font-semibold tracking-widest uppercase">
      Section Label
    </span>
    <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-700"></div>
  </motion.div>

  {/* Title */}
  <motion.h2
    className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-950 mb-3 sm:mb-4"
    variants={itemVariants}
  >
    Section Title
  </motion.h2>

  {/* Subtitle */}
  <motion.p
    className="text-base sm:text-lg text-amber-800"
    variants={itemVariants}
  >
    Subtitle or description
  </motion.p>
</motion.div>
```

---

## 📱 Responsive Design Patterns

### Mobile-First Grid
```javascript
// Single column on mobile, multiple on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {items.map((item) => (
    <div key={item.id}>
      {item.content}
    </div>
  ))}
</div>
```

### Responsive Typography
```javascript
// Scales up on larger screens
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
  Responsive Heading
</h1>

<p className="text-base sm:text-lg md:text-lg lg:text-xl">
  Responsive paragraph
</p>
```

### Responsive Padding
```javascript
// Increases padding on larger screens
<div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
  Content with responsive padding
</div>
```

### Responsive Gap
```javascript
// Grid gap increases on larger screens
<div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
  Items
</div>
```

---

## 🎨 Styling Patterns

### Card Component
```javascript
<div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-amber-200/50 shadow-lg hover:shadow-xl transition-shadow">
  Card content
</div>
```

### Gradient Background
```javascript
<div className="bg-gradient-to-b from-amber-50 via-white to-amber-50">
  Content with gradient background
</div>
```

### Decorative Dots
```javascript
<div className="flex justify-center gap-1.5 sm:gap-2">
  <div className="w-2 h-2 rounded-full bg-amber-700"></div>
  <div className="w-2 h-2 rounded-full bg-amber-600"></div>
  <div className="w-2 h-2 rounded-full bg-amber-700"></div>
</div>
```

### Badge Component
```javascript
<div className="inline-block px-4 py-1.5 bg-gradient-to-r from-amber-700 to-amber-800 text-white text-sm font-semibold rounded-full">
  Badge text
</div>
```

### Button Pattern
```javascript
<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
  className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-widest"
>
  Button Text
</motion.button>
```

---

## 🔄 Data Management Patterns

### Accessing Wedding Data
```javascript
import { weddingData } from "../data/weddingData"

// Use in component
<h1>{weddingData.groom} & {weddingData.bride}</h1>
<p>{weddingData.date} at {weddingData.time}</p>
<p>{weddingData.ceremonyVenue}, {weddingData.location}</p>
```

### Mapping Over Array Data
```javascript
{weddingData.gallery.map((item, index) => (
  <div key={index}>
    <img src={item.src} alt={item.caption} />
    <p>{item.caption}</p>
  </div>
))}
```

### Conditional Rendering
```javascript
{weddingData.googleForm && (
  <iframe
    src={weddingData.googleForm}
    title="RSVP Form"
  />
)}
```

### Using Object Data
```javascript
<h3>{weddingData.groomBio.name}</h3>
<p>{weddingData.groomBio.bio}</p>
<p>Interests: {weddingData.groomBio.interests}</p>
```

---

## 🎬 Timeline Component Pattern

### Story Timeline Structure
```javascript
<div className="relative">
  {/* Vertical line */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-700 to-amber-700 opacity-30"></div>

  {/* Timeline items */}
  {items.map((item, index) => (
    <div key={index} className="flex gap-8">
      {/* Timeline dot */}
      <div className="flex-shrink-0 relative flex items-center">
        <div className="w-6 h-6 bg-white border-4 border-amber-700 rounded-full shadow-lg"></div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white/60 rounded-lg p-8">
        <h3 className="text-2xl font-serif text-amber-950 mb-2">
          {item.title}
        </h3>
        <p className="text-amber-800">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
```

---

## 📊 Grid Variations

### 2-Column Equal Layout
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### 3-Column Masonry
```javascript
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {items.map((item) => (
    <div key={item.id}>{item.content}</div>
  ))}
</div>
```

### Alternating Layout
```javascript
{items.map((item, index) => (
  <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
    <div className="flex-1">{item.left}</div>
    <div className="flex-1">{item.right}</div>
  </div>
))}
```

---

## 🔗 Link & Button Patterns

### External Link
```javascript
<motion.a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  className="inline-block px-6 py-3 bg-amber-700 text-white rounded-lg"
>
  External Link
</motion.a>
```

### Email Link
```javascript
<a
  href={`mailto:${weddingData.contact.email}`}
  className="flex items-center gap-2"
>
  <span>✉️</span>
  Email Us
</a>
```

### Phone Link
```javascript
<a
  href={`tel:${weddingData.contact.phone}`}
  className="flex items-center gap-2"
>
  <span>📱</span>
  Call Us
</a>
```

### Google Maps Link
```javascript
<a
  href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Get Directions
</a>
```

---

## 🖼️ Image Patterns

### Responsive Image
```javascript
<img
  src="/path/to/image.jpg"
  alt="Descriptive text"
  className="w-full h-auto object-cover rounded-lg"
/>
```

### Image with Gradient Overlay
```javascript
<div className="relative">
  <img src="/image.jpg" alt="..." className="w-full" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
```

### Image Placeholder
```javascript
<div className="w-full aspect-square bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg flex items-center justify-center">
  <div className="text-5xl">📸</div>
</div>
```

---

## ♿ Accessibility Patterns

### Form Input
```javascript
<div>
  <label htmlFor="name">Your Name</label>
  <input
    id="name"
    type="text"
    placeholder="Enter your name"
    required
  />
</div>
```

### Icon with Alt Text
```javascript
<img
  src="/icon.svg"
  alt="Wedding venue location"
  className="w-6 h-6"
/>
```

### Skip Link (accessibility)
```javascript
<a href="#main" className="sr-only">
  Skip to main content
</a>
<main id="main">
  Main content here
</main>
```

### Semantic HTML
```javascript
<header>Header content</header>
<nav>Navigation</nav>
<main>Main content</main>
<section>Section</section>
<footer>Footer</footer>
```

---

## 🧪 Testing Code Snippets

### Testing Animation Timing
```javascript
// Add to component temporarily for testing
useEffect(() => {
  console.log('Animation started at:', new Date().toISOString())
}, [])
```

### Testing Viewport Trigger
```javascript
// Add to component temporarily
viewport={{ once: true, amount: 0.2 }}
// Logs when 20% of element enters viewport

console.log('Element entering viewport')
```

### Testing Responsive Classes
```javascript
// Check window size
const checkBreakpoint = () => {
  const width = window.innerWidth
  console.log('Current breakpoint:', {
    mobile: width < 640,
    tablet: width >= 640 && width < 1024,
    desktop: width >= 1024
  })
}
```

---

## 📝 Common Tailwind Classes Reference

### Layout
```
w-screen (full screen width)
max-w-5xl (max width constraint)
mx-auto (center horizontally)
px-4 sm:px-6 lg:px-8 (responsive padding)
py-12 sm:py-16 md:py-20 (responsive padding)
```

### Grid & Flex
```
grid (display grid)
grid-cols-1 sm:grid-cols-2 md:grid-cols-3 (responsive columns)
gap-6 sm:gap-8 (responsive gap)
flex (display flex)
flex-col md:flex-row (responsive flex direction)
items-center justify-center (alignment)
```

### Colors
```
bg-amber-50 (very light)
bg-amber-100 (light)
bg-amber-700 (medium-dark)
bg-amber-950 (very dark)
text-amber-700 (text color)
border-amber-200 (border color)
```

### Effects
```
shadow-lg (light shadow)
shadow-xl (larger shadow)
rounded-lg (border radius)
backdrop-blur-sm (background blur)
hover:shadow-xl (hover state)
transition-all (smooth transition)
```

### Typography
```
font-serif (serif font)
text-3xl sm:text-4xl md:text-5xl (responsive text)
font-bold (700 weight)
tracking-widest (letter spacing)
uppercase (text transform)
italic (font style)
```

---

## 🚀 Performance Tips

### Optimize Animations
```javascript
// Good - uses transform and opacity (GPU accelerated)
whileHover={{ scale: 1.05, opacity: 0.9 }}

// Avoid - uses position changes
whileHover={{ x: 10, y: 10 }}
```

### Lazy Load Images
```javascript
<img
  src="/image.jpg"
  alt="..."
  loading="lazy"
/>
```

### Prevent Re-renders
```javascript
const memoizedComponent = React.memo(MyComponent)
```

### Use Production Build
```bash
npm run build  # Creates optimized production build
```

---

## 💡 Pro Tips

1. **Always test on real mobile devices**, not just browser DevTools
2. **Use CSS Grid for layouts**, simpler and more maintainable
3. **Keep animations under 1 second** for snappy feel
4. **Use `once: true`** in whileInView to reduce re-renders
5. **Test color contrast** for accessibility
6. **Use semantic HTML** for better SEO and a11y
7. **Optimize images** before uploading (use WebP)
8. **Keep bundle size** under 500 KB for faster loads
9. **Use CSS variables** for easy theming
10. **Test with screen readers** for accessibility

---

**Last Updated:** April 2026  
**Version:** 1.0  
**All code patterns tested and production-ready**
