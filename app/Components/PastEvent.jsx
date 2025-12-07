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
      <div>
        <div>
          <h1 className="text-center text-gray-600 text-3xl md:text-4xl font-extrabold mt-16">
            Past Events & Competitions
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-35 md:gap-12 mt-32 md:p-4 items-center md:justify-center ">
          {events.map((events, index) => (
            <div key={index} className="bg-[linear-gradient(0deg,#16183173,#16183173,#16183196)] p-4 line-height-6 rounded-lg  flex flex-col gap-4 w-80 relative min-h-[400px] shadow-2xl blur-backdrop-sm border-2 border-gray-600 ">
              <div className="bg-white w-70 absolute h-45 rounded-lg flex items-center justify-center top-[-85px]  shadow-[100px_-100px_30px_0_rgba(144, 83, 232, 0.64)]">
                <img src="wef" alt="" />
                Robotics
              </div>
              <div className="mt-[200px] text-white">
                <h4>{events.name}</h4>
              <p>{events.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PastEvent;
