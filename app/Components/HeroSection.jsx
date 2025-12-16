const HeroSection = () => {
  return (
    // 1. Adjusted padding and background for professional look
    <section className="relative overflow-hidden py-24 md:py-36 bg-gray-900 min-h-screen flex items-center">
      
      {/* 2. Enhanced Gradient Blob for visual interest */}
      <div className="hidden md:block absolute top-[-10rem] left-[-5rem] w-80 h-80 rounded-full bg-indigo-700 opacity-30 blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-[-10rem] right-[-5rem] w-80 h-80 rounded-full bg-purple-700 opacity-30 blur-3xl animate-pulse delay-500"></div>

      {/* Main Content Container (Flex layout retained) */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="justify-between flex flex-col-reverse md:flex-row gap-12 md:gap-8 items-center">
          
          {/* Text Content Section */}
          <div className="flex flex-col w-full md:w-1/2 justify-center ">
            
            {/* The Original Circle Div (Hidden and improved) */}
            {/* Note: I removed the original circle div as the background blobs now serve this purpose, 
               but if you want it back: 
              <div className="hidden md:block w-50 h-50 rounded-full bg-[linear-gradient(to_right,black_0%,black_50%,#263ABE_50%,#CAB3FF_75%,#AF68DA_100%)] blur-2xl absolute left-[-105] top-18"></div>
            */}
            

            <div className="z-20 flex flex-col text-center md:text-left md:p-2 ">
              {/* 3. Gradient and Increased Font Weight for impact */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
                <span className="block text-white">WELCOME TO</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 md:whitespace-nowrap">
                  ROBOTICS CLUB
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white md:p-2 md:whitespace-nowrap -mt-4">
                  MANIT
              </h1>
              
              {/* 4. Tagline positioned correctly with better style */}
              <p className="text-lg text-indigo-300 font-semibold mt-4 md:text-right">
                When innovation meets engineering
              </p>
            </div>
          </div>

          {/* photosection */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
              {/* 5. Image Styling (Shadow, Border, Hover effect) */}
              <div className="p-2  rounded-xl shadow-2xl transition duration-500 hover:shadow-indigo-500/50">
                  <img 
                      src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" 
                      alt="A robot symbolizing the Robotics Club" 
                      className="w-full h-auto max-w-lg rounded-lg scale-x-[-1]" 
                  />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;