import React, { Component } from 'react';
import RoboFriends from './RoboFriends';

class BigFile extends Component {
  constructor() {
    super();
    this.state = {
      showing: false,
    }
  }
  render() {
    const { showing } = this.state;
    return (
      <div>
      <button onClick={() => this.setState({showing: !showing})}>Toggle</button>
        {showing
          ? <RoboFriends />
          : null}
      </div>
    )
  }
}
export default BigFile;