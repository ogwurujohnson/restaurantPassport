import React, { Component } from 'react'
import { addRestaurant } from '../store/actions/restaurants';
import { connect } from 'react-redux';
import {baseUrl} from '../utils/url';

class newRestaurant extends Component {
  state = {
    name: '',
    description: '',
    city: '',
    image: "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseUrl}/restaurants`
    this.props.addRestaurant(url, this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" onChange={this.handleChange} placeholder="name"/>
          <input type="text" onChange={this.handleChange} name="description" placeholder="description"/>
          <input type="text" onChange={this.handleChange} name="city" placeholder="city"/>
          <input type="file" name="image" placeholder="image"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addRestaurant})(newRestaurant)