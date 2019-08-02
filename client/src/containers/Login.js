import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions/auth';
import {baseUrl} from '../utils/url';
import LoginForm from '../components/forms/LoginForm';
import styled from "styled-components";
import orderfood from "../assets/bike rider.png";

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (data) => {
    const url = `${baseUrl}/auth/login`
    this.props.login(url, data).then(()=>{
      this.props.history.push('/passport');
    });
  }

  render() {
    return (
      <FormPageWrapper>
        <LoginForm handleSubmit={this.handleSubmit} />
        <DetailsWrapper>
          <div className="intro">
            <h4>Registeration is fast, easy, and free.</h4>
            <p>Once you are registered you can: </p>
          </div>
          <div className="intro-image">
            <img src={orderfood} alt="orderfood" />
          </div>
          <div className="contact">
            <h4>Contact Customer Support</h4>
            <p>
              If you"re looking for more help or have a question to ask, please
            </p>
            <button>contact us</button>
          </div>
        </DetailsWrapper>
      </FormPageWrapper>
    )
  }
}

const mapStateToProps = store => {
  return {
    creating: store.auth.creating
  }
}

export default connect(mapStateToProps, {login})(Login)

const FormPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailsWrapper = styled.div`
  width: 30%;
  margin: 3.5rem 0rem;
  margin-right: 10em;
  .intro {
    padding: 2rem;
    border-bottom: 1px solid #25282b;
    margin-bottom: 1rem;
    h4 {
      font-size: 2rem;
      font-weight: 600;
      font-family: "Source Sans Pro", sans-serif;
      color: #25282b;
      margin-bottom: 0.7rem;
      line-height: 1.1;
    }

    p {
      color: #25282b;
    }
  }

  .intro-image {
    width: 100%;
    margin-bottom: 3rem;
    img {
      width: 100%;
    }
  }

  .contact {
    h4 {
      font-size: 2rem;
      font-weight: 600;
      font-family: "Source Sans Pro", sans-serif;
      color: #25282b;
      margin-bottom: 0.7rem;
      line-height: 1.1;
    }

    button {
      width: 30%;
      background-color: #f30;
      color: #fff;
      border: 1px solid #f30;
      padding: 1.2rem;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
