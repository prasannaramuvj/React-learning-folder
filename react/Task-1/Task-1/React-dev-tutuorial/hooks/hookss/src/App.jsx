
// import './App.css'
// import Usestate from './components/Usestate'
// import Usestate1 from './components/Usestate1'
// import Useeffect from './components/Useeffect'
// import Useref from './components/Useref'
// import Useref1 from './components/Useref1'
// import Userc from './components/Userc'

// function App() {


//   return (
//     <>
//     <Userc />
//     </>
//   )
// }

// export default App

import { useReducer } from "react";

const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement',
  RESET:'reset'
}

function reducer(state,action){

  switch(action.type){
    case ACTIONS.INCREMENT:
      return {balance:state.balance+10}
    case ACTIONS.DECREMENT:
      return {balance:state.balance-10 >= 0 ?state.balance-10:state.balance}
    case ACTIONS.RESET:
      return {balance:0}
    default:
      return state

  }
}



function App(){

  const[state,dispatch] = useReducer(reducer,{balance:100})



  function increment(){
    dispatch({type:ACTIONS.INCREMENT})
  }

  function decrement(){
    dispatch({type:ACTIONS.DECREMENT})
  }

  function reset(){
    dispatch({type:ACTIONS.RESET})
  }
  return(
    <>
    <h1>Balance Amount is {state.balance}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App




