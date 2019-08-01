import React, { Component } from 'react'
import styled from 'styled-components';
import headerImage from "../assets/image01.jpg";

export default class LandingPage extends Component {
  render() {
    return (
        <HeaderImageWrapper>
        <h3 className="intro">
          Order Delivery, Review and checkout Restaurants in your Area
        </h3>
        <p>Find restaurants, specials, and coupons for free</p>
        <FormWrapper>
          <input type="text" />
          <button>Search Restaurants</button>
        </FormWrapper>
      </HeaderImageWrapper>
    )
  }
}


const FormWrapper = styled.form`
  width: 50%;
  margin: 2.0rem auto;
  input {
    padding: 1.0rem;
    height: 50px;
    border: none;
    color: grey;
    margin-right: 1.0rem;
    width: 60%;
    font-size: 1.6rem;
    font-weight: 400;
  }
  button {
    padding: .75rem 1.5rem;
    background-color: #F30;
    color: white;
    border: 1px solid #F30;
    font-size: 1.6rem;
    display: inline-block;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 2px;
    height: 50px;
    vertical-align: top;
  }
`;

const HeaderImageWrapper = styled.div`
  background: url(${headerImage}) center center / cover no-repeat;
  min-height: 300px;
  position: relative;

  padding: 1.5rem;
  text-align: center;

  .intro {
    color: white;
    width: 70%;
    font-weight: 700;
    font-family: "Give You Glory", cursive;
    margin: 2rem auto;
    line-height: 2;
    font-size: 4rem;
  }

  p {
    color: white;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 2rem;
  }
`;