import './App.css';
import Button from 'react-bootstrap/Button';
import easypaisa from './assets/images/easypaisa.jpg'
import credit from './assets/images/credit.png'
import jazz from './assets/images/jazz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="App container">
      <div className="balance">
        <h1><b>Available Balance</b></h1>
        <div className="credit">
          <h2>your credits</h2>
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span><FontAwesomeIcon icon={faCircleQuestion} style={{ color: "#a7acb4", }} /></span>
          </div>
          {isHovering && (
            <div className='hover'>
              <p>credits are used when paying for purchases</p>
            </div>
          )}
        </div>


      </div>
      <div className='dollars auth-form-container'>
        <h1><b>$0.00</b></h1>
      </div>
      <div className="head">
        <h1><b>Payment Methods</b></h1>
        <h4>you can add balance to your wallet using following payment methods</h4>
      </div>
      <div className="body auth-form-container" >
        <div className="links" style={{ width: "100%" }} >
          <div className="link1 m-3">
            <Button className='links' variant="link">
              <img src={credit} alt="credit card" /> Cedit Card</Button>
          </div>
          <span className="verticle-line"></span>

          <div className="link2 ml-5">
            <Button className='links' variant="link">
              <img src={easypaisa} alt="easypaisa" />easypaisa</Button>
          </div>
          <span className="verticle-line"></span>

          <div className="link3 ms-2" >
            <Button className='links' variant="link" >
              <img src={jazz} alt="jazcash" />Jazz Cash</Button>
          </div>
        </div>
      </div>
    </div >
  );
}
export default App;
