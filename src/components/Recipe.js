import React, {Component} from "react";
import styled from "styled-components";

const RecipeCard = styled.div`
  color: white;
  width: 31%;
  min-width: 240px;
  margin: 1%;
  border: 1px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #cd907a;

  @media (max-width: 770px) {
    margin-bottom: 15px;
    width: 70%;
  }
`;

const RecipeCardImg = styled.img`
  width: 100%;
`;

const RecipeCardContent = styled.div`
  padding: 15px;

  > h3 {
    margin: 0;
  }
`;

// End CSS

class Recipe extends Component {
  render() {
    const {title, img, instructions} = this.props;
      const ingredients = this.props.ingredients.map((ing, index) => (
        <li key={index}>{ing}</li>
      ));
    return (
      <RecipeCard>
        <RecipeCardImg src={img} alt=""></RecipeCardImg>
        <RecipeCardContent>
          <h3>
            {title}
          </h3>
          <h4>Ingredients:</h4>
          <h4>
            {ingredients}
          </h4>
          <h4>Instructions:</h4>
          <p>
            {instructions}
          </p>
        </RecipeCardContent>
      </RecipeCard>
    );
  }
}

export default Recipe;
