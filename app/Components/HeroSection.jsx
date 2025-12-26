"use client";

import { motion } from "framer-motion";
import LiquidEther from "../../reactBitsComponents/LiquidEther";

const HeroSection = () => {
  // Animation variants for the headline lines
  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  return (
    <section className="relative overflow-hidden h-[100vh] flex items-center bg-[#161831]">
      
      {/* 1. LIQUID ETHER BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50" 
        style={{ width: '100%', height: '100%' }}
      >
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 2. Gradient Blobs for Depth */}
      <div className="hidden md:block absolute top-[-5%] left-[-5%] w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-[120px] animate-pulse z-1"></div>
      <div className="hidden md:block absolute bottom-[-5%] right-[-5%] w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-[120px] animate-pulse delay-700 z-1"></div>

      {/* 3. Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-14 md:py-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8">
          
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col text-center md:text-left">
              <motion.h1 
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight"
              >
                <motion.span custom={0} variants={lineVariants} className="block text-white">
                  WELCOME TO
                </motion.span>
                <motion.span 
                  custom={1} 
                  variants={lineVariants} 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 md:whitespace-nowrap"
                >
                  ROBOTICS CLUB
                </motion.span>
                <motion.span 
                  custom={2} 
                  variants={lineVariants} 
                  className="block text-white md:whitespace-nowrap -mt-4"
                >
                  MANIT
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-indigo-300 font-semibold mt-4 md:text-right tracking-wide italic"
              >
                "When innovation meets engineering"
              </motion.p>
            </div>
          </div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
              <div className="relative p-2">
                  {/* Subtle glow behind the robot */}
                  <motion.div 
                    animate={{ 
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"
                  ></motion.div>
                  
                  {/* Floating Robot Image */}
                  <motion.img 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" 
                      alt="Robotics Club Robot" 
                      className="relative w-full h-auto max-w-lg rounded-lg scale-x-[-1] drop-shadow-[0_20px_50px_rgba(79,70,229,0.4)]" 
                  />
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;