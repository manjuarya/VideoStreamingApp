// React core
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Components
import HomePage from './components/templates/HomePage';
import VideoPage from './components/templates/VideoPage';

// Style
import './style/style.css';

function App() {
  // Render
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video/:id" component={VideoPage} />
        </Switch>
      </main>
    </Router>
  )
}

export default App;