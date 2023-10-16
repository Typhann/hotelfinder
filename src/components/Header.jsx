import { Link } from "react-router-dom";
import Search from "./search/Search";
import {useState} from 'react';
import Profile from "./Profile";

import { 
  FaApple,
  FaGoogle,
  FaFacebook,
  FaWindowClose,
  FaHeart,
} from "react-icons/fa";

export default function Header() {

   {/*Function for trigger Log in section*/}
   const [isClosed, setIsClosed] = useState('none');

   const openOverlay = () => {
       setIsClosed('block');
   }
   const closeOverlay = () => {
    setIsClosed('none');
  }

   {/*Function for trigger register section*/}
   const [registerClosed, setRegisterClosed] = useState('none');

   const openRegister = () => {
    setRegisterClosed('block');
   }
   const closeRegister = () => {
    setRegisterClosed('none');
  }

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <span>Hotelfinder</span>
            <strong>Book Hotels with ease</strong>
          </Link>
        </div>
        <Search />
        {/*Logged out, defeault*/}
        <div className="login-register">
          <button onClick={openOverlay} className="button">Log in</button>
          <button onClick={openRegister} className="button">Register</button>
        </div>
         {/*Logged in*/}
         <div className="profile-favorite">
         <Link to="/Favorites">
         <div className="favorite-icon-header"><FaHeart/></div>
          </Link>
          <Profile/>
        </div>
      </header>

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

                <input className="button log-in-BTN" type="submit" value="Log in" />

                <div className="social-log-in">
                    <div className="divBTN"><p><FaApple/> Continue with Apple</p></div>
                    <div className="divBTN"><p><FaGoogle/> Continue with Google</p></div>
                    <div className="divBTN"><p><FaFacebook/> Continue with Facebook</p></div>
                </div>

                <div className='new-account'>
                    <p>Don't have an account yet? 
                    <Link to="https://www.google.com"> Register now</Link>
                    </p>
                    <p><Link to="https://www.google.com"> Terms & Conditions</Link></p>
                </div>
            </section>
        </div>

      {/*Register form, hidden on defeault*/}
      <div className="log-in-section" style={{display: registerClosed}}>
            <button onClick={closeRegister} className='close-overlay'><FaWindowClose/></button>
            <section className="log-in-section-inner">
                <h1>Register</h1>

                <div className="email">
                    <label>Email</label><br />
                    <input type="email" id="email" size="30" name="email" placeholder="maria.svensson@email.uk" required />
                </div>

                <div className="password">
                    <label>Password</label><br />
                    <input type="password" id="pass" size="35" name="password" placeholder="*********" required />
                </div>

                <input className="button log-in-BTN" type="submit" value="Register" />

                <div className="social-log-in">
                    <div className="divBTN"><p><FaApple/> Continue with Apple</p></div>
                    <div className="divBTN"><p><FaGoogle/> Continue with Google</p></div>
                    <div className="divBTN"><p><FaFacebook/> Continue with Facebook</p></div>
                </div>

                <div className='new-account'>
                    <p>Already have an account? 
                    <Link to="https://www.google.com"> Log in here</Link>
                    </p>
                    <p><Link to="https://www.google.com"> Terms & Conditions</Link></p>
                </div>
            </section>
          </div>
    </>
  );
}
