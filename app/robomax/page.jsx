"use client";

import React from 'react';
import { motion } from "framer-motion";

const AwardsPage = () => {
    const awardsList = [
        { 
            id: 1, 
            name: "Robowars", 
            des: "A brutal 1vs1 mechanical showdown where bots are designed to physically knock out and damage their opponents.",
            label: "ROBOMAX",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764998/robowars_jyfwef.png"
        },
        { 
            id: 2, 
            name: "Micromouse", 
            des: "An autonomous maze-solving challenge where small bots race to find the most efficient path to the target.",
            label: "NATIONAL",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764996/micromouse_nc1913.png"
        },
        { 
            id: 3, 
            name: "InnovateX", 
            des: "A robotics-based ideathon where participants propose cutting-edge solutions to complex real-world problem statements.",
            label: "IDEATHON",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766765000/innovatex_bckzbd.png"
        },
        { 
            id: 4, 
            name: "Skycraft", 
            des: "A remote-controlled aircraft competition judged on innovative plane design and precision flight maneuvers.",
            label: "AERO",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764997/skycraft_cr1dgo.png"
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="bg-[#0a0b1a] min-h-screen py-40 mt-20 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-72 pt-32">
                    {awardsList.map((award, index) => (
                        <motion.div
                            key={award.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="
                                bg-[#111226]/60 p-8 rounded-2xl flex flex-col w-full 
                                relative min-h-[450px] shadow-2xl backdrop-blur-md 
                                border border-white/5 transition-all duration-300
                                hover:border-indigo-500/40 group mx-auto
                            "
                        >
                            {/* Floating Image Visual */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="
                                    w-[90%] absolute h-auto rounded-2xl overflow-hidden
                                    top-[-150px] left-1/2 transform -translate-x-1/2 
                                    shadow-[0_20px_40px_rgba(0,0,0,0.6)]
                                    z-20 border border-white/10 bg-gray-900
                                "
                            >
                                <img 
                                    src={award.img} 
                                    alt={award.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay Label */}
                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2 px-4">
                                    <span className="text-white font-black text-sm tracking-widest uppercase italic">
                                        {award.label}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card Content Area */}
                            <div className="mt-[170px] text-white flex flex-col h-full">
                                <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                                    {award.name}
                                </h4>
                                
                                <p className="text-gray-400 text-base leading-relaxed mb-6">
                                    {award.des}
                                </p>
                                
                                <div className="mt-auto">
                                    <motion.button 
                                        whileHover={{ x: 5 }}
                                        className="text-xs tracking-[0.2em] text-indigo-400 font-bold flex items-center gap-2 uppercase hover:text-white transition-colors"
                                    >
                                        View Details <span className="text-lg">→</span>
                                    </motion.button>
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