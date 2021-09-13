import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Main from './main/App'
import Login from './Login/App'
import OfflineWeb from './Offline/App'
import {Online, Offline} from 'react-detect-offline'
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App()
{
  <Router>
    <Online>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/Login" component={Login}></Route>
    </Online>
    <Offline>
      <Route exact path="/" component={OfflineWeb}></Route>
    </Offline>
  </Router>
}

export default App;