import React from "react";
import "./Profile.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useState } from "react";
import firebase from "firebase";

function Profile() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  var user = firebase.auth().currentUser;

  const submit = (e) => {
    e.preventDefault();
    user.updateProfile({
      displayName: displayName,
      photoURL: photoURL,
    });
    if (user.displayName !== null) {
      history.push("/");
    } else {
      history.push("/Profile");
    }
  };

  return (
    <div className="profile">
      <Link to="/">
        <img
          className="profile__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="profile__container">
        <h1>Profile Information</h1>
        <form>
          <h5>Username</h5>
          <input
            placeholder={
              user?.displayName !== null
                ? `${user?.displayName}`
                : `Add your Name`
            }
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <h5>Email address</h5>
          <input
            placeholder={
              user?.email !== null ? `${user?.email}` : `add an email`
            }
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Profile Pictue link</h5>
          <input
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter your desired picture link"
            type="text"
          />
          <button onClick={submit} className="profile__submitButton">
            Apply Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
