import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  background-color: #333;
  overflow: hidden;
  margin-bottom: 20px;

  > h4 {
    float: left;
    display: block;
    color: white;
    text-align: center;
    font-size: 22px;
    padding: 12px 17px;
    margin: 0;
  }

  > a {
    float: right;
    display: block;
    color: white;
    text-align: center;
    padding: 15px 17px;
    font-size: 18px;
    text-decoration: none;
  }

  > a:hover {
    background-color: #DDD;
    color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h4>Recipe App</h4>
      <a href="">Contact</a>
      <a href="">Home</a>
      <a href="">Add Recipe</a>
    </Nav>
  );
}

export default Navbar;
