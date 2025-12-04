const HeroSection = () => {
  return (
    <>
      <div className="justify-between flex flex-col-reverse md:flex-row gap-8 md:gap-2 p-8 mx-auto items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center ">
          {/* circle */}
          <div className="hidden md:block w-50 h-50 rounded-full bg-[linear-gradient(to_right,black_0%,black_50%,#263ABE_50%,#CAB3FF_75%,#AF68DA_100%)] blur-2xl absolute left-[-105] top-18"></div>


          <div className="z-20 flex flex-col  text-center md:text-left  md:p-2 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white md:p-2">WELCOME TO </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white md:p-2 md:whitespace-nowrap">ROBOTICS CLUB MANIT</h1>
            <p className="text-white items-end p-2 md:text-right">When innovation meets engineering </p>
          </div>
        </div>

        {/* photosection */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-2 md:mt-0">
            <img src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" alt="roboimg" className=" transform scale-x-[-1]" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
