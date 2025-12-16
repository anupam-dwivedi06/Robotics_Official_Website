const PeopleSay = () => {
    const testimonials = [
        {
            id: "1",
            name: "Alice Johnson",
            role: "Software Engineer, Google", // Added company for professionalism
            feedback: "Joining this robotics program was a game-changer. The hands-on experience and complex projects transformed my understanding of technology and gave me practical, invaluable skills for my career. Highly recommend!",
            avatar: "URL_TO_ALICE_AVATAR" // Placeholder for an avatar image
        },
        {
            id: "2",
            name: "Rahul Sharma",
            role: "Aerospace Student", // Example new role
            feedback: "The mentorship here is exceptional. We dove deep into machine learning for autonomous systems—knowledge that is directly applicable to aerospace engineering. The community support is fantastic.",
            avatar: "URL_TO_RAHUL_AVATAR"
        },
        {
            id: "3",
            name: "Priya Verma",
            role: "Data Scientist, IBM", // Example new role
            feedback: "I was impressed by the level of technical detail in the workshops. This club not only builds robots but builds future innovators. It truly bridges the gap between theory and real-world application.",
            avatar: "URL_TO_PRIYA_AVATAR"
        },
    ];

    return (
        <section className=" py-16 md:py-28">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* Header Section */}
                <div className="flex flex-col items-center gap-4 mb-16">
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white">
                        What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">People Say</span>
                    </h2>
                    {/* Decorative separator line (using Tailwind utilities) */}
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi) => (
                        <div 
                            key={testi.id} 
                            // Enhanced Card Styling: Dark, glossy gradient background, subtle shadow
                            className="
                                bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-indigo-500/10 
                                backdrop-blur-sm transform hover:scale-[1.02] transition duration-300
                                flex flex-col justify-between min-h-[350px]
                            "
                        >
                            {/* Quote Icon (Optional but highly recommended for design) */}
                            <svg className="w-10 h-10 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.5 13.5C13.5 14.3284 14.1716 15 15 15H17C17.8284 15 18.5 14.3284 18.5 13.5V8.5C18.5 7.67157 17.8284 7 17 7H15C14.1716 7 13.5 7.67157 13.5 8.5V13.5ZM5.5 13.5C5.5 14.3284 6.17157 15 7 15H9C9.82843 15 10.5 14.3284 10.5 13.5V8.5C10.5 7.67157 9.82843 7 9 7H7C6.17157 7 5.5 7.67157 5.5 8.5V13.5Z"/>
                            </svg>
                            
                            {/* Feedback Text */}
                            <p className="text-gray-200 text-lg italic leading-relaxed mb-6">
                                "{testi.feedback}"
                            </p>
                            
                            {/* Author/Role */}
                            <div className="flex items-center mt-auto">
                                {/* Optional: Avatar Placeholder */}
                                <div className="w-12 h-12 bg-indigo-500 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{testi.name}</h3>
                                    <p className="text-indigo-300 text-sm">{testi.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PeopleSay;