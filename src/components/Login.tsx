import React, { FC } from 'react';


const Login: FC = () => {

    const sendLogin = (): void => {
      const usernameElem: HTMLInputElement = document.getElementById("login-username") as HTMLInputElement;
      const passwordElem: HTMLInputElement = document.getElementById("login-password") as HTMLInputElement;
      const username: string = usernameElem.value;
      const password: string = passwordElem.value
      const msg: string = "attempting to login: ".concat(username, " ", password)

      console.log(msg);
    }


    return (
    <div>
      <label>Username</label>
      <input id="login-username"/>
      <br/>
      <label>Password</label>
      <input id="login-password"/>
      <br/> 
      <button onClick={sendLogin}>Login</button>
    </div>)
}

export default Login