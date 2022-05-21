import React,{ useState } from 'react';
import "./userBot.css";
import Tara from "../image/TaraBot.png";

const UserBot = (props) => {
  // const [botmessage, setBotMessage] = useState([]);
  // const responses = () =>{
  //     if(props.messages == "Hi" || props.messages == "Hello"){
  //       setBotMessage((msg)=>[...msg,"Hello"]);
  //     }
  //     else if(props.messages == "how are you"){
  //       setBotMessage((msg)=>[...msg,"Fine..!"]);
  //     }
  //     // console.log(botmessage);
  // }
    // console.log(props.messages);
    // const ture = ;
    const buttonClick = (e) =>{
      props.mail({
        text:e.target.innerText,
        isBot:false});
    }

  return (
      <>
      {props.messages.map((data, index) => {
        if(data.isBot == true){
          return(
            <div className="msg left-msg p-1" key={index}>
            <div
                className="msg-img"
                style={{
                  background:"#ffffff",
                }}
              >
                <img src={Tara} width={'30px'} height={'30px'}/>
              </div>

              <div class="msg-bubble">
                <div class="msg-chatbot-date d-flex flex-row justify-content-between">
                    <span>ChatBot</span>
                    <span>{data.time}</span>
                </div>
                <div class="msg-text">
                  {Array.isArray(data.text) ? data.text.map(text => {
                    return <button className="btn btn-outline-secondary m-1 w-100" onClick={buttonClick}>{text}</button>
                  }) : data.text}
                  </div>
                <span class="shape"></span>
              </div>
              {/* <div className="msg-bubble">
                <div className="msg-text">{Array.isArray(data.text) ? data.text.map(text => {
                  return <button className="btn btn-outline-secondary m-1 w-100" onClick={buttonClick}>{text}</button>
                  }) : data.text}</div>
              </div> */}
            </div>
          )
        }
        else{
          if (data === "") return;
            else {
              return (
                <div className="msg right-msg p-1" key={index}>
                  {/* <div
                    className="msg-img1"
                    style={{
                    backgroundImage:
                      "url('https://image.flaticon.com/icons/svg/145/145867.svg')",
                    }}
                  ></div> */}
                  <div class="msg-img d-flex align-items-center justify-content-center mr-0">
                    <i class="m-0">RC</i> 
                  </div>
                    <div class="msg-bubble">  
                        <div class="msg-chatbot-date d-flex flex-row justify-content-between">
                            <span>You</span>
                            <span>{data.time}</span>
                        </div>
                      <h4 class="msg-text">{data.text}</h4>
                      <span class="shape"></span>
                    </div>

                  {/* <div className="msg-bubble">
                    <div className="msg-text">{data.text}</div>
                  </div> */}
                </div>
              );
            }
        }
      }) }
       {/* ? (

          <div class="right-msg">
            <div class="msg-img d-flex align-items-center justify-content-center mr-0">
                <i class="m-0">RC</i>
            </div>
            <div class="msg-bubble">
                <div class="msg-chatbot-date d-flex flex-row justify-content-between">
                    <span>You</span>
                    <span>18:54</span>
                </div>
              <h4 class="msg-text">Yes, I know</h4>
              <span class="shape"></span>
            </div>
          </div>


        <>
          {props.messages.map((data,index)=>{
            return(
              <div className="msg left-msg p-1" key={index}>
              <div
                  className="msg-img"
                  style={{
                    background:"#005350",
                    color:"#ffffff",
                  }}
                >
                  <i className="fas fa-user-astronaut"></i>
                </div>
      
                <div className="msg-bubble">
                  <div className="msg-text">{Array.isArray(data.text) ? data.text.map(text => {
                    return <button className="btn btn-outline-secondary m-1 w-100" onClick={buttonClick}>{text}</button>
                    }) : data.text}</div>
                </div>
              </div>
            )
          })}
        </>
      ):(
        <>
          {props.messages.map((data, index) => {
            if (data === "") return;
            else {
              return (
                <div className="msg right-msg p-1" key={index}>
                  <div
                    className="msg-img1"
                    style={{
                    backgroundImage:
                      "url('https://image.flaticon.com/icons/svg/145/145867.svg')",
                    }}
                  ></div>
                  <div className="msg-bubble">
                    <div className="msg-text">{data.text}</div>
                  </div>
                </div>
              );
            }
          })}
        </>
        )
      } */}
    </>
  );
};

export default UserBot;
