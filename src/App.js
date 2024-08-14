import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import favicon from './logo.svg';
import './App.css';
import Aos from 'aos';
import CountDown from './components/CountDown';
import purpose_logo from '../src/images/purpose_logo.svg';
import tips_icon from '../src/images/tips_icon.svg';
import vault_icon from '../src/images/vault_icon.svg';

function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();

  return(
    <div className="container-fluid">
     <Navbar />
      <div>
      <Routes>        
        <Route path="/"  element={<CountDown />}/>
      </Routes>
      </div>
      
      <div className="row justify content center" id='purpose_row'>
        <div className="col">
        <div className="card" id="purpose">
            <img id="tips_icon" src={tips_icon} class="card-img-top mx-auto" alt="Quick Tips" />
              <div className="card-body">
                <h5 className="card-title" id='tips_title'>Tip of the Day</h5>
                  <p className="card-text" id='tips_text'>Pick a shlong at the start of your day, with no special attention to the size.</p>
                  <p className="card-text" id='tips_text'>By the day's end, make sure to swallow it whole, to view it as a big victory.</p>
                  <p className="card-text" id='tips_text'>Victories are a great way to boost your shlong morale.</p>
                
              </div>
          </div>
    </div>
    <div className="col">
    <div className="card" id="purpose">
            <img id="purpose_logo" src={purpose_logo} class="card-img-top mx-auto" alt="Purpose Over Pleasure" />
              <div className="card-body">
                <h5 className="card-title" id='purpose_title'>Purpose Over Pleasure™</h5>
                  <p className="card-text" id='purpose_text'>Purpose Over Pleasure™ is the way I connect with the homos.</p>
                    <a id="subscribe" href="/" className="btn btn-primary">Subscribe</a>
              </div>
          </div>
    </div>
    <div className="col" id='vault_col'>
    <img id="vault_icon" src={vault_icon} class="card-img-top mx-auto" alt="Vault Countdown" />
      <CountDown />

    </div>
  </div>

  <div className="row mx-auto" id='embed'>
  <div id='embed-1'  className="row mx-auto embed-responsive embed-responsive-16by9 col-6">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/PaFPafetNwU?si=CimRyegmfbgbGI0h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>    
  </div>
  </div>

 

<div className="fixed-bottom">
<footer id='footer' className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='mx-auto'>
    <a id="icon-link" className="col px-5" href="https://aasports89.github.io/rsvp/">
      <img id="royal-icon" className='img-card-overlay' src={favicon} alt="Personal Coach"></img>
    </a>
    <p className="mx-auto" data-aos="flip-down" id="footer-title"><b id="footer-bold">© Dildo Coach - {year}. All Rights Reserved.</b></p>
    <a id="icon-link" className="col px-5" href="https://www.facebook.com">
      <i data-aos="slide-right" id="twitter" className="fa-brands fa-facebook"></i>
    </a> 
    <a id="icon-link" className="col px-5" href="https://www.instagram.com">
      <i data-aos="slide-" id="insta" className="fa-brands fa-instagram"></i>
    </a> 
    <a id="icon-link" className="col px-5" href="https://www.youtube.com">
      <i data-aos="slide-left" id="yelp" className="fa-brands fa-youtube"></i>
    </a> 
    </div>
</footer>
</div>

</div>
);
}

export default App;
