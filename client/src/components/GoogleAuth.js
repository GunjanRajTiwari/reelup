import React, { Component } from "react";
import "./GoogleAuth.css";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "YOUR_CLIENT_ID",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
    alert("Logged out successfully!!!");
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button className='btn-auth' onClick={this.onSignOut}>
          Log Out
        </button>
      );
    } else {
      return (
        <button className='btn-auth' onClick={this.onSignIn}>
          <img
            className='google-icon'
            src='https://img.icons8.com/fluent/48/000000/google-logo.png'
          />
          <span>Log In</span>
        </button>
      );
    }
  }

  render() {
    return <div className='auth'>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
