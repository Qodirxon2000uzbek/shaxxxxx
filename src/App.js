import React, { useState } from 'react';
import './all.css';
import downloadImage from './download.png';
import profile from './a.png';
import icon from './Telegram_logo.svg.webp'

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      
      <img src={profile} alt="" onClick={openModal} />
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="top_h">
            <p>Ushbu dastur sinov rejimida ishlamoqda!</p>
            <div className="buttonss">
            <button onClick={closeModal} >x</button>

            </div>
            </div>
            <div className="social">
              <div className="box_social"></div>
              <div className="box_social">
              <img src={icon} alt="" />
                <button><a href="https://t.me/eshitikda_live">Telegram Kanal</a></button>
              </div>
              <div className="box_social"></div>

           </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="aheader">
          <img src={downloadImage} alt="Download" />
          <div className="profile">
            
              <ModalExample />
          </div>
        </div>
        <div className="center">
          <div className="box">
            <div className="videoas">
              <iframe src="https://player.castr.com/live_ea0e16c006d411efa274cd81b5d28793" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            </div>
            <div className="title">
              <h3>BAVARYA <span>VS</span> REAL MADRID</h3>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
