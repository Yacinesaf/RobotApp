import React, { Component } from 'react';
import'./Header.css';
class SearchInput extends Component {
  render() {
    return (
      <div className="input">
        <input onChange={this.props.SearchInput} className="ba pa3 b--green bg-lightest-blue br2" type="search" placeholder="search Robots..." />
      </div>
    )
  }
}

export default SearchInput;