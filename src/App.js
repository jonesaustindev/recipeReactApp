import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import RecipeInput from "./components/RecipeInput";
import './App.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
          {
            id: 1,
            title: "Pasta",
            ingredients: ["Flour", "Water"],
            img: "pasta.jpg",
            instructions: "Mix up the flour and make your pasta!"
          },
          {
            id: 2,
            title: "Quesadilla",
            ingredients: ["Tortilla", "Cheese", "Chicken(Optional)"],
            img: "quesadilla.jpeg",
            instructions: "The fast way! Grab a tortilla and put some cheese on it. Add cooked chicken if wanted and microwave until cheese is melted. Fold tortilla in half, and done!"
          },
          {
            id: 3,
            title: "Cereal",
            ingredients: ["Milk", "Cereal"],
            img: "cereal.jpeg",
            instructions: "Get your milk. Pour the cereal into the bowl FIRST. Then pour milk. Enjoy!"
          }
      ],
      nextRecipeId: 4,
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
