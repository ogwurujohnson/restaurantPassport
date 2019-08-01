import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import img from "../assets/menu-bg.jpg";
import logo from "../assets/food-picky-logo.png";
import NavLinks from "./NavLinks";

export default function Header(props) {
  return (
    <header>
      <NavWrapper>
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <span>
          <i className="fas fa-bars sidemenu-bar" />
        </span>
        <NavLinks />
      </NavWrapper>
      {console.log(props)}
      
    </header>
  );
}



const NavWrapper = styled.nav`
  z-index: 99;
  background: url(${img});
  width: 100%;
  margin-top: 0;
  padding: 2rem;
  font-weight: bold;

  display: flex;
  justify-content: space-between;
`;
