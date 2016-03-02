import React from 'react';
import Header from './app/Header';
import Footer from './app/Footer';

// Load all SCSS
import './stylesheets/components.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      error: false
    };
  }

  classNames() {
    let _classNames = ["app"];
    if (this.state.loading) { _classNames.push("loading"); }
    if (this.state.error) { _classNames.push("error"); }
    return _classNames.join(" ");
  }

  stopLoading(event) {
    console.log("done!");
    this.setState({
      loading: false
    });
  }

  startLoading(message = null) {
    console.log("done!");
    this.setState({
      loading: true,
      loadingMessage: message
    });
  }

  render() {
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
        <div className="loader">
          <p className="message"><span>{this.state.loadingMessage}</span></p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
