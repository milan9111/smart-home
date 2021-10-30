import React, { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';


function Auth() {

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
    } catch(error) {
      showError(error.message);
    }
  };


  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch(error) {
      showError(error.message);
    }
  };

  const logout= async() => {
    await signOut(auth);
  };
   
   
   return(
    <div className="App">
      <div>
        {errorMessage ? <div>{errorMessage.split(':')[1]}</div> : null} 
        <h3>Register User</h3>
        <input placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value)}}/>
        <input placeholder="Password" onChange={(event) => {setRegisterPassword(event.target.value)}}/>
        <button onClick={register}>Create User</button>
      </div>

      <div>
        <h3>Login</h3>
        <input placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value)}}/>
        <input placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value)}}/>
        <button onClick={login}>Login</button>
      </div>

      <h4>User Logged In:</h4>
      {user?.email}
      <button onClick={logout}>Sign Out</button>
    </div>
   
  );
}

export default Auth;
