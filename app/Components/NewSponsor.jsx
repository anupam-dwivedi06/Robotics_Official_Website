"use client";

import React from "react";
import { motion } from "framer-motion";

const NewSponsor = () => {
  return (
    <>
      <section className="py-12 md:py-24 overflow-hidden" id="upcoming">
        {/* Header Section Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              {" "}
              Upcoming Event
            </span>
          </h1>
        </motion.div>

        {/* Main Card with Scale-up Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            bg-gradient-to-br from-indigo-900/40 to-purple-900/40 
            mx-auto p-8 md:p-16 w-11/12 max-w-7xl 
            rounded-[40px] md:rounded-[60px] 
            border border-white/10 backdrop-blur-3xl shadow-2xl shadow-purple-500/10"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Left Section: Floating Animation for Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" flex items-center justify-center"
            >
              <motion.img
                src="https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767039184/Robofiesta_ygzr5f.png"
                animate={{ y: [0, -15, 0] }} // Gentle floating effect
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-64 md:h-96 bg-gradient-to-tr from-gray-700/40 to-gray-600/20 
                           rounded-3xl flex items-center justify-center text-gray-300 text-xl 
                           font-bold border border-white/5 shadow-2xl"
              />
              {/* Main Sponsor/Video Placeholder
              </motion.img> */}
            </motion.div>

            {/* Right Section: Text Content with Staggered Fade-in */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 justify-center">
              {/* <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-4 py-1.5 text-xs uppercase tracking-widest font-bold text-white 
                           bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/30"
              >
                New Sponsor Presents
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white text-3xl md:text-6xl font-extrabold leading-tight"
              >
                <br />
                <span className="text-indigo-400">Robofiesta 2026</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed max-w-lg"
              >
                Robofiesta 2026 brings together innovation, competition, and
                creativity on one grand stage. With 4 new competitions designed
                to push technical and strategic boundaries, participants will
                face real-world challenges like never before. It’s more than a
                contest — it’s a platform to learn, compete, and evolve. Join us
                and be part of the future of robotics.
              </motion.p>

              <motion.a
                href="/robomax" 
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 0px 25px rgba(168, 85, 247, 0.6), 0px 0px 25px rgba(59, 130, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="
                  relative group overflow-hidden
                  bg-gradient-to-r from-[indigo-400/20] to-[purple-400/20 ] 
                  text-white py-3 px-10 rounded-xl   
                  font-bold text-lg mt-8
                  shadow-[0px_0px_20px_rgba(144,83,232,0.3)]
                  border border-white/20 backdrop-blur-md
                  transition-all duration-300
                  "
              >
                {/* Inner Reflection/Shine Effect */}
{/* 
                <a href="/robomax" target="_blank">
                   <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                <span className="relative z-10">
                  Register Now
                </span>
                </a> */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

                <span className="relative z-10">
                  Register Now
                </span>
              </motion.a>
            </div>
          </div>

          {/* Commented Section Maintained as requested */}
          {/* <div className="text-white text-center mt-16 md:mt-24">
            <h3 className="
              text-sm uppercase tracking-widest font-semibold py-1 px-4 
              bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto 
              w-max rounded-full"
            >
              Event Sponsors & Partners
            </h3>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-full sm:w-1/4 md:w-1/6 p-4 bg-white rounded-lg h-20 flex items-center justify-center text-gray-600 font-medium">
                  Logo {i}
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>
      </section>
    </>
  );
};

export default NewSponsor;
