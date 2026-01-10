import { useState } from "react";
import ToggleCoditionalrendering from "./components/ToggleCoditionalrendering";
import Propsy from "./components/Propsy";
import Hello from "./components/Hello";
import GetinputFieldValue from "./components/GetinputFieldValue";
import RadioDropdownstate from "./components/radioDropdownstate";
import Maptotable from "./components/Maptotable";
import PassingobjectaspropsMap from "./components/PassingobjectaspropsMap";
import Digitalclock from "./components/Digitalclock";
import Useeffectdemo from "./components/Useeffectdemo";

function App() {
//   const [count, setcount] = useState(false);

//   var clickhandler = (name) => {
//     alert(name);
//   };
//     const[display,setdisplay]=useState();
//   const arr=["apple","banana","grapes","mango"];

  return (
    <>
      {/* <ToggleCoditionalrendering />
      <br/>
      <button onClick={() => clickhandler("button clicked")}>Click me</button>
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          setcount(count++);
        }}
      >
        counter++
      </button> */}

{/* 
    <Propsy fruits={arr}/>

    {
      display ? <Hello name="Myself Gokhul" /> : null
    }
    <button onClick={() => setdisplay(!display)}>Click me</button> */}

    {/* <GetinputFieldValue /> */}


    {/* <RadioDropdownstate/> */}

    {/* <Maptotable/> */}

    {/* <PassingobjectaspropsMap/> */}

    {/* <Digitalclock/> */}

    <Useeffectdemo/>

    </>
  );
}

export default App;
