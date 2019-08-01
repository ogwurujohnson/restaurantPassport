import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FaCheckCircle } from "react-icons/fa";

export default function SingleVisit(props) {
  return (
    <LinkWrapper>
     <Link to={`/restaurants/${props.visit.id}`}><h3 className="link">{props.visit.name}</h3></Link>
     <FaCheckCircle />
    </LinkWrapper>
  )
}


const LinkWrapper = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 2px solid #eaebeb;
svg {
  color: teal;
  align-self: center;
  font-size: 1.5rem;
  margin-top: 1.0rem;
}
.link {
  font-size: 1.2rem;
  color: #25282b;
  font-size: 1.4rem;
  font-weight: 300;

  margin-top: 1.0rem;
  border-bottom: 1px solid #eaebeb;
  margin-bottom: 1.0rem;
  
}
  
`;