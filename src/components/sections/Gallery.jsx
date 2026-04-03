import { motion } from "framer-motion"
import { weddingData } from "../data/weddingData"

export default function Gallery() {
  // Animation variants
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section className="w-screen py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5EFEA' }}>
      <motion.div
        className="max-w-6xl mx-auto"
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
              CHERISHED MOMENTS
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Our Gallery
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            A collection of our most treasured memories
          </motion.p>
        </motion.div>

        {/* Gallery Grid - 4-6 items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
        >
          {weddingData.gallery.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative overflow-hidden aspect-square shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(62, 47, 37, 0.7)' }}
                >
                  <p className="text-white text-sm sm:text-base font-serif text-center">
                    {item.caption}
                  </p>
                </motion.div>
              </motion.div>

              {/* Caption Below */}
              <motion.div
                className="text-center mt-4"
                variants={itemVariants}
              >
                <p className="text-base sm:text-lg font-serif" style={{ color: '#3E2F25' }}>
                  {item.caption}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex justify-center gap-2 mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg italic font-serif"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            "Every moment captures the essence of our love"
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="mt-20 sm:mt-28 md:mt-32 pt-20 sm:pt-28 md:pt-32 border-t-2"
          style={{ borderColor: '#D8CFC7' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Video Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase" style={{ color: '#7A5C47' }}>
                A MELODY OF OUR BEGINNING
              </span>
              <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
            </motion.div>

            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4"
              style={{ color: '#3E2F25' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Our Song
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6"
              style={{ color: '#7A5C47' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              This video holds a special place in our hearts—our very first recording together. It tells the story of how we met and how our love has grown stronger with time, capturing the moments that brought us closer and the journey we continue to share.
            </motion.p>

            <motion.p
              className="text-sm sm:text-base italic font-serif"
              style={{ color: '#C4A484' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              "A melody of our beginning."
            </motion.p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-xl" style={{ borderColor: '#D8CFC7', border: '1px solid #D8CFC7' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Rd3We23UgTY"
                title="Our Wedding Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Video Footer */}
          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex justify-center gap-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg italic font-serif"
              style={{ color: '#7A5C47' }}
            >
              "Thank you for being part of our story"
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
