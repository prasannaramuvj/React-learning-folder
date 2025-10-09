
import {NavLink} from 'react-router-dom'
function Navbar(){



  return(

    <>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="">Brand Name</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navitem">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navitem">
          <ul className="navbar nav ms-auto">
             <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
             <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              
            </li>
             <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar