import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Spinner } from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitlize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0
    }
    document.title = `${this.capitlize(this.props.category)} - NewsKong`
  }
  async update() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  
  };
  render() {
    return (
      <>
        <h1 className="text-center">Headlines on {this.capitlize(this.props.category)}</h1>
         {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} 
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          >
            <div className="container">
          <div className="row">
            {this.state.articles.map((element,index) => {
              return <div className="col-md-4" key={index}>
                <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} NewsUrl={element.url} author={element.author ? element.author : "unknown"} date={element.publishedAt} />
              </div>
            })}
          </div>
          </div>
          </InfiniteScroll>
      </>
    )
  }
}

export default News
