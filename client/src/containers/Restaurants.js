import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRestaurant } from '../store/actions/restaurants';
import { baseUrl } from '../utils/url';
import SingleRestaurant from '../components/SingleRestaurant';

class Restaurants extends Component {
  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant  = () => {
    const url = `${baseUrl}/restaurants`;
    this.props.getRestaurant(url)
  }
  
  render() {
    return (
      <div>
        {this.props.restaurants.length !==0 ? this.props.restaurants.map((restaurant) => {
          return <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
        }) : <p>Nothing here</p>}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    restaurants: store.restaurants.restaurants
  }
}

export default connect(mapStateToProps, { getRestaurant })(Restaurants)