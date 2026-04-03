import { weddingData } from "../data/weddingData"
import { motion } from "framer-motion"

export default function RSVP() {
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
              YOUR RESPONSE
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            RSVP
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg mb-2"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            We would be honored to have you join us
          </motion.p>

          <motion.p
            className="text-sm sm:text-base"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            Kindly confirm your attendance by April 10th, 2026
          </motion.p>
        </motion.div>

        {/* Warm message */}
        <motion.div
          className="py-10 sm:py-12 px-6 sm:px-8 text-center mb-10 sm:mb-12 border-t-2 border-b-2"
          style={{ borderColor: '#D8CFC7' }}
          variants={itemVariants}
        >
          <motion.p
            className="text-base sm:text-lg leading-relaxed italic font-serif"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            "The joy of our celebration is made complete by the people we love. We would be truly honored to have you with us as we begin this beautiful chapter together."
          </motion.p>
        </motion.div>

        {/* RSVP Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-10 sm:mb-12"
        >
          <motion.a
            href={weddingData.googleForm}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-12 py-4 sm:py-5 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all inline-block min-h-[48px] flex items-center"
            style={{ backgroundColor: '#7A5C47' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Confirm Attendance
          </motion.a>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="py-10 sm:py-12 px-6 sm:px-8 text-center border-t-2 border-b-2"
          style={{ borderColor: '#D8CFC7' }}
          variants={itemVariants}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-serif mb-8"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Any questions? Reach out to us
          </motion.h3>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={containerVariants}
          >
            {/* Email */}
            <motion.a
              href={`mailto:${weddingData.contact.email}`}
              variants={itemVariants}
              className="flex items-center gap-2 px-6 py-3 text-white font-semibold hover:shadow-lg transition-all"
              style={{ backgroundColor: '#7A5C47' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>✉️</span>
              Email Us
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${weddingData.contact.phone}`}
              variants={itemVariants}
              className="flex items-center gap-2 px-6 py-3 border-2 font-semibold hover:opacity-80 transition-opacity"
              style={{ borderColor: '#7A5C47', color: '#3E2F25' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📱</span>
              Call Us
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center gap-2"
            variants={itemVariants}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-sm sm:text-base mt-10 sm:mt-12 italic"
          style={{ color: '#7A5C47' }}
          variants={itemVariants}
        >
          We cannot wait to celebrate with you. With love and gratitude, Nino & Marian 💕
        </motion.p>
      </motion.div>
    </section>
  )
}
