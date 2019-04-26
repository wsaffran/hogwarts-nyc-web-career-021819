import React from 'react'

class Back extends React.Component {

  nameImages = () => {
    return this.props.hog.name.toLowerCase().split(" ").join("_")
  }

  render() {
    return (
      <div className="column">
        <div style={{ height: '100%' }} className="ui fluid card" onClick={this.props.handleClick} >
          <div className="content">
            <div className="header"><h2>{this.props.hog.name}</h2></div>
          </div>
          <div className="content">
            <div className="ui small feed">
              <div className="event">
                <div className="content">
                  <div className="summary">
                     <p>Specialty: {this.props.hog.specialty}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="event">
                <div className="content">
                  <div className="summary">
                     <p>Greased? {this.props.hog.greased === true ? "Greased" : "Un-Greased"}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="event">
                <div className="content">
                  <div className="summary">
                     <p>Ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="event">
                <div className="content">
                  <div className="summary">
                     <p>Highest Medal: {this.props.hog['highest medal achieved']}</p>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Back
