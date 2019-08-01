import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../store/actions/restaurants";
import { baseUrl } from "../utils/url";
import SingleRestaurant from "../components/SingleRestaurant";
import headerimg from "../assets/profile-banner.jpg";
import styled from "styled-components";

class Restaurants extends Component {
  state = {
    restaurants: []
  };
  componentWillMount() {
    this.getRestaurant();
  }

  getRestaurant = async () => {
    const url = `${baseUrl}/restaurants`;
    await this.props.getRestaurant(url).then(() => {
      this.setState({ restaurants: this.props.restaurants });
    });
  };

  render() {
    return (
      <div>
        <HeaderImage>
          <img src={headerimg} alt="headerimg" />
        </HeaderImage>

        <PageContent>
          <FilterWrapper>
            <div className="title">
              <p>Choose Restaurant</p>
            </div>
            <form className="search">
              <input type="text" placeholder="Search favorite restaurant" />
            </form>
            <div className="popular-tags">
              <div className="title-pop">Popular Tags</div>
              <div className="items">
                <p>Pizza</p>
                <p>Pizza</p>
                <p>Pizza</p>
                <p>Pizza</p>
                <p>Pizza</p>
                <p>Pizza</p>
                <p>Pizza</p>

              </div>
            </div>
          </FilterWrapper>
        </PageContent>
        {/* {this.state.restaurants.length !==0 ? this.state.restaurants.map((restaurant) => {
          return <SingleRestaurant key={restaurant.id} restaurant={restaurant} />
        }) : <p>Nothing here</p>} */}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    restaurants: store.restaurants.restaurants
  };
};

export default connect(
  mapStateToProps,
  { getRestaurant }
)(Restaurants);

const HeaderImage = styled.div`
  img {
    width: 100%;
    height: 200px;
  }
`;

const PageContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 20%;

  .title {
    border: 1px solid #f30;
    padding: 1rem;
    background: #f30;
    width: 100%;
    p {
      font-weight: bold;
      font-family: "Source Sans Pro", sans-serif;
      line-height: 20px;
    }
  }

  .search {
    border: 1px solid #eaebeb;
    input {
      width: 100%;
      padding: 1rem;
      font-family: "Source Sans Pro", sans-serif;
      border: 1px solid #eaebeb;
    }
  }

  .popular-tags {
    margin-top: 2rem;
    border: 1px solid #eaebeb;
    .title-pop {
      border: 1px solid #eaebeb;
      padding: 1rem;

      font-size: 1.5rem;
      color: black;
      font-weight: 500;
    }

    .items {
      padding: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      background: #fafaf8;
      p {
        font-size: 14px;
        line-height: 26px;
        position: relative;
        height: 28px;
        margin: 0 10px 10px 0;
        padding: 0 20px 0 15px;
        -webkit-transition: all 0.4s;
        border: 1px solid #eaebeb;
        border-radius: 2px;
        background: #ffffff;
        color: inherit;
        font-weight: normal;
      }
    }
  }
`;
