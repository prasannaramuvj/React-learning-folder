
import './App.css'
import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'



function App() {
  

 const [chatMessages , setChatMessages] = useState( [
          {
        message:'Hello Chatbot',
        sender :'user',
        id:'id1'
      },{
        message:'Hello ! how can i help You?',
        sender :'robot',
        id:'id2'
      },{
        message:'can you get me today date',
        sender:'user',
        id:'id3'
      },{
        message:'today is september 27',
        sender:'robot',
        id:'id4'
      }
    ]);

      return(
      <>
      < ChatInput chatMessages={chatMessages}
      setchatMessages={setChatMessages}
       />
      <ChatMessages chatMessages={chatMessages} />
    
      </>
      );
    }

export default App
