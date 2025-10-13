function Son(){
  return(
    <>
    <h4>Son</h4>
    <p>{props.children}</p>
    </>
  )
}

function Daughter(props){

  return(
    <>
    <h4>Daughter</h4>
    <p>{props.children}</p>
    </>
  )
}

function Parent(){
  return(
    <div>
    <h1>Son message</h1>
    <Son>
      <p>
        Making money is art of work 
      </p>
    </Son>
    <h1>Daughter Message</h1>
    <Daughter>
      <p>
        Making art is not a cup of coffee for everyone
      </p>
    </Daughter>
    </div>
    
  )
}
export default Parent