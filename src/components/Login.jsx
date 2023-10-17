import {useState} from 'react';
import { Link } from "react-router-dom";
import { 
    FaApple,
    FaGoogle,
    FaFacebook,
    FaWindowClose,
  } from "react-icons/fa";

export default function Login () {

    {/*Function for trigger Log in section*/}
   const [isClosed, setIsClosed] = useState('none');

   const openOverlay = () => {
       setIsClosed('block');
   }
   const closeOverlay = () => {
    setIsClosed('none');
  }

    return (
      <>
      <div className="login-register">
       <button onClick={openOverlay} className="button">Log in</button>
       </div>

        {/*Login form, hidden on defeault*/}
    <div className="log-in-section" style={{display: isClosed}}>
            <button onClick={closeOverlay} className='close-overlay'><FaWindowClose/></button>
            <section className="log-in-section-inner">
                <h1>Log in</h1>

                <div className="email">
                    <label>Email</label><br />
                    <input type="email" id="email" size="30" name="email" placeholder="Maria Svensson" required />
                </div>

                <div className="password">
                    <label>Password</label><br />
                    <input type="password" id="pass" size="35" name="password" placeholder="*********" required />
                </div>

                <input onClick={closeOverlay} className="button log-in-BTN" type="submit" value="Log in" />

                <div className="social-log-in">
                    <div className="divBTN"><p><FaApple/> Continue with Apple</p></div>
                    <div className="divBTN"><p><FaGoogle/> Continue with Google</p></div>
                    <div className="divBTN"><p><FaFacebook/> Continue with Facebook</p></div>
                </div>

                <div className='new-account'>
                    <p>Do not have an account yet? 
                    <Link to="https://www.google.com"> Register now</Link>
                    </p>
                    <p><Link to="https://www.google.com"> Terms & Conditions</Link></p>
                </div>
            </section>
        </div>

      </>
  
  
    );
  }