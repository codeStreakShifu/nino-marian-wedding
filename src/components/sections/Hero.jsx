import { weddingData } from "../data/weddingData"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="w-screen min-h-screen flex items-center justify-center text-center overflow-hidden relative" style={{ backgroundColor: '#F5EFEA' }}>
      {/* Floral corner decorations - Top left */}
      <div className="absolute top-8 left-8 w-32 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: '#7A5C47' }}>
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6"/>
          <circle cx="35" cy="35" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="65" cy="35" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="35" cy="65" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="65" cy="65" r="6" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      {/* Floral corner decorations - Top right */}
      <div className="absolute top-8 right-8 w-32 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full" style={{ color: '#7A5C47' }}>
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.6"/>
          <circle cx="35" cy="35" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="65" cy="35" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="35" cy="65" r="6" fill="currentColor" opacity="0.5"/>
          <circle cx="65" cy="65" r="6" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: '#7A5C47' }}></div>
      <div className="absolute bottom-32 right-10 w-56 h-56 sm:w-96 sm:h-96 rounded-full opacity-3 blur-3xl" style={{ backgroundColor: '#C4A484' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Decorative line above */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="w-6 sm:w-12 h-px" style={{ backgroundColor: '#7A5C47' }}></div>
          <span className="text-xs sm:text-sm font-semibold whitespace-nowrap tracking-widest" style={{ color: '#7A5C47' }}>WEDDING CELEBRATION</span>
          <div className="w-6 sm:w-12 h-px" style={{ backgroundColor: '#7A5C47' }}></div>
        </motion.div>

        {/* Invitation text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="tracking-widest text-xs sm:text-sm md:text-base font-medium mb-8 sm:mb-10 uppercase"
          style={{ color: '#3E2F25' }}
        >
          Together with their families
        </motion.p>

        {/* Couple names with elegant styling */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-3 sm:mb-4 leading-tight tracking-wide"
          style={{ color: '#3E2F25', letterSpacing: '0.15em', fontWeight: '600' }}
        >
          NINO
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center items-center gap-2 sm:gap-4 mb-3 sm:mb-4"
        >
          <div className="w-4 sm:w-8 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          <span className="text-2xl md:text-4xl" style={{ color: '#7A5C47' }}>&</span>
          <div className="w-4 sm:w-8 h-px" style={{ backgroundColor: '#C4A484' }}></div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-8 sm:mb-10 leading-tight tracking-wide"
          style={{ color: '#3E2F25', letterSpacing: '0.15em', fontWeight: '600' }}
        >
          MARIAN
        </motion.h1>

        {/* Date and time with elegant styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-2 sm:space-y-3 mb-8 sm:mb-10 font-serif"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: '#3E2F25' }}>
            APRIL 18, 2026
          </p>
          <p className="text-sm sm:text-base md:text-lg" style={{ color: '#7A5C47' }}>
            BACLAYON, BOHOL, PHILIPPINES
          </p>
        </motion.div>

        {/* Thin divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="w-24 h-px mx-auto mb-8 sm:mb-10"
          style={{ backgroundColor: '#D8CFC7' }}
        ></motion.div>

        {/* Venue information - Editorial card style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="py-6 sm:py-8 px-6 sm:px-12 border-t border-b"
          style={{ borderColor: '#D8CFC7', backgroundColor: 'rgba(196, 164, 132, 0.04)' }}
        >
          <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 tracking-wide uppercase" style={{ color: '#7A5C47' }}>
            The Ceremony
          </p>
          <p className="text-base sm:text-lg md:text-xl font-serif" style={{ color: '#3E2F25' }}>
            Baclayon Church
          </p>
          <p className="text-xs sm:text-sm mt-2" style={{ color: '#7A5C47' }}>
            Baclayon, Bohol, Philippines
          </p>
        </motion.div>

        {/* Decorative elements below - three dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12"
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.6' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
        </motion.div>
      </motion.div>
    </section>
  )
}