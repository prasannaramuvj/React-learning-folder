import { useState } from "react";

function Usestate1(){

  const [count,setCount] = useState(0);


 const  changeCount =()=>{
  setCount(prev => prev+1)
  setCount(prev => prev+1)
  setCount(prev => prev+1)


 }


  return(
    <>
    <p>Count is {count}</p>
    <button
    onClick={changeCount}>Increase</button>
    </>
  )
}

export default Usestate1