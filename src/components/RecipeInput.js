import React, {Component} from "react";
import styled from "styled-components";

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {}
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructions: "",
      ingredients: [""],
      image: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleNewIngredient(e) {
    const {ingredients} = this.state;
    this.setState({ingredients: [...ingredients, ""]});
  }

  handleChangeIng(e) {
    const index = Number(e.target.name.split("-")[1]);
    const ingredients = this.state.ingredients.map((ingredient, i) => (
      i === index ? e.target.value : ingredient
    ));
    this.setState({ingredients});
  }

  render() {
    const {title, instructions, ingredients, image} = this.state;
    const {onClose} = this.props;

    const inputs = ingredients.map((ingredient, index) => (
      <div className="recipe-from-line" key={`ingredient-${index}`}>
        <label>{index+1}.
          <input
            type="text"
            name={`ingredient-${index}`}
            value={ingredient}
            size={35}
            placeholder="Ingredient"
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));

    return (
      <div className="recipe-form-container">
        <form onSubmit={() => {}}>
          <button
            type="button"
            className="exit"
            onClick={onClose}>
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input">Title</label>
            <input
              id="recipe-title-input"
              key="title"
              name="title"
              type="text"
              value={title}
              size={40}
              onChange={this.handleChange}
            />
          </div>
          <label
            htmlFor="recipe-instructions-input"
            style={{marginTop: "5px"}}
            >
            Instructions
          </label>
          <textarea
            key="instructions"
            id="recipe-instructions-input"
            type="instructions"
            name="instructions"
            rows="8"
            cols="50"
            value={instructions}
            onChange={this.handleChange}
          />
          {inputs}
          <button
            type="button"
            onClick={this.handleNewIngredient}
            >
            +
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-image-input">Image URL</label>
            <input
              id="recipe-image-input"
              type="text"
              placeholder=""
              name="image"
              value={image}
              size={34}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              >
              SAVE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeInput;
