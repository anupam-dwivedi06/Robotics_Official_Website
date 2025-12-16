import React from 'react'

const PastEventText = () => {
    const Comments = [
        {
            id: 1,
            name: "Rahul Sharma, Alumni",
            comment: "Joining the Robotics Club helped me develop practical skills, especially in embedded systems, that I use in my engineering career today. Truly an amazing and career-defining experience!",
        },
        {
            id: 2, // Corrected duplicate ID
            name: "Priya Singh, Student",
            comment: "The environment here is incredibly supportive. We're encouraged to fail, learn fast, and build cutting-edge robots. It's the best place for hands-on technical growth!",
        },
    ];

    const stats = [
        { label: "Total Participants", value: "500+" },
        { label: "Events Organized", value: "25+" },
        { label: "Prizes Won", value: "15+" },
        { label: "Active Members", value: "80+" },
    ];

    return (
        // Use a section for better semantic grouping and padding
        <section className="py-16 md:py-24"> 
            <div className="container mx-auto px-6 lg:px-12">
                
                <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-4'>
                    
                    {/* Testimonial Cards Section */}
                    {Comments.map((comment) => (
                        <div 
                            key={comment.id} 
                            // Enhanced Card Styling: Darker glossy gradient, better padding, clean border
                            className='
                                bg-gray-800/70 p-6 md:p-8 w-full md:w-1/3  
                                border border-indigo-500/20 text-white rounded-xl shadow-xl 
                                backdrop-blur-sm transform hover:shadow-indigo-500/20 transition duration-300
                                flex flex-col justify-between
                            '
                        >
                            {/* Quote Icon */}
                            <svg className="w-8 h-8 text-indigo-400 mb-4 md:mb-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.5 13.5C13.5 14.3284 14.1716 15 15 15H17C17.8284 15 18.5 14.3284 18.5 13.5V8.5C18.5 7.67157 17.8284 7 17 7H15C14.1716 7 13.5 7.67157 13.5 8.5V13.5ZM5.5 13.5C5.5 14.3284 6.17157 15 7 15H9C9.82843 15 10.5 14.3284 10.5 13.5V8.5C10.5 7.67157 9.82843 7 9 7H7C6.17157 7 5.5 7.67157 5.5 8.5V13.5Z"/>
                            </svg>
                            
                            <p className='text-gray-200 italic leading-relaxed'>"{comment.comment}"</p>
                            
                            {/* Name/Role */}
                            <p className='text-indigo-300 font-semibold text-right mt-4'>{comment.name}</p>
                        </div>
                    ))}
                    
                    {/* Club Statistics Box */}
                    <div 
                        className='
                            bg-gradient-to-br from-indigo-900/80 to-purple-900/80 p-6 w-full md:w-1/4 py-8 
                            border border-purple-500/30 text-white rounded-xl shadow-2xl backdrop-blur-md
                            transform hover:shadow-purple-500/30 transition duration-300
                        '
                    >
                        <h5 className='font-extrabold text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400'>
                            Club Statistics
                        </h5>
                        
                        {stats.map((stat, index) => (
                            <div key={index} className={`flex justify-between items-center py-3 ${index < stats.length - 1 ? 'border-b border-gray-700/50' : ''}`}>
                                <p className='text-lg text-gray-300'>{stat.label}</p>
                                <p className='text-2xl font-bold text-white'>{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PastEventText;