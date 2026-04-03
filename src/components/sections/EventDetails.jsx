import { weddingData } from "../data/weddingData"
import { motion } from "framer-motion"

export default function EventDetails() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  // Event details with icons
  const eventDetails = [
    {
      icon: "📅",
      label: "Date",
      value: weddingData.date,
      detail: weddingData.dateFormat
    },
    {
      icon: "⏰",
      label: "Time",
      value: weddingData.time,
      detail: "Morning Ceremony"
    },
    {
      icon: "📍",
      label: "Ceremony Venue",
      value: weddingData.ceremonyVenue,
      detail: weddingData.ceremonyAddress
    }
  ]

  return (
    <section className="w-screen py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFEA' }}>
      <motion.div
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-16 sm:mb-20" variants={itemVariants}>
          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase" style={{ color: '#7A5C47' }}>
              EVENT INFORMATION
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            The Details
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            Everything you need to know to celebrate with us
          </motion.p>
        </motion.div>

        {/* Details Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20"
          variants={containerVariants}
        >
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="text-center p-8 sm:p-10 border-t-2 border-b-2"
                style={{ borderColor: '#D8CFC7' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                  className="text-5xl sm:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  variants={itemVariants}
                >
                  {detail.icon}
                </motion.div>

                {/* Label */}
                <motion.p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: '#7A5C47' }}
                  variants={itemVariants}
                >
                  {detail.label}
                </motion.p>

                {/* Main value */}
                <motion.h3
                  className="text-2xl sm:text-3xl font-serif mb-3"
                  style={{ color: '#3E2F25' }}
                  variants={itemVariants}
                >
                  {detail.value}
                </motion.h3>

                {/* Detail text */}
                <motion.p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: '#7A5C47' }}
                  variants={itemVariants}
                >
                  {detail.detail}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Message */}
        <motion.div
          className="text-center py-10 sm:py-12 px-6 sm:px-8 border-t-2 border-b-2"
          style={{ borderColor: '#D8CFC7' }}
          variants={itemVariants}
        >
          <motion.p
            className="text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            {weddingData.message}
          </motion.p>

          <motion.div
            className="flex justify-center gap-2"
            variants={itemVariants}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}