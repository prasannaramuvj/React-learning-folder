
import img1 from '../assets/bmw1.jpg'
import img2 from '../assets/audi.jpg'




function ConditionalRender(props){



if(props.value){
  return <BMW />
}
else{
  return <AUDI />
}


}

function BMW(){

  return( <>
  <img src={img1} alt="" /></>)
}

function AUDI(){
  return(
    <>
    <img src={img2} alt="" /></>
  )
}

export default ConditionalRender