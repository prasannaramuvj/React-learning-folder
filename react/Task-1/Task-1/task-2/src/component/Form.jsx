import { useState} from 'react'
function Form(){
  //  const [name, setName] = useState("");

   const[input,setInput] = useState("");





  //  function handleChange(e){
  //   setName(e.target.value);

  //  }



   function handlesChange(e){

    const name = e.target.name;
    const value = e.target.value;
    const task = e.target.task;

    setInput((values) => ({
      ...values, [name]:value
    }))
    
   }

  return(
    <>
    <form action="" className='form1'>
      <label htmlFor="">Enter The Task
      <input type="text" value={input.task}  name="task" onChange = {handlesChange} />
      </label>
      {/* <p>TASK ENTERED BY USER IS : {name}</p> */}
      <label htmlFor="">Enter the First Name
        <input type="text" value={input.firstname} name="firstname"  onChange = {handlesChange} />
      </label>
      <label htmlFor="">Enter the Last Name
        <input type="text" value={input.lastname}  name ="lastname" onChange = {handlesChange} />
      </label>
      <p>{input.firstname}, {input.lastname} and his task is {input.task}</p>
        {console.log(input.firstname,input.lastname)}
      
    </form>
    
    </>
  )
}

export default Form