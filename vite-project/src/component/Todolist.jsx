import { useState } from "react"

function Todolist(){


  const [input , setInput ]= useState("");
  const [todo , setTodo] = useState([]);
  
  console.log(input);
  const addTodo = ()=>{
    if(input === "") return;


    const newtodo = {
      id:Date.now(),
      text:input

    }
    setTodo([...todo,newtodo]);
    setInput('');
  }

  console.log(todo);


  return (
    <div>
      <input type="text"
      value = {input} 
      onChange = { (event)=> setInput(event.target.value)}/>

      <button onClick = {addTodo}>Click</button>

      <div>
        <ul>
          {todo.map(( todo,index) =>(
            <li key={index}>{todo}
            <small>{todo.id}</small></li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default Todolist