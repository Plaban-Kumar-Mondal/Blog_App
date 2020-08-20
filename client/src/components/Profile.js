import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../apiCalls/authAPI";

const Profile = () => {
  const { user } = isAuthenticated();

  return (
    <div className="container" id="profile">
      <h2 className="welcome-msg">Welcome, {user.name}</h2>
      <h5 className="profile-email"> {user.email} </h5>
      <hr />
      <div className="row">
        <div className="col s12 m6 center">
          <button className="waves-effect waves-light btn purple darken-3 disabled">
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
        <div className="col s12">
          <div className="card indigo lighten-5">
            <div className="card-content ">
              <span className="card-title center-align">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Link
        to="/blog/create"
        className="btn-floating btn-large waves-effect waves-light light-green accent-3"
        id="rigth-btn"
      >
        <i className="material-icons">edit</i>
      </Link>
    </div>
  );
};

export default Profile;
