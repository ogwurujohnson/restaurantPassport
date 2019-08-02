import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityRestaurant } from "../store/actions/restaurants";
import { baseUrl } from "../utils/url";
import SingleRestaurant from "../components/SingleRestaurant";
import headerimg from "../assets/profile-banner.jpg";
import styled from "styled-components";
import Visits from './Visits';
import BlackList from './BlackList';

class Passport extends Component {
  state = {
    restaurants: [],
  };
  componentWillMount() {
    this.getRestaurant();
  }

  getRestaurant = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = `${baseUrl}/restaurants/passport?city=${user.city}&&user=${user.id}`;
    await this.props.getCityRestaurant(url).then(() => {
      this.setState({ restaurants: this.props.restaurants });
    });
  };

  getBlacklists = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const url = `${baseUrl}/blacklists/${user.id}`;
    await this.props.getBlacklists(url).then(() => {
      this.setState({ restaurants: this.props.restaurants });
    });
  }

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
            <div className="title ">
              <p>Blacklist</p>
            </div>
            <div className="search aux-title">
              <div>
                <BlackList />
              </div>
            </div>
            <div className="title">
              <p>Visits</p>
            </div>
            <div className="search aux-title">
              <div>
                <Visits />
              </div>
            </div>
          </FilterWrapper>
          <Gallery>
            {this.state.restaurants.length !== 0 ? (
              this.state.restaurants.map(restaurant => {
                return (
                  <SingleRestaurant
                    key={restaurant.id}
                    restaurant={restaurant}
                  />
                );
              })
            ) : (
              <p>Nothing here</p>
            )}
          </Gallery>
        </PageContent>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    restaurants: store.restaurants.restaurants,
    blacklists: store.blacklist.blacklists,
    visits: store.visits.visits
  };
};

export default connect(
  mapStateToProps,
  { getCityRestaurant }
)(Passport);

const Gallery = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.0rem;
  width: 50%;
`;

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
  flex: .3;
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

  .aux-title {
    margin-bottom: 3.0rem;
    padding: 1.0rem;
    p {
      color: #25282b;
      font-size: 1.4rem;
      font-weight: 300;
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
