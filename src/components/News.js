import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
    
        <h2>NewsMonkey top - headline</h2>
        <div className="row">
            <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
              <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
              <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
            
        </div>
               <div className="row">
            <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
              <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
              <div className='col-md-4'>
                      <NewsItem title = "mytitle"  description = "mydescription"/>
            </div>
            
        </div>
        
        
      </div>
  
    )
  }
}

export default News
