import { motion } from "framer-motion"
import { weddingData } from "../data/weddingData"
import marian from "../../assets/marian.jpg"
import nino from "../../assets/nino.jpg"

export default function Couple() {
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
              MEET US
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Nino & Marian
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            Two souls destined to share a lifetime of love, laughter, and cherished moments
          </motion.p>
        </motion.div>

        {/* Couple Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Groom Card */}
          <motion.div variants={itemVariants} className="flex flex-col">
            {/* Image Placeholder */}
            <motion.div
              className="relative mb-8 overflow-hidden h-80 sm:h-96 md:h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={nino}
                alt="Nino - Groom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: 'rgba(62, 47, 37, 0.1)' }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>

            {/* Groom Info */}
            <motion.div className="text-center md:text-left" variants={itemVariants}>
              <h3 className="text-3xl sm:text-4xl font-serif mb-4" style={{ color: '#3E2F25' }}>
                NINO
              </h3>

              <motion.div
                className="flex justify-center md:justify-start gap-3 mb-6"
                variants={itemVariants}
              >
                <div className="w-6 h-px" style={{ backgroundColor: '#C4A484' }}></div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7A5C47' }}>
                  The Groom
                </span>
                <div className="w-6 h-px" style={{ backgroundColor: '#C4A484' }}></div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: '#3E2F25' }}
                variants={itemVariants}
              >
                A compassionate soul with a passion for life's simple pleasures. Known for his infectious laughter and unwavering loyalty to those he loves.
              </motion.p>

              <motion.p
                className="text-sm"
                style={{ color: '#7A5C47' }}
                variants={itemVariants}
              >
                <span className="font-semibold">Interests:</span> Innovation, Crafting, Adventure
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Bride Card */}
          <motion.div variants={itemVariants} className="flex flex-col">
            {/* Image Placeholder */}
            <motion.div
              className="relative mb-8 overflow-hidden h-80 sm:h-96 md:h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={marian}
                alt="Marian - Bride"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: 'rgba(62, 47, 37, 0.1)' }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.div>

            {/* Bride Info */}
            <motion.div className="text-center md:text-right" variants={itemVariants}>
              <h3 className="text-3xl sm:text-4xl font-serif mb-4" style={{ color: '#3E2F25' }}>
                MARIAN
              </h3>

              <motion.div
                className="flex justify-center md:justify-end gap-3 mb-6"
                variants={itemVariants}
              >
                <div className="w-6 h-px" style={{ backgroundColor: '#C4A484' }}></div>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#7A5C47' }}>
                  The Bride
                </span>
                <div className="w-6 h-px" style={{ backgroundColor: '#C4A484' }}></div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg leading-relaxed mb-6"
                style={{ color: '#3E2F25' }}
                variants={itemVariants}
              >
                An elegant spirit with a heart full of warmth. She brings grace, creativity, and genuine joy to everyone she meets.
              </motion.p>

              <motion.p
                className="text-sm"
                style={{ color: '#7A5C47' }}
                variants={itemVariants}
              >
                <span className="font-semibold">Interests:</span> Art, Reading, Meaningful Conversations
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="flex justify-center gap-2 my-16 sm:my-20"
          variants={itemVariants}
        >
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
        </motion.div>

        {/* Love Story Teaser */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-lg sm:text-xl italic font-serif" style={{ color: '#7A5C47' }}>
            "{weddingData.story.introduction}"
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
