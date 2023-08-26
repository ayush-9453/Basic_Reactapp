// adding a search box in the navbar 
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apikey= process.env.REACT_APP_NEWS_API
  state ={
    progress: 0
  }
 setProgress =(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>  
           <LoadingBar
            color='#fbbf24'
            progress={this.state.progress}
            height= '3px'
          />
          <Navbar />
       
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="general" pageSize={6} country="us" category='general' />}></Route>
            <Route exact path="/business" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="business" pageSize={6} country="in" category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="entertainment" pageSize={6} country="us" category='entertainment' />}></Route>
            <Route exact path="/sports" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="sports" pageSize={6} country="us" category='sports' />}></Route>
            <Route exact path="/health" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="health" pageSize={6} country="us" category='health' />}></Route>
            <Route exact path="/science" element={<News apikey={this.apikey} setProgress = {this.setProgress} key="science" pageSize={6} country="in" category='science' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}