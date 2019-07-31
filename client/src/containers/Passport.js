import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCityRestaurant } from '../store/actions/restaurants';
import { baseUrl } from '../utils/url';
import SingleRestaurant from '../components/SingleRestaurant';

class Passport extends Component {
  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant  = () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const city = user.city;
    const  userId = user.id;
    const url = `${baseUrl}/restaurants/passport?city=${city}&&user=${userId}`;
    this.props.getCityRestaurant(url);
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

export default connect(mapStateToProps, { getCityRestaurant })(Passport)