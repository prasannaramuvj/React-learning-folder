
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

import React, { createContext, useContext, useReducer } from "react";

// 1️⃣ Create the Context
const BalanceContext = createContext();

// 2️⃣ Define the initial state
const initialState = { balance: 0 };

// 3️⃣ Create the reducer function
function balanceReducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + 10 };
    case "WITHDRAW":
      if (state.balance - 10 < 0) return state; // prevent below 0
      return { balance: state.balance - 10 };
    case "RESET":
      return { balance: 0 };
    default:
      return state;
  }
}

// 4️⃣ Create Provider component
function BalanceProvider({ children }) {
  const [state, dispatch] = useReducer(balanceReducer, initialState);
  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
}

// 5️⃣ Create custom hook to use balance context easily
function useBalance() {
  return useContext(BalanceContext);
}

// 6️⃣ Display component
function BalanceDisplay() {
  const { state } = useBalance();
  return (
    <h1>Balance: {state.balance}</h1>
  );
}

// 7️⃣ Buttons component
function Controls() {
  const { dispatch } = useBalance();

  return (
    <div>
      <button onClick={() => dispatch({ type: "DEPOSIT" })}>Deposit</button>
      <button onClick={() => dispatch({ type: "WITHDRAW" })}>Withdraw</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

// 8️⃣ Main App
export default function App() {
  return (
    <BalanceProvider>
      <BalanceDisplay />
      <Controls />
    </BalanceProvider>
  );
}
