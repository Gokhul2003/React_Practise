import React, { useCallback, useEffect } from 'react'

const useCallback1 = () => {
  const[count, setCount] = React.useState(0)
  const[text, setText] = React.useState("")
  const previousfucntionredered = React.useRef(null)
  const expensivefucntion=useCallback(()=>{
    console.log("expensive function called")
    let result=0;
    for(let i=0;i<1000000000;i++){
      result +=i
    }
    return result;
  },[count])

    useEffect(()=>{
        if(previousfucntionredered.current){
          if(previousfucntionredered.current == expensivefucntion)
          {
            console.log("fucntion not re created")
          }else{
            console.log("fucntion re created")
          }
        }
        else{
          previousfucntionredered.current=expensivefucntion
        }
    })
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='type something'
      />
      <p>Expensive calculation Result:{expensivefucntion()}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count:{count}</button>
    </div>
  )
}
//here what happens the fucntion will re render but the expensive function will not be re created unless the dependency(count) changes
//whereas the usememo the fucntion does not re render until the dependency changes alos the fucntion is memoized 
//you can sayd that the expensive fucntion freezes until the dependency changes
export default useCallback1   

