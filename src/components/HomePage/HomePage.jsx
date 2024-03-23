import React from "react";
import "./HomePage.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
const HomePage = () => {
  return (
    <div>
      <h1>Navbar</h1>

      <div className="parent-container">
        <div className="container">
          <div className="header">
            <div className="text"> Sign Up </div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>

          <div className="fogot-password">
            Lost password? <span>Click here!</span>
          </div>
          <div className="submit-container">
            <div className="submit"> Sign Up</div>
            <div className="submit"> Login</div>
          </div>
        </div>

        <div className="container2">
          <div className="header">
            <div className="text"> Sign Up </div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email Id" />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>

          <div className="fogot-password">
            Lost password? <span>Click here!</span>
          </div>
          <div className="submit-container">
            <div className="submit"> Sign Up</div>
            <div className="submit"> Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
