import "./Form.css";
import React, { useRef } from "react";

const Form = () => {
  
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Login Here</h3>
        <label for="username" name="user_name">
          Username
        </label>
        <input
          name="user_email"
          type="text"
          placeholder="Email or Phone"
          id="username"
        />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button className="buttonn"type="submit">Log In</button>
        <div className="social">
          <div className="go">Google</div>
          <div className="fb">Facebook</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
