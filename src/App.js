import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Iyad Barakat';
    const loading = false;
    const showName = true;
    return (
      <div className='App'>
        {loading ? <h4>...is loading</h4> : <h1> Hello {showName && name} </h1>}
      </div>
    );
  }
}

export default App;
