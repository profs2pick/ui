import React from 'react';

class MainProfessorView extends React.Component {
  render() {
    return (
      <div>
        <div className="professor-jumbotron">
          <div className="inner">
            <img src="https://avatars3.githubusercontent.com/u/9919?v=3&s=72" className="avatar -large" alt="avatar" />
            <h1 className="name">Kirby Borromeo</h1>
            <h4 className="field">Multimedia Arts</h4>
            <h4 className="university">MMC-Cast</h4>

            <div className="form-actions">
              <a href="#" className="btn -default">Submit Review</a>
              <a href="#" className="btn -default">Share</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProfessorView;
