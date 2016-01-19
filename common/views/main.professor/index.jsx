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

        <div className="container" style={{ width: 640 }}>
          <div className="rate-box">
            <div className="average">4.2</div>
            <div className="attributelist">
              <div className="attribute">
                <h6 className="name">Helpfulness</h6>
                <h4 className="score">4.0</h4>
              </div>

              <div className="attribute">
                <h6 className="name">Clarity</h6>
                <h4 className="score">5.0</h4>
              </div>

              <div className="attribute">
                <h6 className="name">Easiness</h6>
                <h4 className="score">3.0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProfessorView;
