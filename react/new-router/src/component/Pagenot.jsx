import { useNavigate } from "react-router-dom"


function Pagenot(){

  const navigate = useNavigate()


  return(

    <>
    <h3>404 Page not found error</h3>
    <br />
    <button onClick={()=>navigate('/')}>Go to Home Page</button>
    </>
  )
}

export default Pagenot