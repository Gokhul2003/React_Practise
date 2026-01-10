import React, { useState } from 'react'

const GetinputFieldValue = () => {

  const[inputvalue,setinputvalue]=useState("Gokhul");
  return (
    <>
    <input type='text' value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}></input>
    <h1>the input value is:{inputvalue}</h1> 
    
    <button onClick={()=>setinputvalue("")}>Clear</button>
    </>
  )    
}

export default GetinputFieldValue