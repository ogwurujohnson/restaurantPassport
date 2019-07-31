import React from 'react';
import { Link } from 'react-router-dom';

export default function SingleBlacklist(props) {
  return (
    <div>
      <h1>Blacklist</h1>
     <Link to={`/restaurants/${props.blacklist.id}`}><h3>{props.blacklist.name}</h3></Link>
    </div>
  )
}
