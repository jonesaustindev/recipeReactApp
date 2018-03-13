import React, {Component} from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import styled from "styled-components";

// CSS
const RecipeListDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: "Pasta",
        ingredients: ["Flour", "Water"],
        img: "pasta.jpg",
        instructions: "Mix up the flour and make your pasta!"
      },
      {
        title: "Quesadilla",
        ingredients: ["Tortilla", "Cheese", "Chicken(Optional)"],
        img: "quesadilla.jpeg",
        instructions: "The fast way! Grab a tortilla and put some cheese on it. Add cooked chicken if wanted and microwave until cheese is melted. Fold tortilla in half, and done!"
      },
      {
        title: "Cereal",
        ingredients: ["Milk", "Cereal"],
        img: "cereal.jpeg",
        instructions: "Get your milk. Pour the cereal into the bowl FIRST. Then pour milk. Enjoy!"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index} {...r} />
    ));

    return (
      <RecipeListDisplay>
        {recipes}
      </RecipeListDisplay>
    );
  }
}

export default RecipeList;
