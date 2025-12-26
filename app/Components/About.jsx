"use client"; // Required for Framer Motion in Next.js App Router

import { motion } from "framer-motion";

const About = () => {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* === Header Section === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">
            About <span className="text-indigo-400">Us</span>
          </h1>
          <div className="w-20 h-1 bg-indigo-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Image Container - Slides in from the left/bottom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://via.placeholder.com/600x400.png?text=Our+Team"
              alt="Our team"
              className="rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.02] max-w-full h-auto"
            />
          </motion.div>

          {/* Text Content Container - Slides up with Opacity */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }, // Children animate one after another
            }}
            className="w-full md:w-1/2 text-white"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl font-semibold mb-4 text-indigo-300"
            >
              Our Mission & Vision
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mb-4 leading-relaxed text-gray-300"
            >
              To foster a student-driven robotics culture with resources and
              activities that turn classroom learning’ into real-world
              innovation through workshops, competitions, and projects.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="leading-relaxed text-gray-300"
            >
              To foster a collaborative student community in robotics and
              automation through hands-on experimentation, innovative design,
              and teamwork, using workshops, competitions, and projects to
              transform classroom learning into real-world solutions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
