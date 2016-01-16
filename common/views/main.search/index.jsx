import React from 'react';

class MainSearchView extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="search-section">
          <form>
            <input type="search" className="searchbar" placeholder="Search" />
          </form>

          <p className="lead">Find professors, universities.</p>
        </div>
      </div>
    );
  }
}

export default MainSearchView;
