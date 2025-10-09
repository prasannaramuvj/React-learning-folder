
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/about" element = {<About/>}/>
     </Routes>
     
    </>
  )
}

export default App
