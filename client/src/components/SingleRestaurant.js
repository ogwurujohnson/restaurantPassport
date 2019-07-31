import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleRestaurant(props) {
  return (
    <div>
      <Link to={`/restaurants/${props.restaurant.id}`}><h1>Name: {props.restaurant.name}</h1></Link>
      <p>Description: {props.restaurant.description}</p>
    </div>
  )
}
