function NestedComponent(){

  return(
    <>
    <h1>Hello the wait is over !</h1>
    <p>here welcome to grab our deals</p>
    </>
  )
}

import BMW from '../assets/BMW.jpg'

function Garage(){

  return(
    <>
    <img src={BMW} alt="bmw car" />
    <NestedComponent />
    </>
  )
}

export default Garage