import React from 'react'

const page = () => {
    const awardsList = [
        { id: 1, name: "RoboMax 2023", des: "Annual Robotics Competition with 200+ participants" },
        { id: 2, name: "TechFest Hackathon", des: "Top 3 finish in the IoT category" },
        { id: 3, name: "National Robotics Championship", des: "1st Place in Autonomous Navigation Challenge" },
        { id: 4, name: "State Level Line Following", des: "Winner in the advanced category" },
        { id: 5, name: "International RoboCup", des: "Participation in the European standard league" },
        { id: 6, name: "AI Summit", des: "Best Research Paper Presentation Award" },
    ];
  return (
    <>
     <div className="flex flex-wrap justify-center gap-20 md:gap-25 pt-22 mt-16">
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
                                    shadow-[10px_-10px_40px_10px_rgba(144,83,232,0.64)] 
                                    
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
    </>
  )
}

export default page