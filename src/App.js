import React, { Component } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header  />
			  <Tasks  />
      </div>
    );
  }
}

export default App;
