import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import './App.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
