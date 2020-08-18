import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  const footerElement = () => {
    return <footer className="page-footer purple darken-3"></footer>;
  };

  return (
    <div>
      <Navbar />
      <section className="container">
        <div class="row">
          <div class="col s12 m6">
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

          <div class="col s12 m6">
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

          <div class="col s12 m6">
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

          <div class="col s12 m6">
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

          <div class="col s12 m6">
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
