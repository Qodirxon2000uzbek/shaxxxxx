import './all.css';
import image from './download.png'

function App() {
  return (
    <div className="app">
    <div className="main">
    <div className="aheader">
      <img src={image} alt="" />
    </div>
      <div className="center">
        <div className="box">
          <div className="videoas">
          <iframe src="https://player.castr.com/live_6ff23a80060a11efadd3e3edb3a24ef1"  frameborder="0" scrolling="no" allow="autoplay" allowfullscreen  webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
            <div className="title">
              <h3>UZBEKISTON <span>VS</span> INDONEZYA</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
