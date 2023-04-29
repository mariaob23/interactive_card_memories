import React, { useState } from 'react'

export const Gratitud_fontsizes = (text,setText, horizontally,setHorizontally, size,setSize, vertically,setVertically) => {
  
    console.log(size) 
    console.log(horizontally)
    console.log(vertically)
  return (
    <div style={{width:"100%",display: "grid"}}>
        <input value={size} placeholder='add size of the letters'type='number'style={{width: "50%", height: "60px", position: "relative", left: "90px"  }} onChange={(e)=>{setSize(e.target.value)}}/>
        <input value={horizontally} placeholder='add number of pixels to move horizontally'type='number'style={{width: "50%", height: "60px", position: "relative", left: "90px" }}onChange={(e)=>{setHorizontally(e.target.value)}}/>
        <input value={vertically} placeholder='add number of pixels to move vertically'type='number'style={{width: "50%", height: "60px", position: "relative", left: "90px" }}onChange={(e)=>{setVertically(e.target.value)}}/>
        <input value={text} onChange={(e)=>{setText(e.target.value)}} placeholder='Text' type="text" style={{width: "50%", height: "60px", position: "relative", left: "90px" }}/>
    </div>
  )
}