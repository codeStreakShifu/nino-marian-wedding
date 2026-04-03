import { motion } from "framer-motion"
import { weddingData } from "../data/weddingData"
import baclayonMap from "../../assets/maddiella.jpg"

export default function Location() {
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
              FIND US
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Reception Venue Location
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            Join us at this beautiful venue in paradise
          </motion.p>
        </motion.div>

        {/* Map Container with Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full h-64 sm:h-96 md:h-[500px] overflow-hidden shadow-lg mb-10 sm:mb-12"
        >
          <img
            src={baclayonMap}
            alt="Venue Location Map"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Location Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-10 sm:py-12 px-6 sm:px-8 border-t-2 border-b-2 mb-10 sm:mb-12"
          style={{ borderColor: '#D8CFC7' }}
        >
          {/* Location Title */}
          <motion.h3
            className="text-3xl sm:text-4xl font-serif mb-3"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            📍 {weddingData.receptionVenue}
          </motion.h3>

          {/* Location Address */}
          <motion.p
            className="text-base sm:text-lg font-semibold mb-6"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            {weddingData.receptionAddress1}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg leading-relaxed mb-8"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Nestled in the heart of the breathtaking island of Bohol, our wedding venue offers the perfect backdrop for celebrating love. With its serene ambiance and stunning architecture.
          </motion.p>

          {/* Quick Info Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8 mb-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#7A5C47' }}>Parking</p>
              <p className="text-base" style={{ color: '#3E2F25' }}>Available on-site</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#7A5C47' }}>Accessibility</p>
              <p className="text-base" style={{ color: '#3E2F25' }}>Fully accessible</p>
            </motion.div>
          </motion.div>

          {/* Directions CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            variants={containerVariants}
          >
            <motion.a
              href={`https://maps.google.com/?q=${weddingData.receptionAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="flex-1 px-6 sm:px-8 py-4 sm:py-5 text-white font-semibold text-center hover:shadow-lg transition-shadow rounded-lg min-h-[48px] flex items-center justify-center"
              style={{ backgroundColor: '#7A5C47' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <span>🗺️</span>
                Get Directions
              </span>
            </motion.a>

            <motion.a
              href={`mailto:${weddingData.contact.email}`}
              variants={itemVariants}
              className="flex-1 px-6 sm:px-8 py-4 sm:py-5 text-center hover:opacity-80 transition-opacity border-2 rounded-lg min-h-[48px] flex items-center justify-center"
              style={{ borderColor: '#7A5C47', color: '#3E2F25' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <span>✉️</span>
                Contact Us
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Travel Tips Section */}
        <motion.div
          className="p-8 sm:p-10 border-t-2 border-b-2"
          style={{ borderColor: '#D8CFC7' }}
          variants={itemVariants}
        >
          <motion.h4
            className="text-2xl sm:text-3xl font-serif mb-6"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            ✈️ Travel Tips
          </motion.h4>

          <motion.ul
            className="space-y-4 text-base sm:text-lg"
            variants={containerVariants}
          >
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <span className="font-bold mt-0.5" style={{ color: '#7A5C47' }}>•</span>
              <span style={{ color: '#3E2F25' }}>Bohol is easily accessible by ferry or flight from Manila</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <span className="font-bold mt-0.5" style={{ color: '#7A5C47' }}>•</span>
              <span style={{ color: '#3E2F25' }}>We recommend arriving a day early to explore the beautiful island</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-3">
              <span className="font-bold mt-0.5" style={{ color: '#7A5C47' }}>•</span>
              <span style={{ color: '#3E2F25' }}>The weather in April is warm and tropical - dress comfortably</span>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
