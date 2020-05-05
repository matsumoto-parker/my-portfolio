import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar className="header" position="static">
          <h1 className="header-title">Matsumoto portfolio</h1>
        </AppBar>
      </div>
    );
  }
}

export default App;
