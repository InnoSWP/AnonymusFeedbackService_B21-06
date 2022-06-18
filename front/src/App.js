import React from 'react'
import MainBlock from './MainBlock/MainBlock'
import logo from './logo.png'
import { ThanksPage } from './ThanksPage/ThanksPage';
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <img className='logo' src={logo} alt="logo" width='65' />
      <div className="main-block">
        <div className="general">
        <div className='wrap'>
        <div className="left-part">
            <p>[SUM 22] Software Project</p>
            <p>Title:  MVP and Deciding What to Build</p>
                <div className="data-wrapper">
                    <p>12:40 pm - 2:10 pm</p>
                    <p>05/30/2022</p>
                </div>
            </div>
            <div className="right-part">Photo</div>
        </div>
      
      
        <div>
          <div className="wrapper">
            <div className="form-block">
              <form action="">
                <textarea
                  placeholder="Type some comments on the class"
                  name="feedback"
                  id="comments"
                  cols="60"
                  rows="1"
                ></textarea>
              </form>
            </div>
            <div></div>
            <div className="rating-block">
            </div>
          </div>
          <div className="lower-wrapper">
            <div className="fast-reactions"></div>
            <div></div>
          </div>
          <div className="button-container">
          <NameRequest active={modalActive} setActive={setModalActive} />
            <button className="btn" type="submit" onClick={() => setModalActive(true)}>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
