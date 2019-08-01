import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Postform from './components/Postform';
import Posts from './components/Posts';


function App() {
    return (
        <Provider store={store}>
          <div className="App">
               <Postform />
               <Posts />
           </div>
        </Provider>
  );
}

export default App;
