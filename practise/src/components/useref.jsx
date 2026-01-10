import React, { useState } from "react";

const useref = () => {
    const [time, setTime] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);
  const clearref = React.useRef(null);

  function handleStart() {
    if(clearref.current !=null){
        // clearInterval(clearref.current);   
        return; 
        //why return here because if we click start multiple time the interval will be created multiple time so to avoid that we return if the interval is already running 
    }
  const id=  setInterval(()=>{
        setTime(time=>time+1);
  },100)
    clearref(id);
    // setInterval(id);
  }

  function handleStop() {
    clearInterval(clearref.current);
    // clearInterval(intevalId);
    clearref.current = null;
  }
  fucntion
   
//setinterval will not work directly in react we have to use useeffect or useref
//   beacuse of re rendering of the component the interval will be lost since the state value is reset
//   so to perserve the value across the re rendering we use useref

  return (<div>
    <h1>Timer: {time} sec</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button onClick={() => setTime(0)}>Reset</button>

  </div>);
};

export default useref;
