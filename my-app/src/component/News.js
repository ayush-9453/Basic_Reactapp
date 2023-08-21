import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles=[
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Burnt-out shell of 1954 Ferrari fetches $2m at auction",
            "description": "The legendary car was left untouched for decades until a hurricane blew the roof off a Florida barn.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66563807",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/57F3/production/_130851522_gettyimages-1619719903.jpg",
            "publishedAt": "2023-08-20T16:52:20.1081345Z",
            "content": "The burnt-out shell of an old Ferrari racing car has sold at auction in the US for nearly $2m (£1.5m).\r\nIt caught fire during a race in the 1960s and was not touched for decades. \r\nIt was driven by F… [+851 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Man disparages Pride flag, then kills shopkeeper in California",
            "description": "The gunman is shot dead by US police, as Hollywood director Paul Feig pays tribute to the victim.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66564605",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0087/production/_130853100_gettyimages-1392171790.jpg",
            "publishedAt": "2023-08-20T16:37:22.2798581Z",
            "content": "A US shop owner was shot dead after a dispute over a Pride flag displayed outside her business, police say. \r\nLaura Ann Carleton, 66, was found with a bullet wound at her Mag Pi shop in Cedar Glen, C… [+2074 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Women's World Cup: Fans rejoice in Madrid as Spain makes football history",
            "description": "As their team wins its first-ever World Cup in Sydney, supporters of women's football celebrate back home.",
            "url": "http://www.bbc.co.uk/news/world-europe-66564318",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1590F/production/_130853388_mediaitem130852282.jpg",
            "publishedAt": "2023-08-20T16:37:20.467809Z",
            "content": "\"Girl power!\" exclaimed one woman as the final whistle blew and the fan zone erupted into screams and tears of joy.\r\nThere were so many children and young people in the crowd, their faces painted in … [+1856 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "California braces for arrival of Hurricane Hilary",
            "description": "Hurricane Hilary lashes Baja California state and is headed for the south-western US.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66559623",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6B85/production/_130852572_mediaitem130851435.jpg",
            "publishedAt": "2023-08-20T14:52:22.1250978Z",
            "content": "The US state of California is bracing itself for Hurricane Hilary, which is already bringing fierce winds and flooding to Mexico's Pacific coast.\r\nIt is lashing the Mexican state of Baja California w… [+2315 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        this.state={
            articles: this.articles,
            loading:false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
            <NewsItems title={element.title.length >= 45 ? element.title.slice(0, 45) : element.title} description={element.description.length >= 60 ? element.description.slice(0, 60) : element.description} imgUrl={element.urlToImage} NewsUrl={element.url}/>
            </div>
          })}
          </div>    
      </div>
    )
  }
}

export default News
