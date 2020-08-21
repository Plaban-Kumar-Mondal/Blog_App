import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../apiCalls/blogAPI";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const loadAllBlogs = () => {
    getAllBlogs().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAllBlogs(data);
      }
    });
  };

  useEffect(() => {
    loadAllBlogs();
  });

  const footerElement = () => {
    return (
      <footer className="page-footer purple darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <h6 className="white-text">
                © 2020 Copyright Plaban Kumar Mondal
              </h6>
              <p className="gry-text lighten-3">This is made with MERN Stack</p>
            </div>
            <div className="col s12 m4">
              <p className="text-white">Twitter</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col s12">
            <div className="card indigo lighten-5">
              <div className="card-content ">
                <span className="card-title center-align">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="card indigo lighten-5">
              <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="card purple darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col s12">
            <div className="card purple darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {footerElement()}
    </div>
  );
};

export default Home;
