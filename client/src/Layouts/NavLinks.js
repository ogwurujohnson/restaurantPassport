import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavLinks() {
  return (
    <NavLinkWrapper>
      <a href="#about" className="link">
        About
      </a>
      <Link to="/login" className="link">
        Sign in<i className="fas fa-user-circle" />
      </Link>
      <Link to="/signup" className="link">
        Sign up<i className="fas fa-user-circle" />
      </Link>
    </NavLinkWrapper>
  );
}

const NavLinkWrapper = styled.div`
  a {
    margin-right: 2.0rem;
    font-size: 1.6rem;
  }
`;
