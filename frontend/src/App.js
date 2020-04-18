import React from 'react';
import './App.css';
import Player from './components/player';
import Menu from './components/Menu';
import Home from './Pages/Home';
import store from './Store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Provider store={store}>
      <BrowserRouter>
        <Menu/>
        <Home/>
        <Player/>
        </BrowserRouter>
      </Provider>


    </div>
  );
}

export default App;
