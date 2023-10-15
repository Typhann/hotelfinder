import { Link } from 'react-router-dom'
import { 
    FaApple,
    FaGoogle,
    FaFacebook,
    FaWindowClose
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
        <div className="log-in-section" style={{display: isClosed}}>
            <button onClick={closeOverlay} className='close-overlay'><FaWindowClose/></button>
            <section className="log-in-section-inner">
                <h1>Log in</h1>

                <div className="email">
                    <label for="email">Email</label><br />
                    <input id="email" size="35" name="email" required />
                </div>

                <div className="password">
                    <label for="pass">Password</label><br />
                    <input type="password" id="pass" size="35" name="password" required />
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
    );
  }
  