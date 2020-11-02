import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


import UserService from "../services/user.service";
import {useSelector} from "react-redux";

const Home = () => {
  const [content, setContent] = useState("");
  const { user: currentUser } = useSelector((state) => state.auth);


  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron text-center">
        <h3>{content}</h3>
        {
          currentUser
            ? <></>

            :<div>
                <div className="btn btn-primary m-2" id="loginButton">
                  <a href={"/login"} className="text-decoration-none text-white loginButton">
                    Login
                  </a>
                </div>
                <div className="btn btn-secondary m-2" id="signUpButton">
                  <a href={"/register"} className="text-decoration-none text-white signUpButton">
                    Sign Up
                  </a>
                </div>
              </div>

        }
      </header>
    </div>
  );
};

export default Home;
