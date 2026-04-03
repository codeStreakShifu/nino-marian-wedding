# 💍 Premium Wedding Invitation Website

**A luxury digital wedding invitation with animated envelope reveal, countdown timer, and scroll animations.**

Built with **React**, **Vite**, **TailwindCSS**, and **Framer Motion** ✨

---

## 🎯 What's Included

### ✨ Premium Features
- **💌 Animated Envelope Reveal** - Full-screen 3D envelope opening animation
- **⏱️ Wedding Countdown Timer** - Real-time countdown (Days | Hours | Minutes | Seconds)
- **🎨 Scroll Animations** - Elegant fade-in and slide-up effects on all sections

### 📱 Responsive Design
- Mobile-first approach
- Fully responsive layout
- Tested on all devices

### 🎬 Advanced Animations
- Framer Motion integration
- GPU-accelerated animations
- 60 FPS performance

### 🎨 Elegant Brown Theme
- Sophisticated color palette
- Professional gradient effects
- Beautiful typography

---

## 🚀 Quick Start (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5175 in your browser
```

---

## 📚 Documentation

Read these in order:
1. **[QUICK_START.md](./QUICK_START.md)** - Get running in 3 minutes ⚡
2. **[PREMIUM_FEATURES.md](./PREMIUM_FEATURES.md)** - All features explained 📘
3. **[ANIMATION_GUIDE.md](./ANIMATION_GUIDE.md)** - Animation deep dive 🎬
4. **[COMPONENT_SHOWCASE.md](./COMPONENT_SHOWCASE.md)** - Code examples 💻
5. **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Complete summary 📋

---

## ⚡ Key Features at a Glance

| Feature | What It Does | Location |
|---------|---|---|
| 💌 **Envelope Reveal** | Animated envelope opens on page load | Full screen overlay |
| ⏱️ **Countdown Timer** | Shows days/hours/mins/secs to wedding | Below hero section |
| 🎨 **Scroll Animations** | Smooth animations as you scroll | All sections |
| 📱 **Responsive** | Works perfectly on all devices | Everywhere |

---

## 🛠️ Customize Your Wedding

### Update Wedding Details (30 seconds)

Edit `src/components/data/weddingData.js`:

```javascript
export const weddingData = {
  groom: "Your Name",
  bride: "Partner Name",
  date: "April 18, 2026",
  time: "9:00 AM",
  ceremonyVenue: "Your Venue",
  location: "Your City, Country",
  googleForm: "YOUR_GOOGLE_FORM_URL"
}
```

### Change Countdown Date

Edit `src/components/sections/Countdown.jsx` (line 6):

```javascript
const weddingDate = '2026-04-18T09:00:00'  // Change this
```

---

## 📱 Full-Width Responsive Design

✅ Full screen width on all devices  
✅ No side margins or constraints  
✅ Perfect mobile experience  
✅ Desktop optimized layouts  

---

## 🎨 Color Theme

Elegant **Brown/Amber** palette:
- Primary: `amber-700` (#b45309)
- Dark: `amber-950` (#120a07)
- Light: `amber-50` (#fffbf0)
- Accent: `yellow-600` (#ca8a04)

To change theme, replace `amber` with `rose`, `blue`, `purple`, etc.

---

## 📦 Build for Production

```bash
npm run build
```

Output in `dist/` folder - ready to deploy!

**Build Stats:**
- HTML: 0.46 kB
- CSS: 15.17 kB (gzipped: 4.02 kB)
- JS: 327.07 kB (gzipped: 103.11 kB)
- Build Time: 1.51s

---

## 🚀 Deploy Your Website

### Vercel (Easiest - Free)
```bash
npm install -g vercel
vercel
```

### Netlify (Free)
Drag & drop the `dist/` folder

### Traditional Hosting
Upload `dist/` folder via FTP/SFTP

---

## 🎬 Features Breakdown

### 1. Envelope Opening Animation
When visitors arrive:
1. Beautiful envelope appears
2. They click "Open Invitation"
3. Envelope flap rotates in 3D
4. Website content fades in ✨

### 2. Countdown Timer
Displays real-time countdown:
- **47** Days
- **10** Hours
- **25** Minutes
- **08** Seconds

Updates every second automatically!

### 3. Scroll Animations
As users scroll, sections animate in:
- Fade in effects
- Slide up transitions
- Scale animations
- Professional, smooth feel

---

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/
│   │   ├── EnvelopeReveal.jsx       ✅ Envelope animation
│   │   └── ScrollAnimation.jsx      ✅ Scroll wrapper
│   ├── sections/
│   │   ├── Hero.jsx                 ✅ With animations
│   │   ├── Countdown.jsx            ✅ Countdown timer
│   │   ├── EventDetails.jsx         ✅ With animations
│   │   ├── RSVP.jsx                 ✅ With animations
│   │   ├── Gallery.jsx              ✅ Gallery template
│   │   └── Location.jsx             ✅ Location template
│   ├── hooks/
│   │   └── useCountdown.js          ✅ Countdown hook
│   ├── data/
│   │   └── weddingData.js           ✅ Wedding info
│   └── pages/
│       └── Home.jsx                 ✅ Main page
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🎯 Technology Stack

- **React 19.2.4** - UI Framework
- **Vite 8.0.1** - Build Tool
- **TailwindCSS 3.4.4** - Styling
- **Framer Motion 12.38.0** - Animations
- **PostCSS 8.5.8** - CSS Processing

---

## 🌐 Browser Support

✅ Chrome/Chromium (v90+)  
✅ Firefox (v88+)  
✅ Safari (v14+)  
✅ Edge (v90+)  
✅ Mobile Browsers  

---

## ✅ Before Launch

- [ ] Update couple names
- [ ] Update wedding date & time
- [ ] Update venue & location
- [ ] Add Google Form URL
- [ ] Test on mobile
- [ ] Check all animations work
- [ ] Build for production: `npm run build`
- [ ] Deploy to hosting
- [ ] Share with guests!

---

## 🆘 Troubleshooting

**Port in use?**
```bash
npm run dev -- --port 3000
```

**Module errors?**
```bash
rm -rf node_modules
npm install
```

**Build fails?**
```bash
npm run build
```

---

## 📚 Learn More

- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite Docs](https://vitejs.dev/)

---

## 📖 Wedding Details

**Couple:** Niño & Marian  
**Date:** April 18, 2026  
**Time:** 9:00 AM  
**Venue:** Baclayon Church  
**Location:** Bohol, Philippines  

---

## 🎉 You're Ready to Go!

Your premium wedding invitation is complete and ready to impress!

### Next Steps:
1. ✅ Read QUICK_START.md
2. ✅ Customize your details
3. ✅ Test locally
4. ✅ Build for production
5. ✅ Deploy
6. ✅ Share with guests!

---

**Happy Wedding! 💍✨**

*Made with ❤️ using React, Vite, TailwindCSS, and Framer Motion*
