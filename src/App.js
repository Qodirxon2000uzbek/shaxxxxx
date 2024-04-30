import './all.css';
import downloadImage from './download.png';
import profile from './a.png'

function App() {
  alert("Dasturga Xush kelibsiz! ESLATMA USHBU DASTUR DEMO TARZDA ISHLAMOQDA");

  return (
    <div className="app">
      <div className="main">
        <div className="aheader">
          <img src={downloadImage} alt="Download" />
          <div className="profile">
          <img src={profile} alt="" />
          </div>
         
        </div>
        <div className="center">
          <div className="box">
            <div className="videoas">
              <iframe src="https://player.castr.com/live_6ff23a80060a11efadd3e3edb3a24ef1" frameborder="0" scrolling="no" allow="autoplay" allowFullScreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
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
