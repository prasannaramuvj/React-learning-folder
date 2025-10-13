import img from '../assets/hero-bg.jpg'

function Booktable(){

  return(
       <>
       <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
             <h1><i>Book a table</i></h1>
             <form action="" style={{width:"400px"}}>
                <div className="form-floating mt-2">
                  <input type="text" className="form-control" id="name" placeholder="Enter the name" />
                  <label htmlFor="name">Name</label>
                 </div> 
                <div className="form-floating mt-2">
                  <input type="email"  className="form-control" id="mail" placeholder="Enter the valid Email"/>
                  <label htmlFor="mail">Mail</label>
                </div>
                <div className="form-floating mt-2">
                  <input type="Number"  className="form-control" id="ceat" placeholder="Enter the valid Email"/>
                  <label htmlFor="ceat">No of customer</label>
                </div>
                <div className="form-floating mt-2">
                  <input type="date"  className="form-control" id="date" placeholder="Enter the valid Email"/>
                  <label htmlFor="date">Date</label>
                </div>
                <button type="submit" className='btn btn-success px-4 mt-3'>Place Order</button>
             </form>
             </div>
             <div className="col-md-6 mt-3">
              <div className='img-box'>
                <img src={img} alt="login side image"  />
              </div>
             </div>
       </div>
       </div>
      
       </>
  )
}

export default Booktable