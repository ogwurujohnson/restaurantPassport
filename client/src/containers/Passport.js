import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getCityRestaurant } from '../store/actions/restaurants';
import { baseUrl } from '../utils/url';
import SingleRestaurant from '../components/SingleRestaurant';
import BlackList from './BlackList';
import Visits from './Visits';

class Passport extends Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant  = async () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const city = user.city;
    const  userId = user.id;
    const url = `${baseUrl}/restaurants/passport?city=${city}&&user=${userId}`;
    await this.props.getCityRestaurant(url).then(() => {
      this.setState({ restaurants: this.props.restaurants })
    });
  }
  
  render() {
    return (
      <div>
        {this.state.restaurants.length !==0 ? this.state.restaurants.map((restaurant) => {
          return <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
        }) : <p>Nothing here</p>}
        <BlackList />
        <Visits />
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