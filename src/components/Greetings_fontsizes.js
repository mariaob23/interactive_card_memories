import React, { useState } from 'react'

export const Greetings_fontsizes = () => {
  const [size,setSize] = useState(10)
  const [horizontally,setHorizontally] = useState(0)
  const [vertically,setVertically] = useState(0)
    console.log(size)
    console.log(horizontally)
    console.log(vertically)
  return (
    <div style={{width:"100%", height: "100vh",display: "flex", alignItems: "center", justifyContent: "center" }}>
        <input value={size} placeholder='add size of the letters'type='number'onChange={(e)=>{setSize(e.target.value)}}/>
        <input value={horizontally} placeholder='add number of pixels to move horizontally'type='number'onChange={(e)=>{setHorizontally(e.target.value)}}/>
        <input value={vertically} placeholder='add number of pixels to move vertically'type='number'onChange={(e)=>{setVertically(e.target.value)}}/>
    </div>
  )
}
