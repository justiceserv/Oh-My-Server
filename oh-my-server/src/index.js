import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './main/App'
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App()
{
  <Router>
    <Route exact path="/" component={Main}></Route>
  </Router>
}

export default App;