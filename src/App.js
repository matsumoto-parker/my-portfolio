import React from 'react';
import Header from './components/Header';
import './App.css';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
