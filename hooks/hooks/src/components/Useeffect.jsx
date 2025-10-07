import { useEffect,useState } from "react"
function Useeffect(){


  const [ count,setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1 )
    },2000)
  },[count])
  


  return(
    <>
    <p>The countdown begin {count}</p>
    </>
  )
}

export default Useeffect

//with and with value dependency without dependency