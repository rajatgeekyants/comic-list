import React, {Component} from 'react';
import './style.css';
import Comics from '../components/Comics';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Comics />
      </div>
    );
  }
}

export default App;
