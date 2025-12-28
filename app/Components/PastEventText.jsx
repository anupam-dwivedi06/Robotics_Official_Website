"use client";

import React from 'react';
import { motion } from "framer-motion";

const PastEventText = () => {
    const Comments = [
        {
            id: 1,
            name: "Rahul Sharma, Alumni",
            comment: "Joining the Robotics Club helped me develop practical skills, especially in embedded systems, that I use in my engineering career today. Truly an amazing and career-defining experience!",
        },
        {
            id: 2,
            name: "Shalini,Automax 4.0 participant",
            comment: "I just got exposure to robotics with AI. So, now I will go through robotics to showcase my AI specialization and for competition. The mentors are very helpful. In fact, they clear each and every doubt of mine. I will definitely suggest the workshops to my friends and colleagues",
        }
    ];

    const stats = [
        { label: "Total Participants", value: "500+" },
        { label: "Events Organized", value: "15+" },
        { label: "Competitions attended ", value: "20+" },
        { label: "Active Members", value: "80+" },
    ];

    // Variants for the Testimonial Cards
    const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({ // Removed ": number"
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut"
        }
    })
};

    // Variants for the Stats Box
    const statsVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.6,
                ease: "backOut"
            }
        }
    };

    return (
        <section className="py-16 md:py-24 overflow-hidden"> 
            <div className="container mx-auto px-6 lg:px-12">
                
                <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-4'>
                    
                    {/* Testimonial Cards Section */}
                    {Comments.map((comment, index) => (
                        <motion.div 
                            key={comment.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02 }}
                            className='
                                bg-gray-800/70 p-6 md:p-8 w-full md:w-1/3  
                                border border-indigo-500/20 text-white rounded-xl shadow-xl 
                                backdrop-blur-sm transition-shadow duration-300
                                flex flex-col justify-between hover:border-indigo-400/40
                            '
                        >
                            <motion.svg 
                                initial={{ rotate: -10, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.2 }}
                                className="w-8 h-8 text-indigo-400 mb-4" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.5 13.5C13.5 14.3284 14.1716 15 15 15H17C17.8284 15 18.5 14.3284 18.5 13.5V8.5C18.5 7.67157 17.8284 7 17 7H15C14.1716 7 13.5 7.67157 13.5 8.5V13.5ZM5.5 13.5C5.5 14.3284 6.17157 15 7 15H9C9.82843 15 10.5 14.3284 10.5 13.5V8.5C10.5 7.67157 9.82843 7 9 7H7C6.17157 7 5.5 7.67157 5.5 8.5V13.5Z"/>
                            </motion.svg>
                            
                            <p className='text-gray-200 italic leading-relaxed'>"{comment.comment}"</p>
                            
                            <p className='text-indigo-300 font-semibold text-right mt-4'>{comment.name}</p>
                        </motion.div>
                    ))}
                    
                    {/* Club Statistics Box */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={statsVariants}
                        className='
                            bg-gradient-to-br from-indigo-900/80 to-purple-900/80 p-6 w-full md:w-1/4 py-8 
                            border border-purple-500/30 text-white rounded-xl shadow-2xl backdrop-blur-md
                        '
                    >
                        <h5 className='font-extrabold text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400'>
                            Club Statistics
                        </h5>
                        
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + (index * 0.1) }}
                                className={`flex justify-between items-center py-3 ${index < stats.length - 1 ? 'border-b border-gray-700/50' : ''}`}
                            >
                                <p className='text-lg text-gray-300'>{stat.label}</p>
                                <motion.p 
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    className='text-2xl font-bold text-white'
                                >
                                    {stat.value}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default PastEventText;