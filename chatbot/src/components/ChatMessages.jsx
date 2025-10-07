  import robot from '../assets/robot.png'
  import user from '../assets/user.png'

export function ChatMessages({chatMessages}){
   
      return(

      <>
      
        {chatMessages.map((chatMessage)=>{
      return(
        <Chatmessage message = {chatMessage.message}  
        sender = {chatMessage.sender} 
        key = {chatMessage.id} />
      );
       })}
      </>
  );

  }

  
  function Chatmessage({message,sender}){
  
        return(
          <div>
          {sender === 'robot' &&  (<img src={robot} alt="" width="50" />)}
          {message}
          {sender === 'user' && (<img src={user} alt="" width="50" />)}
          </div>
        )
      }