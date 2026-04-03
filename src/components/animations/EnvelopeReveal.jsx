import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

// Import the couple image from assets
import coupleImage from "../../assets/bg1.jpg"

export default function EnvelopeReveal({ onOpen = () => { } }) {
  // State to track if envelope has been opened
  const [opened, setOpened] = useState(false)
  // Ref for GSAP floating animation
  const envelopeRef = useRef(null)

  // Initialize floating animation on mount
  useEffect(() => {
    // Only animate if envelope hasn't been opened
    if (!opened && envelopeRef.current) {
      // Create infinite floating animation
      gsap.to(envelopeRef.current, {
        y: -20, // Float up 20px
        duration: 3, // Smooth 3-second cycle
        repeat: -1, // Infinite repeat
        yoyo: true, // Return to starting position
        ease: "sine.inOut" // Natural easing for smooth motion
      })
    }

    // Cleanup animation on unmount
    return () => {
      if (envelopeRef.current) {
        gsap.killTweensOf(envelopeRef.current) // Kill all animations
      }
    }
  }, [opened])

  // Handle opening the envelope
  const handleOpen = () => {
    // Kill floating animation
    if (envelopeRef.current) {
      gsap.killTweensOf(envelopeRef.current)
    }
    // Set opened state
    setOpened(true)
    // Trigger parent callback after animation completes
    setTimeout(onOpen, 2000)
  }

  return (
    <AnimatePresence>
      {!opened && (
        // Full-screen background container with gradient
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          style={{
            // Smooth, warm gradient with soft tones that match envelope theme
            background: "linear-gradient(135deg, #e9ceb3ff 0%, #d4ab75ff 25%, #d69053ff 50%, #f0c17fff 75%, #faf5f0 100%)"
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle animated gradient overlay for depth */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, transparent 70%)"
            }}
          ></div>

          {/* Couple Image - Bottom Left with Multiply Blend */}
          

          {/* Main content container */}
          <div className="top-[5%] flex flex-col items-center gap-10 relative z-10">

            {/* Envelope Container - Referenced for GSAP floating animation */}
            <div
              ref={envelopeRef}
              className="relative w-[340px] h-[220px]"
              style={{ perspective: "1200px" }}
            >

              {/* Letter Card - Animates upward when envelope opens */}
              <motion.div
                // Initial position - slightly below center
                initial={{ y: 50, zIndex: 10 }}
                // Animate up when opened, stay in place when closed
                animate={opened ? { y: -120 } : { y: -60, zIndex: 21 }}
                // Spring animation for natural bounce
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  zIndex: opened ? 30 : 30
                }}
                // White card styling with shadow
                className="absolute left-0 right-0 mx-auto w-[90%] h-[140px] bg-white rounded-md shadow-2xl flex items-center justify-center"
                style={{
                  // Premium shadow with depth
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)"
                }}
              >
                {/* Elegant invitation text */}
                <p className="text-amber-700 font-serif text-lg tracking-wider">
                  You are invited
                </p>
              </motion.div>

              {/* Envelope Base - Main brown envelope body */}
              <div 
                className="absolute bottom-0 w-full h-[170px] bg-gradient-to-b from-amber-600 to-amber-700 rounded-b-lg shadow-2xl z-30"
                style={{
                  // Enhanced shadow for depth and premium feel
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}
              />

              {/* Left Fold - Left half of envelope top flaps */}
              <div
                className="absolute bottom-0 left-0 w-1/2 h-[170px] z-30"
                style={{
                  // Gradient for 3D depth effect on left side
                  background: "linear-gradient(to right, rgba(217, 119, 6, 0.9), rgba(180, 83, 9, 1))",
                  // Triangular clip path for fold appearance
                  clipPath: "polygon(0 0,100% 50%,0 100%)",
                  // Subtle shadow inset for depth
                  boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              />

              {/* Right Fold - Right half of envelope top flaps */}
              <div
                className="absolute bottom-0 right-0 w-1/2 h-[170px] z-30"
                style={{
                  // Gradient for 3D depth effect on right side
                  background: "linear-gradient(to left, rgba(217, 119, 6, 0.9), rgba(180, 83, 9, 1))",
                  // Triangular clip path for fold appearance
                  clipPath: "polygon(100% 0,0 50%,100% 100%)",
                  // Subtle shadow inset for depth
                  boxShadow: "inset -2px 2px 4px rgba(0, 0, 0, 0.1)"
                }}
              />

              {/* Top Triangular Flap - Opens upward when button clicked */}
              <motion.div
                // Initial state - upside down (180 degrees)
                initial={{ rotateX: 180 }}
                // Animate to flat when opened
                animate={opened ? { rotateX: 0 } : { rotateX: 0 }}
                // Smooth rotation animation
                transition={{ duration: 1.5, ease: "easeInOut" }}
                // 3D perspective styling
                style={{
                  transformOrigin: "bottom", // Rotate from bottom edge
                  transformStyle: "preserve-3d" // Enable 3D transforms
                }}
                className="absolute top-[-100px] w-full h-[150px] z-20"
              >
                {/* Triangular flap shape pointing upward */}
                <div
                  className="w-full h-full"
                  style={{
                    // Gradient for 3D shading on flap
                    background: "linear-gradient(135deg, rgba(217, 119, 6, 0.95), rgba(180, 83, 9, 1))",
                    // Triangle shape using CSS clip-path
                    clipPath: "polygon(0 100%,50% 0,100% 100%)",
                    // Shadow for depth effect
                    filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))"
                  }}
                />
              </motion.div>

            </div>

            {/* Open Invitation Button - Elegant CTA */}
            <motion.button
              // Initial state - hidden and below final position
              initial={{ opacity: 0, y: 20 }}
              // Animate to visible and final position
              animate={{ opacity: 1, y: 0 }}
              // Delay button appearance for staggered effect
              transition={{ delay: 0.3, duration: 0.6 }}
              // Hover effect - scale up and add shadow
              whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)" }}
              // Click effect - scale down slightly
              whileTap={{ scale: 0.95 }}
              // Click handler to open envelope
              onClick={handleOpen}
              // Button styling with gradient background
              className="px-10 py-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-full tracking-widest uppercase font-semibold shadow-xl transition-all hover:shadow-2xl"
              style={{
                // Text shadow for better readability
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"
              }}
            >
              Open Invitation
            </motion.button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}