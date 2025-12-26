"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import LiquidEther from "../../reactBitsComponents/LiquidEther";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // 1. Setup Motion Values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Spring Physics for "Premium" lagging feel
  const springConfig = { stiffness: 150, damping: 20 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // 3. Convert motion values to CSS-friendly pixel strings
  const maskX = useTransform(cursorX, (val) => `${val}px`);
  const maskY = useTransform(cursorY, (val) => `${val}px`);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const lineVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.2 + i * 0.2,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  if (!isMounted) return null;

  return (
    <section className="relative w-full h-screen bg-[#070816] flex items-center justify-center overflow-hidden cursor-none">
      
      {/* 1. LAYER: LIQUID ETHER BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <LiquidEther 
          colors={['#4f46e5', '#7c3aed', '#db2777']} 
          mouseForce={15}
          isViscous={true}
          autoDemo={true} 
        />
      </div>
      
      {/* 2. LAYER: BASE ROBOT (Always Visible but Dimmed) */}
      <div className="absolute inset-0 z-1 flex items-center justify-center opacity-30">
        <img 
          src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" 
          className="h-[85vh] w-auto object-contain scale-x-[-1] filter brightness-75 grayscale-[20%]"
          alt="Robot Base"
        />
      </div>

      {/* 3. LAYER: HIGH-DEF REVEAL (Interactive Mask) */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          // Using CSS variables to handle the radial gradient coordinates
          maskImage: `radial-gradient(circle 250px at var(--x) var(--y), black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at var(--x) var(--y), black 0%, transparent 100%)`,
          "--x": maskX,
          "--y": maskY,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" 
            className="h-[85vh] w-auto object-contain scale-x-[-1] brightness-125 contrast-125 filter drop-shadow-[0_0_80px_rgba(99,102,241,0.6)]"
            alt="Robot Reveal"
          />
        </div>
      </motion.div>

      {/* 4. LAYER: MAIN TEXT CONTENT */}
      <div className="container relative z-30 px-6 mx-auto pointer-events-none">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center select-none"
        >
          <motion.span className="px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.4em] text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/5 backdrop-blur-sm uppercase">
            Robotics Revolution
          </motion.span>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] italic uppercase">
            <motion.span custom={0} variants={lineVariants} className="block text-white/95">
              WELCOME TO
            </motion.span>
            
            <motion.span 
              custom={1} 
              variants={lineVariants} 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 py-2 animate-gradient-flow"
              style={{ backgroundSize: '200% 200%' }}
            >
              ROBOTICS CLUB
            </motion.span>

            <motion.span custom={2} variants={lineVariants} className="block text-white tracking-[0.1em] text-5xl md:text-7xl mt-2 font-light not-italic">
              MANIT
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-indigo-200/40 text-xs md:text-sm font-medium tracking-[0.6em] uppercase"
          >
            "When innovation meets engineering"
          </motion.p>
        </motion.div>
      </div>

      {/* 5. LAYER: CUSTOM POINTER UI */}
      <motion.div 
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-20 h-20 border border-indigo-500/50 rounded-full z-[100] pointer-events-none mix-blend-screen shadow-[inset_0_0_20px_rgba(99,102,241,0.2)]"
      />
      <motion.div 
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[100] pointer-events-none shadow-[0_0_20px_#fff]"
      />

      {/* GLOBAL CSS ANIMATIONS */}
      <style jsx>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }
      `}</style>

    </section>
  );
};

export default HeroSection;