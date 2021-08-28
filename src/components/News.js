import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
  };

  constructor(props) {
    super(props);
    console.log("Hello This is constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - Top News`;
  }

  // async updateNews() {
  //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=47a860f74f4b455f83529753d349f0bb&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=47a860f74f4b455f83529753d349f0bb&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // this.updateNews();
  }

  // handlePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=47a860f74f4b455f83529753d349f0bb&page=${
  //     this.state.page - 1
  //   }&pagesize=${this.props.pagesize}`;
  //   this.setState({ loading: true });

  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
    // this.setState({ page: this.state.page - 1 });
    // this.updateNews();
  // };

  // handleNextClick = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / Number(this.props.pagesize))
  //     )
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //       this.props.category
  //     }&apiKey=47a860f74f4b455f83529753d349f0bb&page=${
  //       this.state.page + 1
  //     }&pagesize=${this.props.pagesize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false,
  //     });
  //     // this.setState({ page: this.state.page + 1 });
  //     // this.updateNews();
  //   }
  // };

  fetchMore = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=47a860f74f4b455f83529753d349f0bb&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="mb-3 text-center">
            Top Headlines{" "}
            {this.props.category !== "general"
              ? " - " +
                this.props.category.charAt(0).toUpperCase() +
                this.props.category.slice(1)
              : ""}
          </h1>
          {this.state.loading && <Spinner />}

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
          {/* {!this.state.loading && (
            <>
              <hr />

              <div className="container d-flex justify-content-evenly mt-3">
                <button
                  disabled={this.state.page <= 1}
                  className="btn btn-primary"
                  onClick={this.handlePrevClick}
                >
                  &larr; Previous
                </button>
                <button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(
                      this.state.totalResults / Number(this.props.pagesize)
                    )
                  }
                  className="btn btn-primary"
                  id="nextBtn"
                  onClick={this.handleNextClick}
                >
                  Next &rarr;
                </button>
              </div>
            </>
          )} */}
        </div>
        <footer>copyright &copy;</footer>
      </>
    );
  }
}

export default News;
