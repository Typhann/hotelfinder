import {useState} from 'react';
import { Link } from "react-router-dom";
import { 
    FaApple,
    FaGoogle,
    FaFacebook,
    FaWindowClose,
  } from "react-icons/fa";

export default function Register () {

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
        <div className="register">
        <button onClick={openRegister} className="button">Register</button>
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

                <input onClick={closeRegister} className="button log-in-BTN" type="submit" value="Register" />

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
  )
}