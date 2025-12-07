const PastEvent = () => {
  const events = [
    {
      id: 1,
      name: "RoboMAX 2023",
      des: "Annual Robotics Competition with 200+ Participants",
    },
    {
      id: 2,
      name: "RoboMAX 2023",
      des: "Annual Robotics Competition with 200+ Participants",
    },
    {
      id: 3,
      name: "RoboMAX 2023",
      des: "Annual Robotics Competition with 200+ Participants",
    },
  ];
  return (
    <>
      <div className="mt-36">
        <div>
          <h1 className="text-center text-gray-600 text-3xl md:text-4xl font-extrabold">
            Past Events & Competitions
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-40 md:gap-12 mt-44 md:p-4 items-center md:justify-center ">
          {events.map((events, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(0deg,#16183173,#16183173,#16183196)] p-4 line-height-6 rounded-lg flex flex-col gap-4 w-80 relative min-h-[400px] shadow-2xl blur-backdrop-sm border-2 border-gray-600 "
            >
              <div
                className="bg-white w-[250px] absolute h-[200px] rounded-lg flex items-center justify-center 
                   top-[-90px] 
                   left-1/2 transform -translate-x-1/2 
                   shadow-[10px_-10px_35px_0_rgba(144,83,232,0.64)]"
              >
                <img src="wef" alt="" />
                Robotics
              </div>

              <div className="mt-[200px] text-white flex flex-col space-y-3">
                <h4 className="text-xl font-semibold p-2">{events.name}</h4>
                <p className="p-2">{events.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PastEvent;
