
import './App.css'
import Navbar from './component/Navbar'
import {Routes , Route} from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/home'
import About from './pages/About'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/about"  element={<About />}/>
      </Routes>
      </div>
    </>
  )
}

export default App
