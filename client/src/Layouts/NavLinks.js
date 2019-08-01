import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const token = localStorage.getItem('token');
export default function NavLinks() {
  return (
    <NavLinkWrapper>
      <Link to="/login" className="link">
        Sign in<i className="fas fa-user-circle" />
      </Link>
      <Link to="/signup" className="link">
        Sign up<i className="fas fa-user-circle" />
      </Link>
      <Link to="/restaurants/new" className="link">
        Submit Restaurant<i className="fas fa-user-circle" />
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
