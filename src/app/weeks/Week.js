import React from 'react';

class Week extends React.Component {
  render() {
    return(
      <div className="circle">
        <h1>Week!</h1>
        <p>{this.props.params.weekId}</p>
      </div>
    );
  }
}

export default Week;
