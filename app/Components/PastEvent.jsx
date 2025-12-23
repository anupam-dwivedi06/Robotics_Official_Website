const PastEvent = () => {
  const events = [
    {
      id: 1,
      name: "ROBOTRONICS",
      des: "Robotronics was a week-long workshop where students explored robotics, machine learning, IOT and AI. They engaged in hands-on activities with robot kits and  simulation software, learning about mototr control and sensors.",
      imgSrc: "placeholder_robomax_2023",
    },
    {
      id: 2,
      name: "AUTOMAX 2.0",
      des: "AutoMax 2.0 our club's first past-pandemic event, include a two-day electronics and mechanics workshop and a robotics competition. Workshop that saw footfall of 500+ students from colleges and schools passinate in robotics and promoting hands-on-learning",
      imgSrc: "placeholder_ai_workshop",
    },
    {
      id: 3,
      name: "MAKE-a-THON",
      des: "A cgallenge to transform theoretical knowledge into practical application. Students were equipped with robotics kits and were tasked with identify a real-word problem and developing a robotic solution",
      imgSrc: "placeholder_hackathon",
    },
  ];
  return (
    // Padding adjusted to look better within a dark theme
    <section className="py-16 md:py-24" id="pastevent">
      <div className="container mx-auto px-6 lg:px-12 ">
        
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Past Events</span>
          </h1>
         
        </div>

        {/* Event Cards Container */}
        <div className="flex flex-col md:flex-row gap-30 md:gap-12 justify-center ">
          {events.map((eventItem, index) => (
            <div
              key={index}
              // Card Styling: Dark background, glossy/translucent effect, fixed width
              className="
                bg-gray-800/60 p-5 rounded-xl flex flex-col w-full max-w-sm 
                relative min-h-[400px] shadow-2xl backdrop-blur-sm 
                border border-indigo-500/30 transform hover:scale-[1.02] transition duration-300 mt-15  
              "
            >
              {/* Image/Visual Placeholder (Popping out) */}
              <div
                className="
                  bg-white w-[310px] absolute h-[180px] rounded-lg 
                  flex items-center justify-center 
                  top-[-85px] // Adjusted position for better alignment
                  left-1/2 transform -translate-x-1/2 
                  shadow-[10px_-10px_40px_10px_rgba(144,83,232,0.64)] // Enhanced shadow for pop effect
                "
              >
                {/* Replace with actual image: <img src={eventItem.imgSrc} alt={eventItem.name} className="w-full h-full object-cover rounded-lg"/> */}
                <span className="text-gray-900 font-semibold text-lg">Image/Visual</span>
              </div>

              {/* Text Content */}
              <div className="mt-[130px] text-white flex flex-col space-y-3">
                <h4 className="text-2xl font-bold text-indigo-400">{eventItem.name}</h4>
                <p className="p-2 text-gray-300 text-base leading-relaxed">{eventItem.des}</p>
                <a href={`/events/${eventItem.id}`} className="text-sm text-purple-400 font-medium hover:text-purple-300 transition mt-2">
                    View Gallery →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvent;