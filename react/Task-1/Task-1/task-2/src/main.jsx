import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './component/Form.jsx'
import Form1 from './component/Form1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
    <Form1 />
  </StrictMode>,
)
