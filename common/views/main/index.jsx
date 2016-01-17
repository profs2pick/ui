import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="nav">
            <a href="#" className="link -active">Home</a>
            <a href="#" className="link">Professors</a>
            <a href="#" className="link">Universities</a>
          </div>

          <div className="nav">
            <div className="searchbar">
              <form>
                <div className="input-group">
                  <span className="addon"><button className="btn -simple">+</button></span>
                  <input type="search" className="form-control" />
                </div>
              </form>
            </div>

            <a href="#" className="btn -default">Submit Rating</a>
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
