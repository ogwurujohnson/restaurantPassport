import React, { Component } from "react";
import styled from "styled-components";

export default class RegisterForm extends Component {
  state = {
    name: "",
    description: "",
    city: "",
    image:
      "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.handleSubmit(this.state);
    await this.setState({
      name: "",
      description: "",
      city: "",
      image:
        "https://res.cloudinary.com/ogwurujohnson/image/upload/v1561643304/bjc5fbdksvte293pnhdl.jpg"
    });
  };

  render() {
    return (
      <div>
        <FormWrapper onSubmit={this.handleSubmit}>
          <div className="inputs">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                id="name"
                placeholder="Restaurant Name"
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

            <div className="divimage">
              <label htmlFor="image">image</label>
              <input
                type="file"
                name="image"
                id="image"
              />
            </div>

            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                value={this.state.description}
                onChange={this.handleChange}
                name="description"
                id="description"
                placeholder="Describe the Restaurant, specifying the opening and closing time"
              />
              
            </div>
          </div>

          <button>Creat Restaurant</button>
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
  width: 70%;
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
        padding: 1rem 0.75rem;
        font-size: 1.2rem;
        line-height: 1.25;
        color: #55595c;
        background-color: #fff;
        background-image: none;
      }

      textarea {
        border: 1px solid #eaebeb;
        border-radius: 2px;
        color: black;
        width: 100%;
        display: block;
        width: 100%;
        height: 200px;
        padding: 0.9rem 0.75rem;
        font-size: 1.2rem;
        line-height: 1.25;
        color: #55595c;
        background-color: #fff;
        background-image: none;
        resize: none;
      }
    }

    .divimage {
      width: 100%;
    }

    .description {
      width: 100%;
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
