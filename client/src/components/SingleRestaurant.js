import React from 'react'

export default function SingleRestaurant(props) {
  return (
    <div>
      <h1>Name: {props.restaurant.name}</h1>
      <p>Description: {props.restaurant.description}</p>
    </div>
  )
}
