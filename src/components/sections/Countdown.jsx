import { useCountdown } from '../hooks/useCountdown'
import { motion } from 'framer-motion'
import { memo } from 'react'

const CountdownUnit = memo(({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col items-center"
  >
    <motion.div
      className="rounded-lg shadow-lg px-6 py-6 sm:px-8 sm:py-8 min-w-20 sm:min-w-28 border-2"
      style={{
        backgroundColor: '#F5EFEA',
        borderColor: '#D8CFC7'
      }}
    >
      <p
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold"
        style={{ color: '#3E2F25' }}
      >
        {value}
      </p>
    </motion.div>
    <p
      className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest mt-3"
      style={{ color: '#7A5C47' }}
    >
      {label}
    </p>
  </motion.div>
))

export default function Countdown() {
  const weddingDate = new Date(2026, 3, 18, 9, 0, 0).toISOString()
  const timeLeft = useCountdown(weddingDate)
  
  // Format values inline - no state needed
  const formatValue = (value) => String(value).padStart(2, '0')
  const days = formatValue(timeLeft.days)
  const hours = formatValue(timeLeft.hours)
  const minutes = formatValue(timeLeft.minutes)
  const seconds = formatValue(timeLeft.seconds)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section className="w-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFEA' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase" style={{ color: '#7A5C47' }}>
              DAYS REMAINING
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-2"
            style={{ color: '#3E2F25' }}
          >
            The Big Day
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-base sm:text-lg"
            style={{ color: '#7A5C47' }}
          >
            Count down to Nino & Marian's wedding
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <CountdownUnit value={days} label="Days" />
          <CountdownUnit value={hours} label="Hours" />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownUnit value={seconds} label="Seconds" />
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex justify-center gap-2 mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
        </motion.div>
      </div>
    </section>
  )
}
