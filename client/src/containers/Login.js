import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';
import {baseUrl} from '../utils/url';
class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const url = `${baseUrl}/auth/login`
    this.props.login(url, this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.email} onChange={this.handleChange}  name="email" placeholder="Email"  />
          <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="*****"  />
          <button>Login</button>
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

export default connect(mapStateToProps, {login})(Login)