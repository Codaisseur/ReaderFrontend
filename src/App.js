import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './app/Header';
import Footer from './app/Footer';

import { startLoading, stopLoading, showError, hideError } from './actions/appActions';

// Load all SCSS
import './stylesheets/components.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  classNames() {
    const { loading, loadingMessage, error, errorMessage } = this.props;
    console.log(this.props);
    let _classNames = ["app"];
    if (loading) { _classNames.push("loading"); }
    if (error) { _classNames.push("error"); }
    return _classNames.join(" ");
  }

  stopLoading(event) {
    this.props.dispatch(stopLoading());
  }

  startLoading(message = "") {
    this.props.dispatch(startLoading(message));
  }

  hideError(event) {
    this.props.dispatch(hideError());
  }

  showError(message = "") {
    this.props.dispatch(showError(message));
  }

  render() {
    const { loading, loadingMessage, error, errorMessage } = this.props;

    let childProps = {
      onLoad: this.stopLoading.bind(this),
      onLoading: this.startLoading.bind(this)
    };

    let childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, childProps);
    });

    return (
      <div className={this.classNames()}>
        <Header />
        <div className="container">
          {childrenWithProps}
        </div>
        { loading &&
          <div className="loader"><p className="message"><span>{loadingMessage}</span></p></div>
        }
        { error &&
          <div className="error"><p className="message"><span>{errorMessage || "OMG an error!"}</span></p></div>
        }
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingMessage: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { loadingStatus, errorStatus } = state.app;
  const { loading, loadingMessage } = loadingStatus;
  const { error, errorMessage } = errorStatus;

  return {
    loading,
    loadingMessage,
    error,
    errorMessage
  };
}

export default connect(mapStateToProps)(App);
