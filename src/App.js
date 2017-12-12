import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="agussis">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
