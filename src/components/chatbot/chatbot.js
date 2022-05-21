import {useState} from "react";
import "./chatbot.css";
import UserBot from "../userBot/userBot";
import Tara from "../image/TaraBot.png";
const Chatbot = (props) => {
  
  const [toggle, setToggle] = useState(false);
  
  const [secondToggle, setSecondToggle] = useState(false);
  
  const [responses, setResponses] = useState([]);
 
  const [currentMessage, setCurrentMessage] = useState("");
  
  const time  = new Date();
  
  // const [flag, setFlag] = useState(true);
  // const [botmessage,setBotmessage] = useState([]);

  const onKeyPressed = (e) => {
    if(e.key == "Enter" && currentMessage != '') sendButton();
  }

  const sendButton = () => {
    const message = {
      text:currentMessage,
      time:time.getHours()+":"+time.getMinutes(),
      isBot: false,
    } 
    if(currentMessage != ''){
      // setFlag(false);
      setResponses((msg)=>[...msg,message]); 
      // console.log(responses);?
      setCurrentMessage("");    
      handleMessageSubmit(message.text);
    }
  }
  
  const handleMessageSubmit = async(message) => {
    const data = message;
    const res = await fetch("http://localhost:5000/chatbot", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        message: data,
      }),
    })
      
    const responseData = await res.json();
      
    const fulfillment =  responseData.message.fulfillmentText == "" ? responseData.message.fulfillmentMessages.map(data => {
      return data.text.text
      }):responseData.message.fulfillmentText;

    // console.log(responseData.message.fulfillmentMessages);
    // setFlag(true);
    setResponses((msg)=>[...msg,{
      text: fulfillment,
      time:time.getHours()+":"+time.getMinutes(),
      isBot:true
    }]);
      // setBotmessage((mesg)=>[...mesg, data.message.fulfillmentText]);    
      // console.log(botmessage);
  }

  const mailSelect = (data) =>{
    setResponses((msg)=>[...msg,data]); 
      handleMessageSubmit(data.text);
  }

  const toggleHandler = () => {
    setToggle(true);
  };
  const toggleHandlerClose = () => {
    setToggle(false);
  };
  const secondToggleHandler = () => {
    setSecondToggle(true);
    setResponses((msg)=>[...msg,{
      text: "Hello",
      time:time.getHours()+":"+time.getMinutes(),
      isBot:true
    }])
  };
  const secondToggleHandlerClose= () => {
    setSecondToggle(false);
    setToggle(false);
    setResponses("")
  };
  
  return (
    <div classNamr="d-flex">
      <div className="classbot position-absolute">
        {secondToggle ? (
          <>
            <div className="container-fluid chatbot p-0">
              <div className="cratobot mt-3 mr-3 d-flex flex-column">
                <div className="cratobot-head d-flex p-lg-3 text-center">
                  <h1 className="craro-header mr-auto">Chat with Tara</h1>
                  <div className="close" onClick={secondToggleHandlerClose}>
                  <i
                    className="fa fa-times"
                    aria-hidden="true"
                    
                    style={{ cursor: "pointer" }}
                  ></i>
                  </div>
                </div>
                <div className="messageContainer d-flex flex-column p-1">
                  <div className="chatRectangle d-flex flex-column align-items-center justify-content-center">
                    <div className="chatLogo d-flex align-items-center justify-content-center">
                      <span className="d-flex align-items-center justify-content-center">
                        <circle></circle>
                      </span>
                      <div class="chatLogoi d-flex align-items-center justify-content-center">
                        {/* <i className="fas fa-user-astronaut"></i> */}
                      </div>
                    </div>
                    <div className="chatTitle d-flex flex-column justify-content-center">
                      <h1 className="text-center w-auto">Tara</h1>
                      <p>Your Digital Bookkeeper</p>
                      <ul className="d-flex flex-wrap justify-content-center text-center w-auto">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                    </div>
                  </div>
                  <UserBot messages={responses} mail={mailSelect} />
                
                </div>
                
                <div className="form-inp w-100">
                  <div className="d-flex p-2">
                    <input
                      placeholder="Chat with us"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyDown={onKeyPressed}
                    />
                    
                    <i
                      onClick={sendButton}
                      className="fa fa-paper-plane mx-auto"
                      aria-hidden="true"
                    ></i>
                  
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="pop d-flex align-items-center justify-content-center mt-2 float-right"
              onClick={toggleHandlerClose}>
              <i className="fas fa-user-astronaut"></i>
            </div> */}
          </>
        ) : (
          <>
            {toggle ? (
            <div className="popup mb-3   position-absolute">  
            <div className="chatPopup mb-4">
              <div className="d-flex flex-row justify-content-between chatPopupMessage">
                <div>
                  <h1>Hi! This is CratoBot!</h1>
                  <h6>How can I help you?</h6>
                </div>
                <div className="close">
                <i
                   className="fa fa-times"
                    aria-hidden="true"
                    onClick={toggleHandlerClose}
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
            </div>
            <button onClick={secondToggleHandler}>Chat now</button>
          </div>
              </div>
            ):(
              <>
              </>
            )}
          </>
        )}
          <div
            className="popup-div d-flex align-items-center justify-content-center"
            onClick={toggleHandler}>
              <img src={Tara} width={'61px'} height={'61px'}/>
                {/* <i className="fas fa-user-astronaut"></i> */}
          </div>
      </div>
    </div>
  );
};

export default Chatbot;
