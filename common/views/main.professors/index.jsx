import React from 'react';
import {Link} from 'react-router';

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
              <Link to="/rate" query={{ professor: 1 }} className="btn -default">
                <i className="fa fa-plus" />
                Submit Review
              </Link>

              <a href="#" className="btn -default">
                <i className="fa fa-share" />
                Share
              </a>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: 640 }}>
          <div className="rate-box u-spacer">
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

          <h5 className="u-text-up u-heading-bold">Reviews</h5>

          <div className="review-card">
            <div className="body">
              <p>A perfectly legit page full of headers with IDs and the content
              between them. Note the ID's. They are unique, as any good ID ought to be.
              This is required because it gives us a link target.</p>

              <a href="#" className="permalink">2 days ago</a>
            </div>

            <div className="meta">
              <div className="info">
                <label>University</label>
                <p>Pamantasan ng Lungsod ng Maynila</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProfessorView;
