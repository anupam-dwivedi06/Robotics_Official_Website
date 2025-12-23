
import React from 'react'
import Aurora from "../../reactBitsComponents/Aurora"

const AuroraWave = () => {
  return (
    <div className='rotate-180'>
        <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.8}
  amplitude={1.2}
  speed={0.8}
/>
    </div>
  )
}

export default AuroraWave