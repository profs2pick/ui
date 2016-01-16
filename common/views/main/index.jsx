import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="main-nav">
          <div></div>

          <div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}
