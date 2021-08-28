import React, { Component } from "react";
import defImg from "./defImg.png";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt, author } =
      this.props;
    return (
      <>
        <div className="card my-2" style={{ width: "18rem" }}>
          <span
            className="position-absolute translate-middle badge rounded-pill bg-danger"
            style={{ left: "76px", top: "12px" }}
          >
            {author ? author : "Unknown"}
          </span>
          <img
            src={imgUrl ? imgUrl : defImg}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="text-muted my-0">Date : {publishedAt.slice(0, 9)}</p>
            <p className="text-muted my-0">
              Time : {publishedAt.slice(11, -1)}
            </p>
            <p className="text-muted mt-0">
              Author : {author ? author : "Unknown"}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-primary btn-sm"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
