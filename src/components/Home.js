import React from 'react'
import Tile from './Tile'
import Search from './Search'

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class Home extends React.Component {

  state ={
    name: '',
    weight: false,
    grease: false
  }

  renderHogs = () => {
    return this.filteredHogs().map(hog => {
      return < Tile hog={hog}/>
    })
  }

  filteredHogs = () => {
    return this.props.hogs.filter(hog => {
      return hog.name.toLowerCase().includes(this.state.name.toLowerCase())
    })
  }

  sortByWeight = () => {
    if (this.state.weight === true) {
      const sortedHogs = [...this.props.hogs].sort((a, b) => {
        return a[weight]-b[weight];
      })
      this.props.newHogs(sortedHogs)
    } else {
      this.props.clearSort()
    }
  }

  // sortByGrease = () => {
  //   if (this.state.grease === true) {
  //     const sortedHogs = [...this.props.hogs].map(hog => {
  //       return hog.grease === true
  //     })
  //
  //     this.props.newHogs(sortedHogs)
  //   } else {
  //     this.props.clearSort()
  //   }
  // }

  handleChange = (event) => {
    if (event.target.name === "weight") {
      this.setState({
        weight: event.target.checked
      }, this.sortByWeight)
    } else if (event.target.name === "grease") {
      this.setState({
        grease: event.target.checked
      }, this.sortByGrease)
    } else {
      this.setState({
        name: event.target.value,
        grease: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        < Search handleChange={this.handleChange} name={this.state.name}/>
        <br></br>
        <div className="ui three column equal height grid">
          {this.renderHogs()}
        </div>
      </div>
    )
  }
}

export default Home
