import React from "react";
import User from "./User";

const PassingobjectaspropsMap = () => {
  const users = [
    {
      id: 1,
      name: "Aarav",
      age: 22,
      mail: "aarav@gmail.com",
    },
    {
      id: 2,
      name: "Meera",
      age: 24,
      mail: "meera@gmail.com",
    },
    {
      id: 3,
      name: "Rohan",
      age: 21,
      mail: "rohan@gmail.com",
    },
    {
      id: 4,
      name: "Ananya",
      age: 23,
      mail: "ananya@gmail.com",
    },
    {
      id: 5,
      name: "Karthik",
      age: 25,
      mail: "karthik@gmail.com",
    },
  ];

  return(
    <>
        {
            users.map((user)=>(

                <User key={user.id} data={user}/>

            ))
        }
    </>
  )
};

export default PassingobjectaspropsMap;
