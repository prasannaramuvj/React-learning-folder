import { useState} from 'react'
 
function Form1(){

  const [name , setName] = useState("");


function handleChange(e){
  setName(e.target.value);
}

function handleSubmit(e){
  e.preventDefault();
  alert(name);
}


  return(
    <>
    <form onSubmit = {handleSubmit} >
      <label htmlFor=""> Enter Name 
        <input type = "text"  onChange={handleChange} value={name} />
      </label>
      <input type="submit" value="submit" />
    </form>
    </>
  )
}


export default Form1