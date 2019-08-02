import React, { Component } from "react";
import styled from "styled-components";

export default class RegisterForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    retypepassword: "",
    city: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.handleSubmit(this.state);
    await this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      retypepassword: "",
      city: ""
    });
  };

  render() {
    return (
      <div>
        <FormWrapper onSubmit={this.handleSubmit}>
          <div className="inputs">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
                name="firstname"
                id="firstname"
                placeholder="Firstname"
              />
            </div>
            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange}
                name="lastname"
                id="lastname"
                placeholder="Lastname"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleChange}
                name="city"
                id="city"
                placeholder="City"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                placeholder="*****"
              />
            </div>
            <div>
              <label htmlFor="retypepassword">Repeat Password</label>
              <input
                type="password"
                value={this.state.retypepassword}
                onChange={this.handleChange}
                id="retypepassword"
                name="retypepassword"
                placeholder="*****"
              />
            </div>
          </div>

          <button>Sign Up</button>
        </FormWrapper>
      </div>
    );
  }
}

const FormWrapper = styled.form`
  background: rgba(252, 251, 249, 0.68);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 4rem 0rem;
  margin-left: 10em;
  width: 60%;
  height: 90%;
  border: 1px solid #eaebeb;
  border-radius: 2px;

  .inputs {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto;
    div {
      display: flex;
      flex-direction: column;
      margin: 2rem;
      width: 40%;
      margin-bottom: 3rem;

      label {
        margin-bottom: 1rem;
        color: #4d4f56;
        font-size: 1.2rem;
        font-weight: bold;
      }

      input {
        border: 1px solid #eaebeb;
        border-radius: 2px;
        color: black;
        width: 100%;
        display: block;
        width: 100%;
        padding: 0.9rem 0.75rem;
        font-size: 1.2rem;
        line-height: 1.25;
        color: #55595c;
        background-color: #fff;
        background-image: none;
      }
    }
  }

  button {
    width: 50%;
    margin-left: 2rem;
    background-color: #f30;
    color: #fff;
    border: 1px solid #f30;
    padding: 1.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 6rem;
    cursor: pointer;
  }
`;
