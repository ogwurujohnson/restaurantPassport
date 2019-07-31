import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../store/actions/auth';
import {baseUrl} from '../utils/url';
class Register extends Component {
  state = { 
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    city: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseUrl}/auth/register`
    this.props.register(url, this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" placeholder="Firstname"  />
          <input type="text" value={this.state.lastname} onChange={this.handleChange}  name="lastname" placeholder="Lastname"  />
          <input type="text" value={this.state.email} onChange={this.handleChange}  name="email" placeholder="Email"  />
          <input type="text" value={this.state.city} onChange={this.handleChange}  name="city" placeholder="City"  />
          <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="*****"  />
          <button>Sign Up</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    creating: store.auth.creating
  }
}

export default connect(mapStateToProps, {register})(Register)