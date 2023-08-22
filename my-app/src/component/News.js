import React, { Component } from 'react'
import NewsItems from './NewsItems'
import { Spinner } from './Spinner';
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12953adc668045388e20ddc71bf3886b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handlePrevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12953adc668045388e20ddc71bf3886b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  handleNextclick = async () => {
    if ((!this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    }
    else{ let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=12953adc668045388e20ddc71bf3886b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">"Top Headlines"</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage} NewsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-outline-secondary btn-sm mx-2" onClick={this.handlePrevclick}> &larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary btn-sm" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
