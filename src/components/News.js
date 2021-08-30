import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: "20",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  constructor(props) {
    super(props);
    // console.log("Hello This is constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title =
      document.location.pathname !== "/"
        ? `${
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)
          } - Top News`
        : "Top News - Get Daily Top News for FREE!!";
  }

  async componentDidMount() {
    this.props.setProgress(0);
    this.props.setProgress(1);
    this.props.setProgress(2);
    this.props.setProgress(4);
    this.props.setProgress(8);
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(60);
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
    // this.updateNews();
  }

  fetchMore = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="mb-3 text-center" style={{ margin: "80px" }}>
            Top Headlines{" "}
            {this.props.category !== "general"
              ? " - " +
                this.props.category.charAt(0).toUpperCase() +
                this.props.category.slice(1)
              : ""}
          </h1>
          {!this.state.loading && <hr />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMore}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row" id="newsContainer">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col md-3" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 40) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 100)
                            : ""
                        }
                        publishedAt={element.publishedAt}
                        author={element.author}
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        <hr />
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-muted"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/entertainment"
                    >
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/business"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/general"
                    >
                      General
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/health"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/science"
                    >
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/sports"
                    >
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      aria-current="page"
                      to="/technology"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link px-2 text-muted">
                  About
                </Link>
              </li>
            </ul>
            <p className="text-center text-muted">
              &copy;{" "}
              <Link to="/" className="text-muted">
                2021 TopNews, Inc
              </Link>
            </p>
          </footer>
        </div>
      </>
    );
  }
}

export default News;
