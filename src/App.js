import React, { useState, useEffect } from "react";
import { Link, Route } from 'wouter';
import Header from './pages/Header';
import Home from './pages/Home'
import bg from './data/worldrepeatlight.jpg'; // Tell webpack this JS file uses this image
import { LanguageContextProvider } from './context/LanguageContext';

const App = () => {
  
const body = document.body
body.style.backgroundImage = `url(${bg})`

return (
  <div className="App">
    <section className="App-content">
      <LanguageContextProvider>
      <Route
          component={Header}
          path="/"
        ></Route>
        <Route
          component={Home}
          path="/"
        ></Route>
      </LanguageContextProvider>
    </section>

  </div>
)
}
export default App;