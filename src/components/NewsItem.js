import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date } = this.props;
    const cardClass = mode === 'dark' ? 'bg-dark text-white' : '';

    return (
      <div className="my-3">
        <div className={`card ${cardClass}`}>
          
          {/* IMAGE + BADGE OVERLAY */}
          <div className="position-relative">
            <img src={imageUrl} className="card-img-top" alt="news thumbnail" />
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: 1 }}
            >
              Info
              <span className="visually-hidden">badge info</span>
            </span>
          </div>

          {/* CARD BODY */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
