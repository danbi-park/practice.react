import './App.css';
import React, { Component } from 'react';
import Subject from './component/Subject';
import Nav from './component/Nav';
import Content from './component/Content';


class App extends Component {

  state = {
    count : 0
  }

  countUp = () => {
    this.setState({
      count : this.state.count + 1
    });
  }

  countDown = () => {
    this.setState({
      count : this.state.count - 1
    });
  }

  render() {
    return (
      <div className='App'>
        <Subject title="WEB" sub="world wide web"></Subject>
        <Nav></Nav>
        <Content title="HTML" desc="Hypertext Markup Language."></Content>
        <div>{this.state.count}</div>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDowzn}>-</button>

      </div>
    );
  }
}


export default App;
