import React from 'react';
import {Link} from 'react-router-dom';

export default function SingleVisit(props) {
  return (
    <div>
      <h1>Visit</h1>
     <Link to={`/restaurants/${props.visit.id}`}><h3>{props.visit.name}</h3></Link>
    </div>
  )
}
