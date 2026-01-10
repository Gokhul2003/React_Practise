import React, { useState } from 'react'

const ToggleCoditionalrendering = () => {

const [display,setdisplay]=useState(false); 

  return (
    <>
    <div>toggleCoditionalrendering</div>
    <button onClick={()=>{setdisplay(!display)}}>Toggle here</button>
    {
        display ? <h1>Displayed</h1> : null
    }
  </>
  )
}

export default ToggleCoditionalrendering