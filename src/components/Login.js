import React, { useState } from "react";
import '../App.css';

export default function Login() {
  // const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  // async function handleSubmit(event) {
  //   event.preventDefault();
  
  //   try {
  //     await Auth.signIn(email, password);
  //     userHasAuthenticated(true);
  //     history.push("/");
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
      <label className="form-group github">Login with Github <span><i className="fa fa-github"></i></span></label>

        <div className="form-group" >
          <label>Email</label>
          <input
            className="form-control"
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group"  >
          <label>Password</label>
          <input
          className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <button className="btn btn-primary px-4" disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}