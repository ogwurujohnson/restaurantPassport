import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import img from '../assets/menu-bg.jpg';

export default function Header() {
  return (
      <HeaderWrapper>
          <p className="logo">Restaurant Passport</p>
          <span><i className="fas fa-bars sidemenu-bar"></i></span>

          <div className="nav-links">
              <a href="#about" className="link">About</a>
              <Link to="/login" className="link">SignIn<i className="fas fa-user-circle"></i></Link>
          </div>
      </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: url(${img});
  width: 100%;
  margin-top: 0;
`;
