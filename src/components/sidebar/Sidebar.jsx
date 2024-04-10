import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets}  from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent,previousPrompt,setRecentPrompt,newChat} = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <img className='menu' src={assets.menu} alt=""  onClick={()=>setExtended(prev=>!prev)}/>
        <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.addIcon} alt="" />
            {extended ? <p>new chat</p> : null}
        </div>
        {extended ?         
        <div className="recent">
            <p className="recent-title">Recent</p>
            {
              previousPrompt.map((item,index)=>{
                return(
                  <div key={index} onClick={()=> loadPrompt(item)} className="recent-entry">
                    <img src={assets.recent} alt="" />
                    <p>{item.slice(0,18)} ...</p>
                  </div>
                )
              })
            }
        </div>
        : null
      }
      </div>
      <div className="bottom">
        <div className="btm-item recent-entry">
            <img src={assets.help} alt="" />
            {extended ? <p>help</p> : null}
        </div>
        <div className="btm-item recent-entry">
            <img src={assets.history} alt="" />
            {extended ? <p>history</p> : null}
        </div>
        <div className="btm-item recent-entry">
            <img src={assets.settings} alt="" />
            {extended ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
