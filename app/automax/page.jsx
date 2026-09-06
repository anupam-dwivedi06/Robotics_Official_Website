"use client";

import React from 'react';
import { motion } from "framer-motion";

const AwardsPage = () => {
    const awardsList = [
        { 
            id: 1, 
            name: "AERO-DRONE WORKSHOP", 
            des: "Take innovation beyond the ground and explore the world of aerial robotics and drone technology. The Aero-Drone Workshop offers hands-on learning in drone systems, flight mechanisms, electronics, control systems, and real-world applications. Discover how drones work, experiment with the technology behind them, and turn ideas into practical skills. Learn. Build. Fly. Innovate. Let your ideas take flight.",
            label: "ROBOMAX",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1788731309/aerodrone_jxg8wi.jpg",
            url: "https://unstop.com/p/robowars--1615040"
        },
        { 
            id: 2, 
            name: "AI-INTEGRATED ROBOTICS WORKSHOP", 
            des: "Step into the future where Artificial Intelligence meets Robotics. Explore how AI, robotics, sensors, and automation come together to create intelligent machines. Through hands-on learning, discover how robots can perceive, learn, make decisions, and interact with the world. Learn. Integrate. Automate. Innovate. Discover how AI can bring machines to life.",
            label: "NATIONAL",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1788731309/robotics_ai_e9w93c.jpg",
            url: "https://unstop.com/p/micromouse--1615120"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] // Custom ease-out
            }
        })
    };

    return (
        <section className="bg-[#0a0b1a] min-h-screen py-24 mt-20 overflow-hidden" id="awards">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Heading Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        AUTOMAX <span className="text-transparent p-2 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">5.0</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Grid Layout: Using larger max-w-7xl and tighter gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                    {awardsList.map((award, index) => (
                        <motion.div
                            key={award.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={cardVariants}
                            // Subtle hover lift
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="
                                bg-[#111226]/80 p-8 rounded-3xl flex flex-col w-full 
                                relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm 
                                border border-white/5 transition-colors duration-300
                                hover:border-indigo-500/30 group mx-auto
                            "
                        >
                            {/* Image Container: 70% height aspect ratio (10:7) */}
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                                className="
                                    w-full rounded-2xl overflow-hidden mb-8
                                    shadow-[0_10px_30px_rgba(0,0,0,0.5)]
                                    border border-white/10 bg-gray-900 flex-shrink-0
                                    relative
                                "
                                // Tailwind aspect ratio plugin class
                                style={{ aspectRatio: '10 / 7' }}
                            >
                                <img 
                                    src={award.img} 
                                    alt={award.name} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Subtle Inner Shadow Overlay */}
                                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none"></div>
                            </motion.div>

                            {/* Card Content Area */}
                            <div className="text-white flex flex-col flex-grow w-full">
                                <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-indigo-400 transition-colors leading-snug">
                                    {award.name}
                                </h3>
                                
                                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow font-normal">
                                    {award.des}
                                </p>
                                
                                <div className="mt-auto pt-5 border-t border-white/5">
                                    <motion.a 
                                        href={award.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="inline-flex items-center gap-2.5 text-xs tracking-[0.25em] text-indigo-400 font-bold uppercase hover:text-white transition-colors"
                                    >
                                        Apply on UNSTOP <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsPage;