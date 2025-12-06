

const PeopleSay = () => {
    const testimonials = [
        {
            id : "1",
            name: "Alice Johnson",
            role: "Software Engineer",
            feedback: "This robotics program has transformed my understanding of technology. The hands-on experience is invaluable! This robotics program has transformed my understanding of technology. The hands-on experience is invaluable!"
        },
        {
            id : "2",
            name: "Alice Johnson",
            role: "Software Engineer",
            feedback: "This robotics program has transformed my understanding of technology. The hands-on experience is invaluable! This robotics program has transformed my understanding of technology. The hands-on experience is invaluable!"
        },
        {
            id : "3",
            name: "Alice Johnson",
            role: "Software Engineer",
            feedback: "This robotics program has transformed my understanding of technology. The hands-on experience is invaluable! This robotics program has transformed my understanding of technology. The hands-on experience is invaluable!"
        },
       


    ]

    return (
        <>  

        <div className=" p-8 md:p-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-center text-gray-600 text-3xl md:text-4xl font-extrabold">What People Say</h2>
                <div className="w-25 bg-white h-[3px]  m-auto rounded-2xl"></div>
            </div>

            <div>
                <div className="flex flex-col md:flex-row gap-8 mt-16 md:p-4">
                    {testimonials.map((testi) => (
                        <div key={testi.id} className="bg-[linear-gradient(135deg,#FFFFFFFF,#3B55D963,#324EC394,#273867FF)] p-4 line-height-6 rounded-lg shadow-lg flex flex-col gap-4">
                            <p className="text-white">{testi.feedback}</p>
                            <h3 className="text-right">{testi.name}, {testi.role}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        </>
    )
}

export default PeopleSay;