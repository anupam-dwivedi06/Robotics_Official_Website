import React from 'react'

const PastEventText = () => {
    const Comments = [
        {
            id: 1,  
            name: "-Rahul sharma, Alumni",
            comment:"Robotics club help me develop practical skills that i use in my career today. Amazing experience!",
        },
        {
            id: 1,  
            name: "-Priya singh, student",
            comment:"Robotics club help me develop practical skills that i use in my career today. Amazing experience!",
        },
    ]
  return (
    <>
        <div>
            <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-12 p-4'>
                {Comments.map((comment) =>(
                    <div key={comment.id} className='bg-[linear-gradient(135deg,#FFFFFFFF,#3B55D963,#324EC394,#273867FF)] p-4 w-full md:w-1/3'>
                        <p>{comment.comment}</p>
                        <p>{comment.name}</p>
                    </div>
                    
                ))}
                <div className='bg-[linear-gradient(135deg,#FFFFFFFF,#3B55D963,#324EC394,#273867FF)] p-4 w-full md:w-1/5'>
                    <h5>Club statistics</h5>
                    
                    <div className='flex justify-between'>
                        <p>Total Participants</p>
                        <p>500+</p>
                    </div >
                    <div className='flex justify-between'>
                        <p>Events Organized</p>
                        <p>25+</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Prizes Won</p>
                        <p>15+</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Active Members</p>
                        <p>80+</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PastEventText