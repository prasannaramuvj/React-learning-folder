function  Event(){

  function changecar(){

    console.log("car");
  }

  function changecolor(a){
    console.log(a);
  }

  return(
    <>
    <button onClick={changecar}>Click</button>
    <button onClick={ () => changecolor("red") } >Hai</button>
    </>
  )
}
export default Event