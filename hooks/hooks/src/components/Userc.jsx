import { createContext, useContext } from "react"

  const value = createContext();


function Userc(){

  const amt = 25,000;

  

  return(
    <>
    <value.provider value={amt}></value.provider>
    <h1>Balance Amount is </h1>
    <button>Deposit</button>
    <button>Withdraw</button>
    <button>Reset</button>
    </>
  )
}

export default Userc