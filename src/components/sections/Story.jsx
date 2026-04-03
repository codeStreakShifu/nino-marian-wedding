import { motion } from "framer-motion"
import { weddingData } from "../data/weddingData"

export default function Story() {
  const storyChapters = [
    weddingData.story.chapter1,
    weddingData.story.chapter2,
    weddingData.story.chapter3
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        className="max-w-4xl mx-auto"
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
              OUR JOURNEY
            </span>
            <div className="w-8 sm:w-12 h-px" style={{ backgroundColor: '#C4A484' }}></div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Our Love Story
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            The journey that brought us together, and where our forever begins
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="relative space-y-12 sm:space-y-16" variants={containerVariants}>
          {/* Story Chapters */}
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="max-w-3xl mx-auto"
            >
              <motion.div
                className="text-center p-8 sm:p-10 border-t-2 border-b-2"
                style={{ borderColor: '#D8CFC7' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Year badge */}
                <motion.div
                  className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 tracking-widest uppercase"
                  style={{ backgroundColor: '#C4A484', color: '#F5EFEA' }}
                  variants={itemVariants}
                >
                  {chapter.date}
                </motion.div>

                {/* Chapter title */}
                <motion.h3
                  className="text-3xl sm:text-4xl font-serif mb-4"
                  style={{ color: '#3E2F25' }}
                  variants={itemVariants}
                >
                  {chapter.title}
                </motion.h3>

                {/* Chapter description */}
                <motion.p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#3E2F25' }}
                  variants={itemVariants}
                >
                  {chapter.description}
                </motion.p>

                {/* Decorative element */}
                <motion.div
                  className="mt-6 flex gap-2 justify-center"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484', opacity: '0.5' }}></div>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#C4A484' }}></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          className="mt-16 sm:mt-20 text-center py-10 sm:py-12 px-6 sm:px-8 border-t-2 border-b-2 max-w-3xl mx-auto"
          style={{ borderColor: '#D8CFC7' }}
          variants={itemVariants}
        >
          <motion.p
            className="text-lg sm:text-xl font-serif italic mb-4"
            style={{ color: '#7A5C47' }}
            variants={itemVariants}
          >
            "And so, two chapters became one beautiful story."
          </motion.p>

          <motion.p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: '#3E2F25' }}
            variants={itemVariants}
          >
            Now we invite you to be part of this extraordinary journey as we write the next chapter together.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
