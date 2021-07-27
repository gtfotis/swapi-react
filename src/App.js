import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  };

  render() {
    return (
      <div className='App'>
        <Router>
          <CharacterList/>
        </Router>
      </div>
    );
  }
}

export default App;
