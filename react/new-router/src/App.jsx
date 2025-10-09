import './App.css'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Contact from './pages/Contact'
import Home from './pages/home'
import About from './pages/About'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './component/ContactInfo'
import ContactDet from './component/ContactDet'
import Pagenot from './component/Pagenot'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <RootLayout />}>
        <Route index  element={<Home />}/>
        <Route path="about"  element={<About />}/>
          <Route path="contact"  element={<ContactLayout />}>
            <Route path="info" element={<ContactInfo/>} />
            <Route path="det" element={<ContactDet/>} />
          </Route>
          <Route path="*" element={<Pagenot />} />
      </Route>
    )

  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
