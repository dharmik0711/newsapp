import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    mode: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      pageSize: 5
    };
  }

  async fetchArticles(page) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ae1ed1538bd44052a573e8706a7e56a3&page=${page}&pageSize=${this.state.pageSize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: page,
      loading: false
    });
  }

  componentDidMount() {
    this.fetchArticles(this.state.page);
  }

  handleNextClick = () => {
    const totalPages = Math.ceil(this.state.totalResults / this.state.pageSize);
    if (this.state.page < totalPages) {
      this.fetchArticles(this.state.page + 1);
    }
  };

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.fetchArticles(this.state.page - 1);
    }
  };

  render() {
    const totalPages = Math.ceil(this.state.totalResults / this.state.pageSize);

    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ color: this.props.mode === 'dark' ? 'white' : 'black' }}>
          NewsMonkey - Top Headlines
        </h2>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="row">
            {this.state.articles.map((element, index) => (
              <div className="col-md-4 my-2" key={element.url || index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 70) : ""}
                  description={element.description ? element.description.slice(0, 90) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  mode={this.props.mode}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        )}
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= totalPages}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
