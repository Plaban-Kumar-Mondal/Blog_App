import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  const footerElement = () => {
    return (
      <footer className="page-footer purple darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <h5 className="white-text">
                © 2020 Copyright Plaban Kumar Mondal
              </h5>
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
      <Navbar />
      <section className="container">
        <div class="row">
          <div class="col s12">
            <div class="card indigo lighten-5">
              <div class="card-content ">
                <span class="card-title center-align">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div class="col s12">
            <div class="card indigo lighten-5">
              <div class="card-content">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div class="col s12">
            <div class="card purple darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div class="col s12">
            <div class="card purple darken-1">
              <div class="card-content white-text">
                <span class="card-title center-align">Card Title</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </div>
          </div>

          <div class="col s12">
            <div class="card purple darken-1">
              <div class="card-content white-text">
                <span class="card-title">Card Title</span>
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
