import React from 'react';
import './App.css';
import Player from './components/player';
import Menu from './components/Menu';
import Home from './Pages/Home';
import {store ,persistor}from './Store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return (
    <div className="App">

      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Menu/>
        <Home/>
        <Player/>
        </BrowserRouter>
        </PersistGate>
      </Provider>


    </div>
  );
}

export default App;
