import React, { useState } from 'react'

const RadioDropdownstate = () => {

    const [gender,setGender]=useState("Female");
    const [city,setCity]=useState("Delhi");

  return (
    <>
    <h1> handle Radio and Dropdown</h1>

    <input type='radio' 
    onChange={(event)=>setGender(event.target.value)} value={"male"} id='male'
        checked={gender === "male"}
    />
    <label htmlFor='male'>Male</label>
     <input type='radio' value={"Female"} id='Female'
        onChange={(event)=>setGender(event.target.value)}
        checked={gender === "Female"}
     />
    <label htmlFor='Female'>Female</label>

    <h1>select City</h1>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"} >
        <option value={"Delhi"}>Delhi</option>
        <option value={"Mumbai"}>Mumbai</option>
        <option value={"Chennai"}>Chennai</option>
        <option value={"Kolkata"}>Kolkata</option>
    </select>

    <h2>Selected gender:{gender}</h2>
    <h2>Selected city:{city}</h2>
    </>
)
}

export default RadioDropdownstate