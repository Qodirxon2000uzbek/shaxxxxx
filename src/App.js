import React from 'react';
import './all.css';
import imagee from './download.png';
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'



function App() {
  return (
    <div className="app">
      <div className="aheader">
        <img src={imagee} alt="" />
      </div>
      <div className="main">
        <div className="center">
          <div className="box">
            <div className="videoas">
              <iframe
                src="https://www.youtube.com/embed/a2zg8Ayj-E0?si=u7ythHRF4tbiFJJJ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="title">
                <h3>DINAMO <span>VS</span> NAVBAHOR</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
          <div className="footer">
             
              <NavLink to='/home' >
              <img src={img1} alt="" />
              </NavLink>
              <NavLink to='/home' >
              <img src={img2} alt="" />
              </NavLink>
              <NavLink to='/home' >
              <img src={img3} alt="" />
              </NavLink>

            <Routes>
            <Route path='/home' element={<img2 />} />
            <Route path='/about' element={<img2 />} />
            <Route path='/basket' element={<img2 />} />
          </Routes>


          </div>


         
          
          </BrowserRouter>
    </div>
  );
}

export default App;
