import React from 'react'

const Maptotable = () => {
    const users = [
  {
    id: 1,
    name: "Aarav",
    age: 22,
    mail: "aarav@gmail.com"
  },
  {
    id: 2,
    name: "Meera",
    age: 24,
    mail: "meera@gmail.com"
  },
  {
    id: 3,
    name: "Rohan",
    age: 21,
    mail: "rohan@gmail.com"
  },
  {
    id: 4,
    name: "Ananya",
    age: 23,
    mail: "ananya@gmail.com"
  },
  {
    id: 5,
    name: "Karthik",
    age: 25,
    mail: "karthik@gmail.com"
  }
];

// console.log(users);

  return (
    <>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mail</th>   
            </tr>
        </thead>
        <tbody>
           {
            users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td> 
                    <td>{user.mail}</td>
                </tr>
            ))
           }
        </tbody>
    </table>

    </>
)
}

export default Maptotable