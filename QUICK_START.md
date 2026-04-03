# 🚀 Quick Start Guide

## Get Started in 3 Minutes

### 1️⃣ Installation (30 seconds)

```bash
cd wedding-invitation
npm install
```

### 2️⃣ Start Development (10 seconds)

```bash
npm run dev
```

Open browser to: `http://localhost:5175`

### 3️⃣ See the Magic! (instant)

- 🎁 Envelope opens
- ⏱️ Countdown timer updates
- 🎨 Scroll and watch animations
- 📝 Fill out RSVP form

---

## ⚙️ Customize in 5 Minutes

### Update Wedding Details

Edit `src/components/data/weddingData.js`:

```javascript
export const weddingData = {
  groom: "Your Name",
  bride: "Partner Name",
  date: "Your Date",
  time: "Your Time",
  ceremonyVenue: "Venue Name",
  location: "City, Country",
  googleForm: "YOUR_GOOGLE_FORM_URL"
}
```

### Change Wedding Date in Countdown

Edit `src/components/sections/Countdown.jsx` (line 6):

```javascript
const weddingDate = '2026-04-18T09:00:00'
// ↓ Change to your date ↓
const weddingDate = 'YYYY-MM-DDTHH:MM:SS'
```

### Modify Colors (if desired)

Replace `amber`, `yellow`, `brown` color classes with your preference:
- `amber-50`, `amber-700`, `amber-950`
- Replace with `rose`, `purple`, `blue`, etc.

---

## 📱 Test on Mobile

Use Chrome DevTools:
1. Press `F12` to open DevTools
2. Click device toggle icon (top-left)
3. Select mobile device
4. Test all features

---

## 📦 Build for Production

```bash
npm run build
```

Output in `dist/` folder - ready to deploy!

---

## 📖 Documentation

- 📘 `PREMIUM_FEATURES.md` - Feature overview
- 🎬 `ANIMATION_GUIDE.md` - Animation details
- 📋 `IMPLEMENTATION_SUMMARY.md` - Full summary

---

## 🎯 Features at a Glance

| Feature | What It Does | Where |
|---------|---|---|
| 💌 **Envelope** | Opens on page load | Full screen overlay |
| ⏱️ **Countdown** | Shows days/hours/mins/secs | Below hero |
| 🎨 **Animations** | Smooth scroll effects | All sections |

---

## ✅ Checklist Before Launch

- [ ] Update couple names
- [ ] Update wedding date & time
- [ ] Update venue & location
- [ ] Add Google Form URL
- [ ] Test on mobile
- [ ] Check all animations work
- [ ] Verify RSVP form
- [ ] Build production version
- [ ] Deploy to hosting

---

## 🚀 Deploy Options

### Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

### Netlify (Free)
- Drag & drop `dist/` folder
- Or connect GitHub

### Traditional Hosting
- Upload `dist/` folder via FTP/SFTP
- Ensure `.html` fallback routing

---

## 🎬 Video: How It Works

1. **Page Loads** → Envelope appears
2. **Click Button** → Envelope opens
3. **Scroll Down** → Countdown timer visible
4. **Keep Scrolling** → More animations
5. **Bottom** → RSVP form

---

## 🎨 Color Quick Reference

Current theme: **Brown/Amber** 🟤

```
Primary:    amber-700  (#b45309)
Dark:       amber-950  (#120a07)
Light:      amber-50   (#fffbf0)
Accent:     yellow-600 (#ca8a04)
```

To change to **Rose** theme:
- Replace `amber` → `rose`
- Replace `yellow` → `pink`

---

## 💻 Key Files Modified

✅ `src/components/sections/Hero.jsx` - Animations added  
✅ `src/components/sections/Countdown.jsx` - NEW component  
✅ `src/components/sections/EventDetails.jsx` - Animations added  
✅ `src/components/sections/RSVP.jsx` - Animations added  
✅ `src/components/animations/EnvelopeReveal.jsx` - NEW component  
✅ `src/components/hooks/useCountdown.js` - NEW hook  
✅ `src/components/pages/Home.jsx` - Updated with all features  
✅ `src/index.css` - Fixed for full-width layout  

---

## 🆘 Troubleshooting

### "Port already in use"
```bash
# Kill process using port 5175
# Or use different port
npm run dev -- --port 3000
```

### "Module not found"
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### "Animations not working"
- Check browser console for errors
- Ensure Framer Motion is installed: `npm list framer-motion`
- Verify imports in components

### "Build fails"
```bash
# Clean and rebuild
rm -rf dist
npm run build
```

---

## 📞 Quick Help

**Need to add a section?**
1. Create new file in `src/components/sections/`
2. Use animation wrapper from `ScrollAnimation.jsx`
3. Import and add to `Home.jsx`

**Need to change timing?**
Edit `transition={{ duration: 0.8 }}` in components

**Need more sections?**
Templates provided:
- `Gallery.jsx` - Photo gallery template
- `Location.jsx` - Map template with animations

---

## 🎉 You're All Set!

Your premium wedding invitation is ready to impress! 🎊

### Next Steps:
1. ✅ Update wedding details
2. ✅ Test locally
3. ✅ Build for production
4. ✅ Deploy
5. ✅ Share with guests! 🎉

---

## 📚 Learn More

- **Framer Motion:** https://www.framer.com/motion/
- **React:** https://react.dev/
- **TailwindCSS:** https://tailwindcss.com/
- **Vite:** https://vitejs.dev/

---

**Questions?** Check the detailed docs:
- 📘 PREMIUM_FEATURES.md
- 🎬 ANIMATION_GUIDE.md
- 📋 IMPLEMENTATION_SUMMARY.md

---

**Happy Wedding! 💍✨**

*Made with ❤️ using React, Vite, and TailwindCSS*
