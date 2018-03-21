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
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={r.id} {...r} />
    ));

    return (
      <RecipeListDisplay>
        {recipes}
      </RecipeListDisplay>
    );
  }
}

export default RecipeList;
