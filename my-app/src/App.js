// adding a search box in the navbar 
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
           <Navbar/>
           <News pageSize={6} country="in" category='entertainment' />
      </div>
    )
  }
}