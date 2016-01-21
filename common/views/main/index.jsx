import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <div className="container-fluid">
            <div className="nav">
              <a href="#" className="logo"><img src={`${process.env.IMG}/logo.png`} /></a>
              <a href="#" className="link -active">Home</a>
              <a href="#" className="link">Professors</a>
              <a href="#" className="link">Universities</a>
            </div>

            <div className="nav">
              <div className="searchbar">
                <form>
                  <div className="input-group">
                    <button className="btn"><i className="fa fa-search" /></button>
                    <input type="search" className="form-control" placeholder="Search..." />
                  </div>
                </form>
              </div>

              <a href="#" className="btn -default">
                <i className="fa fa-plus" />
                Submit Rating
              </a>
            </div>
          </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
