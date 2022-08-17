import React, { FC } from 'react';


const Register: FC = () => {
    const sendRegistration = (): void => {
      const firstElem = document.getElementById("register-first") as HTMLInputElement;
      const lastElem = document.getElementById("register-last") as HTMLInputElement;  
      const usernameElem = document.getElementById("register-username") as HTMLInputElement;
      const passwordElem = document.getElementById("register-password") as HTMLInputElement;
      const first: string = firstElem.value;
      const last: string = lastElem.value;
      const username: string = usernameElem.value;
      const password: string = passwordElem.value;
      const msg: string = "attempting to register: ".concat(first, " ", last, " ", username, " ", password)

      console.log(msg);
    }


    return (
    <div>
      <label>First Name</label>
      <input id="register-first"/>
      <br/>
      <label>Last Name</label>
      <input id="register-last"/>
      <br/> 
      <label>Username</label>
      <input id="register-username"/>
      <br/>
      <label>Password</label>
      <input id="register-password"/>
      <br/> 
      <button onClick={sendRegistration}>Login</button>
    </div>)
}

export default Register;