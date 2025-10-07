import {useState} from 'react'
function Usestate(){

  const [input,setInput] = useState({
    name:"prasanna",
    age:20
  });
  const [display,setDisplay] = useState({
    name:"",
    age:""
  });

  const updateValue = ()=>{
    setDisplay(input);
  
  }
  



  return(
  
    <>
    <p>Hi ! My name is {display.name} and age is {display.age} </p>

       <input type="text"
       value = {input.name}
       onChange={(e)=>
       setInput(e.target.value)
       }/>
       <button 
       onClick = {updateValue}>
        Click</button>
    </>
  )
  
}

export default  Usestate