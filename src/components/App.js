import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Home from './Home.js'

class App extends Component {

  state = {
    hogs: hogs
  }

  clearSort = () => {
    this.setState({
      hogs: hogs
    })
  }

  newHogs = (sortedHogs) => {
    this.setState({
      hogs: sortedHogs
    })
  }

  render() {
    return (
      <div className="App">
        < Nav />
      < Home hogs={this.state.hogs} newHogs={this.newHogs} clearSort={this.clearSort}/>
      </div>
    )
  }
}

export default App;
