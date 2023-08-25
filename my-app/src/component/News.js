import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
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
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async update() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=12953adc668045388e20ddc71bf3886b&page=1&pageSize=${this.props.pageSize}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.update();
  }
  handlePrevclick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.update();
  }
  handleNextclick = async () => {

    this.setState({ page: this.state.page + 1 })
    this.update()
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">"Top Headlines"</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} NewsUrl={element.url} author={element.author ? element.author : "unknown"} from={element.source.name} date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary btn-sm mx-2" onClick={this.handlePrevclick}> &larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
