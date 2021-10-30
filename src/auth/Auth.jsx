import React, {useState} from 'react';
import './../styles/Auth.css';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';


function Auth(props) {
 
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorMessage, setErorMessage] = useState('');   
  

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const showError = (textError) => {
    setErorMessage(textError);
  }

  const register = async() => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      props.updateListener();
    } catch(error) {
      showError(error.message);
    }
  };

  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      props.updateListener();
    } catch(error) {
      showError(error.message);
    }
  };

  const logout= async() => {
    await signOut(auth);
  };

   return(
    <div className="auth__container">
        {errorMessage ? <div className="auth__error">{errorMessage.split(':')[1]}</div> : null}
        <div className="auth__register-box">
          <h3 className="auth__title">Register User</h3>
          <div>
            <input className="auth__email" placeholder="Email" type="email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
          </div>
          <div>
             <input className="auth__password" placeholder="Password" type="password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
          </div>
          <div className="auth__button button">
             <button onClick={register}>Create User</button>
          </div>
        </div>

        <div className="auth__login-box">
          <h3 className="auth__title">Login</h3>
          <div>
              <input className="auth__email" placeholder="Email" type="email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
          </div>
          <div>
              <input className="auth__password" placeholder="Password" type="password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
          </div>
          <div className="auth__button button">
              <button onClick={login}>Login</button>
          </div>
        </div>

        <div>
            <h4 className="auth__title">User Logged In:</h4>
            <div className="auth__emailSuccess">{user?.email}</div>
            <div className="auth__buttonSuccess button">{user?.email ? <button onClick={props.updateListener}>Return to site</button> : null}</div>
            <div className="auth__buttonOut button">
              <button onClick={logout}>Sign Out</button>
            </div>
        </div>
    </div>
   
  );
}

export default Auth;
