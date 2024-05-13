import React, { useState } from 'react';
import './all.css';
import downloadImage from './download.png';
import profile from './a.png';
import icon from './Telegram_logo.svg.webp'
import yt from './youtube.png'
import pr from './programm.png'
import Chat from './chatsss/chatapp'
import Rek from './photo_2024-05-13_21-32-58.jpg'

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
            <div className="box_social">
              <img src={icon} alt="" />
                <button><a href="https://t.me/eshitikda_live">Telegram Kanal</a></button>
              </div>
              <div className="box_social">
              <img src={yt} alt="" />
                <button><a href="https://www.youtube.com/@EshitikdaLive">YouTube kanal</a></button>
              </div>
              <div className="box_social">
              <img src={pr} alt="" />
                <button  >Dastur haqida!</button>
              </div>

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
            <iframe src="https://player.castr.com/live_4e6ff570112f11ef91f763d9afd8851b" allow="autoplay" allowfullscreen allow="fullscreen" ></iframe>

            </div>
            <div className="title">
              {/* <h3>NASAF 0 <span>:</span> 0 BUNYODKOR </h3> */}
              <div className="tarkib">
                
                {/* <div className="right">
                  <h2>NAVBAHOR</h2>
                  <p>O'tkir Yusupov</p>
                    
                </div>
                <div className="left">
                  <h2>LOKOMATIV</h2>
                  <p>NIgmatilla Utkirov</p>
                </div> */}
                <a href="https://t.me/Rich_stavka_Linebet_STAVKA">
                  <h4>LINEBETDA O'ZININGZNI SINAB KO'RING!</h4>
                <img src={Rek} alt="" />
                  </a>  

              </div>
            
            </div>
          </div>
        </div>

        
       <Chat />
      </div>
    </div>
  );
}

export default App;
