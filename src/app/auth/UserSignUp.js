import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppComponent from '../AppComponent';

class UserSignUp extends AppComponent {
  signUp(event) {
    let self = this;
    event.preventDefault();
    console.log("Signing up!");
    this.props.onLoading("Signing up");
    window.setTimeout(function() {
      browserHistory.push("/");
    }, 1000);
  }

  render() {
    return(
      <div className="auth sign-up">
        <h1>Sign Up!</h1>
        <form onSubmit={this.signUp.bind(this)}>
          <div className="form-group">
            <label htmlFor="signUpEmail">Email address</label>
            <input type="email" ref="email" className="form-control" id="signUpEmail" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label htmlFor="signUpPassword">Password</label>
            <input type="password" ref="password" className="form-control" id="signUpPassword" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="signUpRepeatPassword">Password</label>
            <input type="password" ref="repeat_password" className="form-control" id="signUpRepeatPassword" placeholder="Repeat Password"/>
          </div>
          <button type="submit" className="btn btn-default">Sign up</button>
        </form>
        <p>
          Already have an account? <Link to="/users/sign-in">Sign in</Link>
        </p>
      </div>
    );
  }
}

export default UserSignUp;
