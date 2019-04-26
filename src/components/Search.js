import React from 'react'

class Search extends React.Component {

  render() {
    return (
      <form>
        <label>Sort By Grease
          <input name='grease' type="checkbox" onChange={this.props.handleChange} checked={this.props.grease} />
        </label>

        <label>Sort By Weight
          <input name='weight' type="checkbox" onChange={this.props.handleChange} checked={this.props.weight} />
        </label>

        <input name="name" onChange={this.props.handleChange} value={this.props.name}/>
      </form>
    )
  }
}

export default Search
