"use client";

import React from 'react';
import { motion } from "framer-motion";

const AwardsPage = () => {
    const awardsList = [
        { 
            id: 1, 
            name: "Robowars", 
            des: "Robowars is an intense robot battle competition where a team designs and controls a powerful robot that fights inside a closed arena. The robots are made to push, turn over, press down, or cripple others using special weapons and powerful armor. The battle requires engineering prowess, precision, and strategic thinking. The tournament also focuses on safety, novelty, and sportsmanlike conduct while providing entertainment from head-to-head robot battles.",
            label: "ROBOMAX",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764998/robowars_jyfwef.png",
            url: "https://unstop.com/p/robowars--1615040"
        },
        { 
            id: 2, 
            name: "Micromouse", 
            des: "Micromouse is an autonomous robotics competition where students design and develop a small robot that has to navigate an unknown maze. The robot starts from a specific location and accurately searches for the center of the maze in the least possible time. The obtained robotics project develops skills in students for designing a robot that uses sensor inputs to navigate to its destination without the use of any external controls.",
            label: "NATIONAL",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764996/micromouse_nc1913.png",
            url: "https://unstop.com/p/micromouse--1615120"
        },
        { 
            id: 3, 
            name: "InnovateX", 
            des: "Innovate X is an idea-based robotics competition where participants have to think about innovative applications of robot technology in different areas. The areas in which participants work include healthcare, agriculture, defense, or smart cities. The teams have to provide an in-depth description of their idea using CAD models along with the robot architecture. The competition lies in innovation, feasibility, and applications in the real world rather than speed or combat.",
            label: "IDEATHON",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766765000/innovatex_bckzbd.png",
            url: "https://unstop.com/p/innovate-x--1614908"
        },
        { 
            id: 4, 
            name: "Skycraft", 
            des: "SkyCraft is an aerial robot competition in which teams are required to design and operate a fixed wing remote control aircraft. The task aims at landing safely, flying steadily, carrying out controlled movements, and landing smoothly in a set time. The participants have to control the aircraft manually in such a way that it shows good stability and maneuvering.",
            label: "AERO",
            img: "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1766764997/skycraft_cr1dgo.png",
            url: "https://unstop.com/p/skycraft--1615180"
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
        <section className="bg-[#0a0b1a] min-h-screen py-20 mt-20 overflow-hidden" id="awards">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Heading Section Added */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        ROBOFIESTA <span className="text-transparent p-2 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">2026</span>
                    </h2>
                    <div className="h-1.5 w-32 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24 md:gap-y-43 pt-12 md:pt-28">
                    {awardsList.map((award, index) => (
                        <motion.div
                            key={award.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2, margin: "220px 0px" }}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="
                                bg-[#111226]/60 p-8 rounded-2xl flex flex-col w-full 
                                relative min-h-[400px] md:min-h-[450px] shadow-2xl backdrop-blur-md 
                                border border-white/5 transition-all duration-300
                                hover:border-indigo-500/40 group mx-auto
                            "
                        >
                            {/* Floating Image Visual */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="
                                    w-[90%] absolute h-auto rounded-2xl overflow-hidden
                                    top-[-85px] md:top-[-150px] left-1/2 transform -translate-x-1/2 
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
                                {/* <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm py-2 px-4">
                                    <span className="text-white font-black text-sm tracking-widest uppercase italic">
                                        {award.label}
                                    </span>
                                </div> */}
                            </motion.div>

                            {/* Card Content Area */}
                            <div className=" mt-[120px] md:mt-[170px] text-white flex flex-col h-full">
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
                                        <a href = {award.url} target='blank'>Apply on UNSTOP <span className="text-lg">→</span>
                                        </a>
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