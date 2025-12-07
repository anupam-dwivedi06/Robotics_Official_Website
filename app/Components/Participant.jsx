import React from "react";

const Participant = () => {
    const awards = [
        {
            id:1,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
        {
            id:2,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
        {
            id:3,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
        {
            id:4,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
        {
            id:5,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
        {
            id:6,
            name: "RoboMax 2023",
            des: "Annual Robotics Competition with 200+ participants",
        },
    ];
    
    return (
    <>
      <div className="mt-32">
        <div className="text-center text-white text-2xl md:text-3xl font-bold">
            <h1>Participations & Achievements</h1>
        </div>
        <div className="flex flex-col md:flex-row text-white p-4 md:p-16  items-center justify-center gap-12 md:gap-6 mt-16 md:mt-2">
            <div className="bg-white w-[220px] rounded-md h-42  ">
                div1
            </div>
            <div className="bg-white w-[220px] rounded-md h-42">
                div2
            </div>
            <div className="">
                <h3 className="mb-4 font-bold text-lg">Awards and Recognition</h3>
                <ul className="flex flex-col gap-2">
                    <li>1st Place - National Robotics championship 2023</li>
                    <li>Best Innovation Award - IIt Dehli TechFest</li>
                    <li>Participation in international RoboCup</li>
                    <li>Winner - State Level Line Following Campetition</li>
                    <li>Featured in National Technology Magazine</li>
                </ul>
            </div>
        </div>
        
        <div>

            <div className="flex flex-col md:flex-row gap-40 md:gap-12 mt-44 md:p-4 items-center md:justify-center flex-wrap ">
          {awards.map((awards, index) => (
            <div
              key={index}
              className="bg-[linear-gradient(0deg,#16183173,#16183173,#16183196)] p-4 line-height-6 rounded-lg flex flex-col gap-4 w-100 relative min-h-[400px] shadow-2xl blur-backdrop-sm border-2 border-gray-600 md-25 md:mb-35 "
            >
              <div
                className="bg-white w-[340px] absolute h-[180px] rounded-lg flex items-center justify-center 
                   top-[-90px] 
                   left-1/2 transform -translate-x-1/2 
                   shadow-[10px_-10px_35px_0_rgba(144,83,232,0.64)]"
              >
                <img src="wef" alt="" />
                Robotics
              </div>

              <div className="mt-[150px] text-white flex flex-col space-y-3">
                <h4 className="text-xl font-semibold p-2">{awards.name}</h4>
                <p className="p-2">{awards.des}</p>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </>
  );
};

export default Participant;
