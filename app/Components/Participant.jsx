"use client";

import React from "react";
import { motion } from "framer-motion";

const Participant = () => {
  const awardsList = [
    {
      id: 1,
      name: "NXP AIM 2025",
      des: "We secured the AI Arjuna Award by building a high-performance autonomous system for warehouse navigation and object detection, demonstrating strong technical depth and teamwork.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767033549/nxpaim_iqewtk.jpg",
    },
    {
      id: 2,
      name: "Boeing aeromodelling - IIT Gandhinagar",
      des: "We showcased our RC aircraft developed through end-to-end design, fabrication, and testing. The journey emphasized learning through experimentation, teamwork, and practical engineering.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767073588/boeing_esany0.jpg",
    },
    {
      id: 3,
      name: "GUJARAT ROBOFEST 4.0",
      des: "We emerged as Grand Finalists at Gujarat Robofest 2025, representing our ideas in Rover and Application-Based challenges, showcasing technical depth and real-world impact.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767033549/gujratrobofest_bqox1s.jpg",
    },
    {
      id: 4,
      name: "TECHNEX IIT BHU",
      des: "We excelled at Technex 2025, IIT BHU, ranking among the top teams with innovative designs and precise execution, strengthening our legacy of innovation.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767016364/technex_rnc7jl.jpg",
    },
    {
      id: 5,
      name: "ABU ROBOCON",
      des: "This hands-on challenge pushed participants to solve real-world problems using robotics kits under time pressure, highlighting innovation and rapid prototyping.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767073273/robocon_girm4r.jpg",
    },
    {
      id: 6,
      name: "FLIPKART GRID 4.0",
      des: "Built an autonomous drone with accurate pick-and-drop capabilities powered by computer vision, combining Pixhawk and Raspberry Pi for intelligent flight control.",
      imgSrc: "https://res.cloudinary.com/dpr7uqfxx/image/upload/v1767073345/grid_bcjlke.jpg",
    },
    
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="bg-gray-900 py-20 md:py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* 1. Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Participations & Achievements
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full opacity-50" />
        </motion.div>

        {/* 2. Top Section: Increased Gap + Connecting Logic */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32 mb-25 relative">
          
          {/* Main Photo (Left) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full md:w-1/2 max-w-lg relative group"
          >
            {/* Tech Accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-indigo-500 z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-purple-500 z-10" />
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.2)] bg-gray-800">
              {/* Scan Line */}
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[1px] bg-indigo-400/60 z-20 shadow-[0_0_15px_rgba(129,140,248,1)]"
              />
              
              <img 
                src="https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766739823/arjinawardrobotics_jxvblx.jpg" 
                alt="Arjuna Award Achievement" 
                className="w-full h-[380px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <p className="text-xs font-mono text-indigo-300 tracking-[0.2em] uppercase">Status: Verified Achievement</p>
              </div>
            </div>

            {/* Subtle connecting line decoration visible only on MD+ */}
            <div className="hidden lg:block absolute top-1/2 -right-24 w-16 h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
          </motion.div>

          {/* Awards List Text (Right) - Added padding-left for more distance */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full md:w-1/2 lg:w-2/5 text-white p-8 lg:p-10 bg-indigo-950/20 rounded-[2rem] border border-indigo-500/10 backdrop-blur-sm shadow-xl"
          >
            <div className="mb-8">
                <h3 className="font-extrabold text-3xl text-indigo-400 inline-block relative">
                    Awards & Recognition
                    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-indigo-500/30 rounded-full" />
                </h3>
            </div>

            <ul className="flex flex-col gap-6 text-lg">
              {[
                { ico: "🏆", txt: "AI Arjuna Award - NXP AIM 2025", sub: "National Winner" },
                { ico: "🥇", txt: "Grand Finalists - Robofest 4.0", sub: "Top Tier Performance" },
                { ico: "🌍", txt: "Top Rankings - Technex IIT BHU", sub: "Innovation Excellence" },
                { ico: "🏅", txt: "Zonal Qualifiers - Boeing RC Aeromodelling", sub: "Technical Proficiency" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center group p-2"
                >
                  <div className="mr-5 w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all">
                    <span className="text-2xl">{item.ico}</span> 
                  </div>
                  <div>
                    <span className="block font-bold text-gray-100 group-hover:text-indigo-300 transition-colors">{item.txt}</span>
                    <span className="text-xs text-indigo-400/60 font-mono tracking-tighter uppercase">{item.sub}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 3. Bottom Section (Same as before) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-y-36 gap-x-12 pt-10"
        >
          {/* {awardsList.map((award, index) => (
            <motion.div
              key={award.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-gray-800/60 p-8 rounded-3xl flex flex-col w-full max-w-[360px] relative min-h-[400px] shadow-2xl backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/40 transition-all"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="bg-gradient-to-br from-indigo-100 to-white w-[280px] absolute h-[190px] rounded-2xl flex items-center justify-center top-[-95px] left-1/2 transform -translate-x-1/2 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
                <span className="text-indigo-950 font-black text-2xl tracking-tighter uppercase opacity-90 text-center px-4">
                  <motion.img
                    src={award.imgSrc}
                    alt={award.name}
                    // Use object-top for even and object-bottom for odd to start at opposite ends
                    className={`w-full h-auto absolute left-0 `}
                    animate={{
                      // If even: starts at top (0) moves to bottom (-50%)
                      // If odd: starts at bottom (0) moves to top (50% because it's bottom-aligned)
                      // y: isEven ? ["0%", "-50%", "0%"] : ["0%", "50%", "0%"]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.div>

              <div className="mt-28 text-white flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-indigo-300 mb-4">{award.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {award.des}
                </p>
                <div className="mt-auto">
                  <button className="group text-xs tracking-widest text-purple-400 font-black flex items-center gap-3 hover:text-white transition-all">
                    LEARN MORE 
                    <span className="w-8 h-[1px] bg-purple-400 group-hover:w-12 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))} */}
          {awardsList.map((award, index) => {
            return (
              <motion.div
                key={award.id}
                // variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-gray-800/60 p-5 rounded-xl flex flex-col w-full max-w-sm  relative min-h-[400px] shadow-2xl backdrop-blur-sm border border-indigo-500/30 transition-shadow duration-300 mt-10 hover:shadow-indigo-500/20 hover:border-indigo-400"
              >
                {/* Image Visual with Alternating Scroll Directions */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="bg-gray-700 w-[85%] absolute aspect-video rounded-lg overflow-hidden top-[-60px] left-1/2 transform -translate-x-1/2 shadow-[10px_-10px_40px_10px_rgba(144,83,232,0.4)] z-10 border border-white/10"
                >
                  <motion.img
                    src={award.imgSrc}
                    alt={award.name}
                    // Use object-top for even and object-bottom for odd to start at opposite ends
                    className={`w-full h-auto absolute left-0 `}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Text Content */}
                <div className="mt-[130px] text-white flex flex-col space-y-3">
                  <h4 className="text-2xl font-bold text-indigo-400">{award.name}</h4>
                  <p className="p-2 text-gray-300 text-sm md:text-base text-justify leading-relaxed">{award.des}</p>
                  <a href={`/events/${award.id}`} className="group text-sm text-purple-400 font-medium hover:text-purple-300 transition mt-2 inline-flex items-center">
                    View Gallery
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Participant;