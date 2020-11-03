import React, { Component } from 'react';
import { robots } from './robots';
import SearchInput from './searchInput';
import CardList from './CardList';
import Header from './Header'

class RoboFriends extends Component {
  constructor() {
    super();
    this.state = {
      Robots: robots,
      input: ''
    }
  }
  onChangeInput = (event) => {
    
    this.setState({
      input: event.target.value,
      Robots: robots.filter((robot) => {
        return robot.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
    })
  }

  render() {
      return(
      <div>
    <Header />
    <SearchInput SearchInput={this.onChangeInput} />
    <CardList robots={this.state.Robots} />
      </div >

    )
  }
}

export default RoboFriends;