import React from "react";

const Participant = () => {
    const awardsList = [
        { id: 1, name: "RoboMax 2023", des: "Annual Robotics Competition with 200+ participants" },
        { id: 2, name: "TechFest Hackathon", des: "Top 3 finish in the IoT category" },
        { id: 3, name: "National Robotics Championship", des: "1st Place in Autonomous Navigation Challenge" },
        { id: 4, name: "State Level Line Following", des: "Winner in the advanced category" },
        { id: 5, name: "International RoboCup", des: "Participation in the European standard league" },
        { id: 6, name: "AI Summit", des: "Best Research Paper Presentation Award" },
    ];
    
    return (
        <section className="bg-gray-900 py-20 md:py-28">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* 1. Header Section */}
                <div className="text-center text-4xl md:text-5xl font-extrabold mb-16">
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                        Participations & Achievements
                    </h1>
                </div>

                {/* 2. Top Section: Visual Achievements & Awards List */}
                <div className="flex flex-col md:flex-row items-center md:justify-around gap-12 md:gap-8 mb-24">
                    
                    {/* Visual Placeholders (Trophy & Certificate) */}
                    <div className="flex gap-6 md:gap-12">
                        {/* Trophy Placeholder */}
                        <div className="bg-white/5 w-[150px] md:w-[220px] rounded-2xl h-[200px] 
                                        flex flex-col items-center justify-center p-4 
                                        shadow-lg border border-yellow-400/50">
                            <svg className="w-16 h-16 text-yellow-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 9l-4 4 1 1 3-3 5 5 1-1-6-6z"/>
                            </svg>
                            <span className="text-gray-300 font-medium">National Trophy</span>
                        </div>
                        
                        {/* Certificate Placeholder */}
                        <div className="bg-white/5 w-[150px] md:w-[220px] rounded-2xl h-[200px] 
                                        flex flex-col items-center justify-center p-4 
                                        shadow-lg border border-blue-400/50">
                            <svg className="w-16 h-16 text-blue-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 9l-4 4 1 1 3-3 5 5 1-1-6-6z"/>
                            </svg>
                            <span className="text-gray-300 font-medium">IIT TechFest Cert.</span>
                        </div>
                    </div>

                    {/* Awards and Recognition List */}
                    <div className="w-full md:w-1/3 text-white p-4">
                        <h3 className="mb-6 font-extrabold text-2xl text-indigo-400">Awards and Recognition</h3>
                        <ul className="flex flex-col gap-4 text-lg">
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3">🏆</span> 1st Place - National Robotics Championship 2023
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3">🥇</span> Best Innovation Award - IIT Delhi TechFest
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3">🌍</span> Participation in International RoboCup
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3">🏅</span> Winner - State Level Line Following Competition
                            </li>
                            <li className="flex items-start">
                                <span className="text-purple-400 mr-3">📰</span> Featured in National Technology Magazine
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Divider */}
                {/* <div className="w-full h-[1px] bg-gray-700/50 my-16"></div> */}

                {/* 3. Bottom Section: Detailed Event Cards (Reusing PastEvent style) */}
                <div className="flex flex-wrap justify-center gap-20 md:gap-25 pt-22">
                    {awardsList.map((award, index) => (
                        <div
                            key={index}
                            className="
                                bg-gray-800/60 p-5 rounded-xl flex flex-col w-full max-w-[370px] 
                                relative min-h-[400px] shadow-2xl backdrop-blur-sm 
                                border border-indigo-500/30 transform hover:scale-[1.02] transition duration-300 mb-24
                            "
                        >
                            {/* Image/Visual Placeholder (Popping out) */}
                            <div
                                className="
                                    bg-white w-[300px] absolute h-[180px] rounded-lg 
                                    flex items-center justify-center 
                                    top-[-90px] left-1/2 transform -translate-x-1/2 
                                    shadow-[0_0_40px_10px_rgba(144,83,232,0.64)] 
                                    
                                "
                            >
                                <span className="text-gray-900 font-semibold text-lg">Event Visual</span>
                            </div>

                            {/* Text Content */}
                            <div className="mt-[110px] text-white flex flex-col space-y-3">
                                <h4 className="text-2xl font-bold text-indigo-400">{award.name}</h4>
                                <p className="p-2 text-gray-300 text-base leading-relaxed">{award.des}</p>
                                <button className="text-sm text-purple-400 font-medium hover:text-purple-300 transition mt-2 self-start">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Participant;