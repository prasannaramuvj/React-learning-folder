import {useState} from 'react'
import {Chatbot} from 'supersimpledev'



export function ChatInput({chatMessages,setchatMessages}){
      const [inputText , setInputText] = useState('');

      function saveInputText(event){
        setInputText(event.target.value);

      }


      async function sendMessage(){

         setInputText('');

        const newChatMessages = [
          ...chatMessages,
          {
          message: inputText,
          sender:'user',
          id :crypto.randomUUID()
          }
        ];

        setchatMessages(newChatMessages);

        setchatMessages([
          ...newChatMessages,
          {
            message:'loading',
            sender: 'robot',
            id:crypto.randomUUID()
          }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setchatMessages([
          ...newChatMessages,
          {
            message:response,
            sender: 'robot',
            id : crypto.randomUUID()
          }
        ]);

        // setInputText('');

      }

       function handleKeyDown(event){
          if(event.key === "Enter"){
            sendMessage()
          }
          else if(event.key === "Escape"){
            setInputText('');
          }

        }
      return(
        <div className="inputs-container">
        <input className="input-conatiner"
         placeholder="Enter the message to chatbot" 
         size="30"
         onChange={saveInputText}
         onKeyDown={handleKeyDown}
         value={inputText}

         />
        <button className="button-click" onClick={sendMessage}>send</button>
        </div>
      );
    }