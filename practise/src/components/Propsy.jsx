import React from 'react'

const Propsy = ({fruits}) => {
  return (
    <>
     {
      fruits.map((fruit,id)=>{
        
        return <h1 key={id}>{fruit}</h1>

      })
     }


    </>
  )
}

export default Propsy