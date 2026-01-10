import React, { useMemo } from 'react'

const usememo = () => {
    const[counter,setcounter]=React.useState(0);
    const[input,setinput]=React.useState();

    function expensiveoperation(input){

        for(let i=0;i<10000000000;i++){}
        return input*2;
    }
    // let result=expensiveoperation(counter);
    //if we dont use usememo here the exepensive operation will be called every time the component re renders
    // which cause delay in the ui response
    // to avoid that we use usememo hook
   result=useMemo(()=>{expensiveoperation(input)},[input])
// so what it does is when we click the counter the expensive operation will not be called
//it will give the first defualt value until the input value changes
//now when the input value changes only then the expensive operation will be called and the result will be updated
//the last result is stored in the memo and returned when the dependencies dont change
//and if we again click the counter the memoized value will be returned without calling the expensive operation again


  return (
    <div>

        <h1>Counter: {counter}</h1>
        <button onClick={()=>{setcounter(counter+1)}}>Touch me</button>
        <input type='number' placeholder='enter number' value={input} onChange={(e)=>{
            setinput(e.target.value)
        }}/>
        <h2>Expensive Operation Result: {result}</h2>
    </div>
  )
}

export default usememo