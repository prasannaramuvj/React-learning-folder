
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Booktable from './pages/Booktable'
import  Menu from './pages/Menu'
import Footer from './component/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <div>
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/menu" element = {<Menu/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/book-table" element = {<Booktable/>}/>
     </Routes>
     </div>
     <Footer/>
    </>
  )
}

export default App
