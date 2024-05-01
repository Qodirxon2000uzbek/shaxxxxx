import React, { useState } from 'react';
import './all.css';
import downloadImage from './download.png';
import profile from './a.png';
import bacround from './bg.jpg'

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
              <h3>NAVABHOR <span>VS</span> INDONEZYA</h3>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
