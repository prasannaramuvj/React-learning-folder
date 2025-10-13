import { useEffect, useRef, useState } from "react"
function Useref(){


  const[value,setValue] = useState(0);

  const count = useRef(10);
  useEffect(()=>{
    count.current = count.current + 1;
  },[count.current])

  // useEffect(()=>{
  //   setCount(prev=>prev+1)
  // })

  return(
    <>
     <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
     <h1>{value}</h1>
     <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
     <h1> render count  {count.current} </h1>
    </>
  )
}

export default Useref