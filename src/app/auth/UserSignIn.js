import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppComponent from '../AppComponent';

class UserSignIn extends AppComponent {
  signIn(event) {
    let self = this;
    event.preventDefault();
    console.log("Signing in!");
    this.props.onLoading("Signing in");
    window.setTimeout(function() {
      browserHistory.push("/");
    }, 1000);
  }

  render() {
    return(
      <div className="auth sign-up">
        <h1>Sign In</h1>
        <form onSubmit={this.signIn.bind(this)}>
          <div className="form-group">
            <label htmlFor="signInEmail">Email address</label>
            <input type="email" ref="email" className="form-control" id="signInEmail" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="signInPassword">Password</label>
            <input type="password" ref="password" className="form-control" id="signInPassword" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-default">Sign in</button>
        </form>
        <p>
          Don't have an account? <Link to="/users/sign-up">Sign up</Link>
        </p>
      </div>
    );
  }
}

export default UserSignIn;
