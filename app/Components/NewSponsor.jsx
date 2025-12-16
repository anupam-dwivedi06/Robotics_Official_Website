const NewSponsor = () => {
  return (
    <>
      <section className="py-12 md:py-24 ">
        {/* Main Card Container 
            FIX APPLIED: max-w-6xl changed to max-w-7xl for increased width.
        */}
        <div className="mb-20">
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Past Events</span>
          </h1>
         
        </div>
        <div className="
          bg-gradient-to-br from-indigo-900 to-purple-900 
          mx-auto p-8 md:p-16 w-11/12 max-w-7xl // <-- INCREASED WIDTH HERE
          rounded-[40px] md:rounded-[60px] 
          border border-white/5 backdrop-blur-3xl shadow-2xl shadow-purple-500/10"
        >
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            
            {/* Left Section: Image Placeholder */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full h-64 md:h-96 bg-gray-700/60 rounded-3xl flex items-center justify-center text-gray-300 text-xl font-bold">
                Main Sponsor/Video Placeholder 
              </div>
            </div>

            {/* Right Section: Text Content and CTA */}
            <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 justify-center">
              {/* Tag/Badge: "New Sponsor Presents" */}
              <div className="p-2 text-xs uppercase tracking-wider font-semibold text-white 
                            bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                New Sponsor Presents
              </div>
              
              {/* Main Headline */}
              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                Annual Robotics Competition
              </h1>
              
              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Join us for the biggest robotics competition in Central India. Showcase your skills, compete with the best teams, and win exciting prizes.
              </p>
              
              {/* CTA Button */}
              <button className="
                bg-gradient-to-r from-purple-600 to-indigo-500 
                text-white py-3 px-10 rounded-lg 
                font-bold text-lg mt-4 
                hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-[1.02]"
              >
                Register Now
              </button>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-white text-center mt-16 md:mt-24">
            
            {/* Sponsors Header */}
            <h3 className="
              text-sm uppercase tracking-widest font-semibold py-1 px-4 
              bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto 
              w-max rounded-full"
            >
              Event Sponsors & Partners
            </h3>
            
            {/* Sponsor Logos */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-full sm:w-1/4 md:w-1/6 p-4 bg-white rounded-lg h-20 flex items-center justify-center text-gray-600 font-medium">
                  Logo {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSponsor;