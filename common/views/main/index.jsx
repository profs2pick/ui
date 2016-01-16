import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="main-nav">
          <div>
            <a href="#" className="link -active">Home</a>
            <a href="#" className="link">Professors</a>
            <a href="#" className="link">Universities</a>
          </div>

          <div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}
