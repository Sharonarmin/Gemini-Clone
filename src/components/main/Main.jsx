import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">

        {!showResult ?
        <>
          <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.idea} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.recent} alt="" />
            </div>
            <div className="card">
              <p>Tell me about React js and React native</p>
              <img src={assets.code} alt="" />
            </div>
          </div>
        </>
        :
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.geminiLoad} alt="" />
            {
            loading ?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>
        </div>
        }


        <div className="main-btm">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <div>
              <img src={assets.uploadImg} alt="" />
              <img src={assets.voice} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.submit} alt="" />:null }
            </div>
          </div>
          <p className='bottomInfo'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
      </div>
    </div>
  )
}

export default Main
