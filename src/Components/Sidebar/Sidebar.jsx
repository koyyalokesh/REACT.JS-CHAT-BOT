import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assetsss } from '../../assets/assets'
import { Context } from '../../context/Context'



const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    const {onSent, prevPrompts,setRecentPrompt,newChat} = useContext(Context)

    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
  return (
    <div className='sidebar_menu'>
        <div className="top">
          <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assetsss.menu_icon} alt=""/>
          <div onClick={()=>newChat()}className="new-chat">
              <img src={assetsss.plus_icon} alt=""/>
              {extended?<p>New Chat</p>:null}
          </div>
          { extended
          ?<div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, index)=>{
                    return (
                      <div onClick={()=>loadPrompt(item)} className="recent-entry">
                         <img src={assetsss.message_icon} alt=""/>
                         <p>{item.slice(0,18)}...</p>
                     </div>

                    )
              })}
             
            </div>
            :null
          }
          
        </div>

        
    </div>
  )
}

export default Sidebar