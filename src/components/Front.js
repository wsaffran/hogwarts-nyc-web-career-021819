import React from 'react'

class Front extends React.Component {

  nameImages = () => {
    return this.props.hog.name.toLowerCase().split(" ").join("_")
  }

  render() {
    return (
      <div className="column">
        <div className="ui fluid card" onClick={this.props.handleClick}>
          <div className="image">
            <img src={require(`../hog-imgs/${this.nameImages()}.jpg`)}/>
          </div>
          <div className="content">
            <a className="header">{this.props.hog.name}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Front
