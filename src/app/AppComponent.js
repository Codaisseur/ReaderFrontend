import React from 'react';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.onLoad();
  }
}

export default AppComponent;
