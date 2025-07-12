import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");

   

    this.state = {
      articles: [], // ✅ use the const articles declared above
      loading: false
    };
  }

async componentDidMount() {
  let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ae1ed1538bd44052a573e8706a7e56a3";
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  this.setState({ articles: parsedData.articles });
}


  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey top - headline</h2>
        <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className='col-md-4' key={index}>
                <NewsItem
                  title={element.title?element.title.slice(0,45):""}
                  description={element.description?element.description.slice(0,60):""}
                  imageUrl={element.urlToImage}
                  newsUrl = {element.url}  />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
