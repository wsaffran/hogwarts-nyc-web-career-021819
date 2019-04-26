import React from 'react'
import Front from './Front.js'
import Back from './Back.js'

class Tile extends React.Component {

  state = {
    toggle: true,
  }

  nameImages = () => {
    return this.props.hog.name.toLowerCase().split(" ").join("_")
  }

  handleClick = (event) => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }

  render() {
    return (
      this.state.toggle === true ? <Front hog={this.props.hog} handleClick={this.handleClick} /> : <Back hog={this.props.hog} handleClick={this.handleClick} />
    )
  }
}

export default Tile
