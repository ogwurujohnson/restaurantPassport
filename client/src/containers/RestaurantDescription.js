import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getRestaurant } from '../store/actions/restaurants';
import { baseUrl } from '../utils/url';

class RestaurantDescription extends Component {
  state = {
    restaurant: {}
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant  = async () => {
    const id = this.props.match.params.id;
    const url = `${baseUrl}/restaurants/${id}`;
    await this.props.getRestaurant(url).then(() => {
      this.setState({ restaurant: this.props.restaurants })
    })
  }
  render() {
    return (
      <div>
        {this.state.restaurant.name}
        <h1>hekkk</h1>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    restaurants: store.restaurants.restaurants
  }
}

export default connect(mapStateToProps, { getRestaurant })(RestaurantDescription)