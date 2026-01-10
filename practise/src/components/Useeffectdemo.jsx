import { useEffect, useState } from "react";

const Useeffectdemo= ()=>{
    const [counter,setcounter]=useState(1);
    const[data,setdata]=useState(1);

    function demo(){
        console.log("hi i am demo")
    }
    demo();

    // useEffect(()=>{
    //     demo();
    // }) // this one is same as wrting just demo() it will call as many time the page reload

    // useEffect(()=>{
    //     demo();
    // },[]) // this will call only once at start

    // useEffect(()=>{
    //     demo();
    // },[counter]) // this will call whenerver the state changes acc to depndecies passed 
    // // also this will not call when we change the data state

    // useEffect(()=>{
    //     demo();
    // },[counter,data]) // this will call for both the counter and data state

    
    return(
        <>
            <button onClick={()=>{setcounter(counter+1)}}>Click me</button>
            <h1>Counter: {counter}</h1>

             <button onClick={()=>{setdata(data+1)}}>Click me</button>
            <h1>data counter: {data}</h1>
        </>
    )

}
export default Useeffectdemo;