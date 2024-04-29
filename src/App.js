import React from 'react';
import './all.css';
import imagee from './download.png';

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
    </div>
  );
}

export default App;
