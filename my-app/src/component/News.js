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
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "IndiaTimes",
            "title": "In a first, Indian submarine deployed all the way to Australia - IndiaTimes",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMieGh0dHBzOi8vbS50aW1lc29maW5kaWEuY29tL2luZGlhL2luLWEtZmlyc3QtaW5kaWFuLXN1Ym1hcmluZS1kZXBsb3llZC1hbGwtdGhlLXdheS10by1hdXN0cmFsaWEvYXJ0aWNsZXNob3cvMTAyODYxMjc3LmNtc9IBfGh0dHBzOi8vbS50aW1lc29maW5kaWEuY29tL2luZGlhL2luLWEtZmlyc3QtaW5kaWFuLXN1Ym1hcmluZS1kZXBsb3llZC1hbGwtdGhlLXdheS10by1hdXN0cmFsaWEvYW1wX2FydGljbGVzaG93LzEwMjg2MTI3Ny5jbXM?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-08-19T14:25:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "NDTV",
            "title": "India Imposes 40% Duty On Onion Exports As Prices Rise - NDTV",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3Lm5kdHYuY29tL2luZGlhLW5ld3MvaW5kaWEtaW1wb3Nlcy00MC1kdXR5LW9uLW9uaW9uLWV4cG9ydHMtdGlsbC1kZWNlbWJlci0zMS00MzExNzE30gFlaHR0cHM6Ly93d3cubmR0di5jb20vaW5kaWEtbmV3cy9pbmRpYS1pbXBvc2VzLTQwLWR1dHktb24tb25pb24tZXhwb3J0cy10aWxsLWRlY2VtYmVyLTMxLTQzMTE3MTcvYW1wLzE?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-08-19T13:13:37+00:00",
            "content": null
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
            <div className="col-md-4">
            <NewsItems title="mytitle" description="hello" imgUrl="https://th.bing.com/th/id/OIP.p-aZsNRUiC7FilHb3hnEYgHaE8?pid=ImgDet&rs=1"/>
            </div>
            <div className="col-md-4">
            <NewsItems title="mytitle" description="hello"/>
            </div>
            <div className="col-md-4">
            <NewsItems title="mytitle" description="hello"/>
            </div>
          </div>    
      </div>
    )
  }
}

export default News
