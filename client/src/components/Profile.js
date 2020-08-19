import React from "react";

const Profile = () => {
  return (
    <div className="container" id="profile">
      <h2 className="welcome-msg">Welcome, Plaban</h2>
      <h5 className="profile-email">plabanmondal02@gmail.com</h5>
      <hr />
      <div className="row">
        <div className="col s12 m6 center">
          <button className="waves-effect waves-light btn purple darken-3">
            Edit Profile
          </button>
        </div>
        <div className="col s12 m6 center">
          <button className="waves-effect waves-light btn red accent-4">
            Logout
          </button>
        </div>
      </div>

      <section className="row">
        <div class="col s12">
          <div class="card indigo lighten-5">
            <div class="card-content ">
              <span class="card-title center-align">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <button
        class="btn-floating btn-large waves-effect waves-light light-green accent-3"
        id="rigth-btn"
      >
        <i class="material-icons">edit</i>
      </button>
    </div>
  );
};

export default Profile;
