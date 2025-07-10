import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");

    const articles = [  // ✅ FIX: declare articles inside constructor
      {
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        author: "Paul Hannon",
        title: "Tariff Uncertainty Likely to Weigh on Global Growth Even After Extended Talks",
        description: "The extension means that clarity will not come this week—as many had hoped—but it also allows time to negotiate lower tariffs than those currently on pause.",
        url: "https://www.wsj.com/economy/trade/tariff-uncertainty-likely-to-weigh-on-global-growth-even-after-extended-talks-6111469a",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/GMpyrYUm5KDBxY8OtnpHng--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/93414bafffef64ab6c21f498142cef42",
        publishedAt: "2025-07-08T11:00:00Z",
        content: "Uncertainty about the terms under which trade will be conducted is a headwind for the global economy."
      },
      {
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        author: "Laura Saunders",
        title: "How Trump’s Megabill Will and Won’t Change Your Taxes",
        description: "The just-passed tax-and-spending package provides certainty for filers for the first time in years",
        url: "https://www.wsj.com/personal-finance/taxes/trump-tax-bill-personal-taxes-319dbceb",
        urlToImage: "https://images.wsj.net/im-65692990/social",
        publishedAt: "2025-07-04T09:30:00Z",
        content: "Republicans have their big, beautiful tax-and-spending package..."
      },
      {
        source: { id: "the-wall-street-journal", name: "The Wall Street Journal" },
        author: "Anna Wilde Mathews",
        title: "Centene Shares Plunge After Pulling Guidance",
        description: "Warning that its earnings will fall well short of expectations...",
        url: "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-07-01-2025/card/centene-shares-plunge-after-pulling-guidance-C55DZxGuLuEqEX8RJGfP",
        urlToImage: "https://images.wsj.net/im-34062673/social",
        publishedAt: "2025-07-01T22:44:28Z",
        content: "Managed-care giant Centene withdrew its financial guidance..."
      },
      {
        source: { id: "ign", name: "IGN" },
        author: "Chris Reed",
        title: "Walmart Has Some Better Deals Than Amazon for Prime Day This Year - IGN",
        description: "Walmart's big sale, designed to compete against Amazon Prime Day, is now live, with savings on all kinds of items.",
        url: "https://www.ign.com/articles/walmart-deals-sale-2025-prime-day-rival",
        urlToImage: "https://assets-prd.ignimgs.com/2024/11/04/walmartplacement-1730735304635.gif?width=1280",
        publishedAt: "2025-07-10T00:10:46Z",
        content: "Walmart has kicked off its massive Walmart Deals sale."
      },
      {
        source: { id: null, name: "CNBC" },
        author: "Sean Conlon",
        title: "Stock futures are little changed after S&P 500 posts first winning session in three: Live updates - CNBC",
        description: "Wall Street saw gains during Wednesday's session as shares of Nvidia rose.",
        url: "https://www.cnbc.com/2025/07/09/stock-market-today-live-updates.html",
        urlToImage: "https://image.cnbcfm.com/api/v1/image/108168915-1751986576833-gettyimages-2224106161-mms14996_rcjwkx4v.jpeg?v=1751986622&w=1920&h=1080",
        publishedAt: "2025-07-09T22:13:00Z",
        content: "Stock futures were little changed Wednesday evening."
      },
      {
        source: { id: null, name: "Investor's Business Daily" },
        author: null,
        title: "Futures: Nvidia Chipmaker Due; 2 AI Stocks Flash Buy Signals - Investor's Business Daily",
        description: "Nvidia chipmaker Taiwan Semiconductor and Delta Air Lines are on tap early Thursday.",
        url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-nvidia-hits-4-trillion-market-cap-ai-plays-rubrik-astera-labs/",
        urlToImage: "https://www.investors.com/wp-content/uploads/2020/03/stock-Nvidia-AI-02-company.jpg",
        publishedAt: "2025-07-09T22:09:00Z",
        content: "Nvidia and AI stocks are flashing buy signals."
      },
    
    ];

    this.state = {
      articles: articles, // ✅ use the const articles declared above
      loading: false
    };
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
                  title={element.title.slice(0,45)}
                  description={element.description.slice(0,60)}
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
