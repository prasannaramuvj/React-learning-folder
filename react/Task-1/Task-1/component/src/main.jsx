import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './component/Car.jsx'
import Prop from './component/Prop.jsx'
import Garage from './component/NestedComponent.jsx'
import Destructorprops from './component/Destructorprops.jsx'
import Restprops from './component/Restprops.jsx'
import Parent from './component/Parent.jsx'
import Event from './component/Event.jsx'
import ConditionalRender from './component/ConditionalRender.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Car />
    <Garage />
    <Destructorprops  brand="BMW" year={2004} />
    <Prop name="JavaScript" cost="$500" />
    <Restprops  brand="BMW" year={2005} color="red" mode="EV" tyre="alloy" />
    {/* <Parent /> */}
    <Event />
    <ConditionalRender   value={true}/>
  </StrictMode>,
)
