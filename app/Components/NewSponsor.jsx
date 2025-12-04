

const NewSponsor = () => {
  return (
    <>
    <div className="bg-[linear-gradient(135deg,#FFFFFF,#3B55D9,#324EC3,#273867)] mx-auto p-4 md:p-16 md:py-20  w-[90%] rounded-[40px] md:rounded-[95px] border-1 border-white mt-8 ">
        <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-1/2">
                <img src="jwhd" alt="imgmainsponsor" className="bg-white "/>
            </div>

            <div className="flex flex-col items-start space-y-4">
                <div className="w-[70%] md:w-[50%] p-1 bg-[linear-gradient(135deg,#9F11FC,#6249AE,#4570FA)] text-white">New Sponsor Presents</div>
                <h1 className="text-white text-2xl md:text-4xl font-bold">Annual Robotics Competition </h1>
                <p className="text-white leading-tight md:w-[400px]">Join for the biggest robotics competitionin cemtral India. Show case your skills,compete with the best teams, and win exciting prizes.</p>
                <button className=" bg-[linear-gradient(135deg,#9F11FC,#6249AE,#4570FA)] text-white py-2 px-8    ">Register Now</button>
            </div>
        </div>

        <div className="text-white text-center mt-12 ">
            <h3 className="bg-[linear-gradient(135deg,#9F11FC,#6249AE,#4570FA)] py-1 w-[70%] md:w-[22%] mx-auto">Events Sponsors & Partners</h3>
            <div className="flex flex-col md:flex-row wrap space-y-4 md:space-y-0 md:space-x-4 items-center mt-8">
                <img src="jwehk" alt="img1" className="bg-white w-full md:w-1/5 h-auto"/>
                <img src="kjwenf" alt="img2" className="bg-white w-full md:w-1/5 h-auto"/>
                <img src="lkwej" alt="img3" className="bg-white w-full md:w-1/5 h-auto"/>
                <img src="l;kefw" alt="img4" className="bg-white w-full md:w-1/5 h-auto"/>
                <img src="lkmf" alt="img5" className="bg-white w-full md:w-1/5 h-auto" />
            </div>

        </div>
    </div>
        
    </>
  )
}

export default NewSponsor