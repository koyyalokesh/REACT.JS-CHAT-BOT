import React, { useContext } from 'react'
import './Main.css'
import { assetsss } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {

  const {onSent,recentPrompt, showResult, loading,resultData, setInput, input} = useContext(Context)


  return (
    <div className="main">
        <div className="nav">
          <p>AI CHAT-BOT</p>
          <img src={assetsss.Bot_image} alt=""/>
        </div>
        <div className="main-container">
            {!showResult
            ?<>
              <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to seen on an upcoming road trip</p>
                    <img src={assetsss.compass_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assetsss.bulb_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assetsss.message_icon} alt=""/>
                </div>
                <div className="card">
                    <p>Improve the readability of the following code</p>
                    <img src={assetsss.code_icon} alt=""/>
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                     <img src={assetsss.Bot_image} alt=""/>
                     <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assetsss.gemini_icon} alt=""/>
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input 
                    onChange={(e)=>setInput(e.target.value)} 
                    value={input} type="text"
                    placeholder="Enter a Prompt Here"
                    />
                    <div>
                        
                        {input?<img onClick={()=>onSent()} src={assetsss.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                   AI CHAT-BOT may display inacurrate info, including about projects, so double check its responses.
                </p>
                
                
            </div>
        </div>
    </div>
    
   
  )
}

export default Main