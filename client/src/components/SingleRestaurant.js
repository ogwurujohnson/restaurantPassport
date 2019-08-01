import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import foodimg from "../assets/food1.jpg";

let avg;
export default function SingleRestaurant(props) {
  avg = props.restaurant.avgRating ? props.restaurant.avgRating.toFixed(1) : 0
  return (
    <RestaurantWrapper>
      <Link to={`/restaurants/${props.restaurant.id}`}><div className="image">
        <img src={props.restaurant.image} alt="foodimg" />
      </div> </Link>
      <div className="restinfo">
        <h4>{props.restaurant.name}</h4>
        <div>
          <p>Reviews: {props.restaurant.no_of_reviews}</p>
          
          <p>Avg Rating: {props.restaurant.avgRating === null ? 0 : avg}</p>
        </div>
        <button>Reserve</button>
      </div>
      <div className="summary">
        <p>{props.restaurant.name}</p>
        <p>{props.restaurant.city}</p>
      </div>
      {/* <Link to={`/restaurants/${props.restaurant.id}`}><h1>Name: {props.restaurant.name}</h1></Link>
      <p>Description: {props.restaurant.description}</p> */}
    </RestaurantWrapper>
  );
}

const RestaurantWrapper = styled.div`
  border: 1px solid #eaebeb;
  border-radius: 2px;
  background: #fafaf8;
  margin-bottom: 2rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  width: 30%;

  .image {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .restinfo {
    padding: 1.3rem;
    margin-top: 1.3rem;
    border-bottom: 1px solid #eaebeb;
    h4 {
      color: #25282b;
      font-size: 2.3rem;
      font-weight: 600;
      margin-bottom: 2rem;
      font-family: "Source Sans Pro", sans-serif;
    }

    div {
      display: flex;
      margin-top: 2rem;
      p {
        color: #4d4f56;
        font-family: "Source Sans Pro", sans-serif;
        margin-right: 3rem;
      }
    }
    button {
      margin-top: 2rem;
      display: inline-block;
      font-weight: 400;
      line-height: 1.25;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border-radius: 0.25rem;
      border: 2px dashed #f30;
      color: #f30;
      padding: 1rem;
      width: 50%;
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Source Sans Pro", sans-serif;
      cursor: pointer;

      &:hover {
        color: #fafaf8;
        background: #f30;
        border: 2px solid #f30;
      }
    }
  }
  .summary {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    p {
      color: #4d4f56;
      font-size: 1.5rem;
      font-weight: 600;
      font-family: "Source Sans Pro", sans-serif;
      margin-right: 3.5rem;
    }
  }
`;
