import { useState} from 'react'
function Form(){
   const [name, setName] = useState("");





   function handleChange(e){
    setName(e.target.value);

   }

  return(
    <>
    <form action="">
      <label htmlFor="">ENTER USER NAME
      <input type="text" value={name} onChange = {handleChange} />
      </label>
      <p>User enter value : {name}</p>
    </form>
    </>
  )
}

export default Form