import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getRestaurant } from '../store/actions/restaurants';
import { baseUrl } from '../utils/url';
import SingleRestaurant from '../components/SingleRestaurant';

class Restaurants extends Component {
  state = {
    restaurants: []
  }
  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant  = async () => {
    const url = `${baseUrl}/restaurants`;
    await this.props.getRestaurant(url).then(() => {
      this.setState({ restaurants: this.props.restaurants });
    })
  }
  
  render() {
    return (
      <div>
        {this.state.restaurants.length !==0 ? this.state.restaurants.map((restaurant) => {
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