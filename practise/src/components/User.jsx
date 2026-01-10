import React from 'react'

const User = ({data}) => {
  return (
    <>
        <h1>{data.name}</h1>
        <h2>{data.age}</h2>
        <h3>{data.mail}</h3>

    </>
  )
}

export default User