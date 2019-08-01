import React, { Component } from "react";
import { connect } from "react-redux";
import { getRestaurant } from "../store/actions/restaurants";
import { baseUrl } from "../utils/url";
import detailimg from "../assets/detail-banner-1.jpg";
import styled from "styled-components";
import intro from "../assets/gallery-1.jpg";

class RestaurantDescription extends Component {
  state = {
    restaurant: {}
  };

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant = async () => {
    const id = this.props.match.params.id;
    const url = `${baseUrl}/restaurants/${id}`;
    await this.props.getRestaurant(url).then(() => {
      this.setState({ restaurant: this.props.restaurants });
    });
  };
  render() {
    return (
      <RestaurantDescriptionWrapper>
        {/* {this.state.restaurant.name}
        <h1>hekkk</h1> */}
        <HeaderImage>
          <div className="tags">
            <p className="rest">Restaurant</p>
            <p className="verif">Verified</p>
          </div>
          <div className="shopdetails">
            <h1>Shop Name</h1>
            <p>Restaurant City Location: </p>
            <p>Average Rating: 4.9</p>
          </div>
          <div className="actions">
            <button>Bookmark</button>
            <button>Give Heart</button>
          </div>
        </HeaderImage>
        <ContentWrapper>
          <InformationSection>
            <LeftSection>
              <div className="image">
                <img src={intro} alt="intro" />
              </div>
              <p>All Reviews</p>
              <div className="reviews">
                <div className="notes">
                  <div className="review-item">
                    <p>
                      Quisque aliquet ornare nunc in viverra. Nullam ornare
                      molestie ligula in luctus. Suspendisse ac cursus elit. In
                      congue mattis felis, non hendrerit orci dictum id.
                    </p>
                    <p>Rating: 4.0</p>
                  </div>
                  <div className="review-item">
                    <p>
                      Quisque aliquet ornare nunc in viverra. Nullam ornare
                      molestie ligula in luctus. Suspendisse ac cursus elit. In
                      congue mattis felis, non hendrerit orci dictum id.
                    </p>
                    <p>Rating: 4.0</p>
                  </div>
                  <div className="review-item">
                    <p>
                      Quisque aliquet ornare nunc in viverra. Nullam ornare
                      molestie ligula in luctus. Suspendisse ac cursus elit. In
                      congue mattis felis, non hendrerit orci dictum id.
                    </p>
                    <p>Rating: 4.0</p>
                  </div>
                </div>
              </div>
            </LeftSection>
            <RightSection>
              <div className="actions">
                <div className="rating-info">
                  <p>
                    <span>213</span> people love it{" "}
                  </p>
                  <p>
                    <span>4.3 / 5</span>from 316 reviews
                  </p>
                </div>
                <div className="divider" />
                <div className="action-buttons">
                  <button>Book Now</button>
                  <button>Blacklist</button>
                  <button>Mark as Visited</button>
                </div>
              </div>
              <div className="about-section">
                <div className="title">
                  <h4>About Restaurant</h4>
                </div>
                <div className="description">
                  <p>
                    Vestibulum a lectus ullamcorper, dapibus ante id, sagittis
                    libero. In tincidunt nisi venenatis, ornare eros at,
                    hendrerit sem. Nunc metus purus, porta a dignissim vel,
                    vulputate sed odio. Aenean est nisi, pulvinar eget velit
                    quis, placerat hendrerit arcu. Vestibulum non dictum nibh.
                    In congue mattis felis, non hendrerit orci dictum id. Etiam
                    consequat nulla vitae tempus interdum.Nam gravida convallis
                    lacus, at dignissim urna pulvinar sed. Cras ac mi odio.
                    Aliquam erat volutpat. Cras euismod facilisis ligula in
                    tristique. Proin et eleifend lacus, vitae dictum orci
                  </p>
                </div>
              </div>
            </RightSection>
          </InformationSection>
          <ReviewSection>
            <h4>Submit a Review</h4>
            <div className="divider" />
            <FormWrapper>
              <div>
                <label>Rating</label>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div>
                <label>Review Description</label>
                <textarea />
              </div>
              <button>Submit</button>
            </FormWrapper>
          </ReviewSection>
        </ContentWrapper>
      </RestaurantDescriptionWrapper>
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
)(RestaurantDescription);

const RestaurantDescriptionWrapper = styled.div``;

const HeaderImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${detailimg});
  background-position: center center;
  background-size: 100% auto;
  height: 500px;
  padding: 4rem;

  .tags {
    display: flex;
    margin-left: 7rem;
    width: 50%;
    p {
      margin-top: 4rem;
      margin-bottom: 4rem;
      padding: 0.3rem;
      width: 20%;
      margin-right: 1.5rem;
      text-align: center;
      font-family: "Source Sans Pro", sans-serif;
      /* color: #25282b; */
      color: white;
      font-weight: 600;
    }
    .rest {
      background: #c6af5c;
      border: 1px solid #c6af5c;
    }
    .verif {
      background: #8dc63f;
      border: 1px solid #8dc63f;
    }
  }

  .shopdetails {
    margin-left: 9rem;
    width: 50%;
    h1 {
      font-family: "Source Sans Pro", sans-serif;
      color: #fff;
      font-size: 3.6rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.9rem;
      color: #ffe;
      font-family: "Source Sans Pro", sans-serif;
    }
  }

  .actions {
    margin-left: 7rem;
    button {
      width: 10%;
      margin-top: 2rem;
      background: transparent;
      padding: 1.3rem;
      color: white;
      font-size: 1.5em;
      font-weight: 600;
      font-family: "Source Sans Pro", sans-serif;
      margin-right: 2rem;
      cursor: pointer;

      &:hover {
        color: #fafaf8;
        background: #f30;
        border: 2px solid #f30;
      }
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InformationSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 6rem;
`;

const LeftSection = styled.div`
  margin-bottom: 3rem;
  flex: 1.5;
  width: 50%;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  .image {
    width: 80%;
    margin-bottom: 5rem;
    img {
      width: 100%;
    }
  }

  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3em;
    color: #25282b;
  }

  .reviews {
    width: 80%;
    margin-top: 2rem;
    border-top: 1px solid #eaebeb;

    .notes {
      .review-item {
        margin-top: 3rem;
        background: #ffff;
        border-top: 1px solid #eaebeb;
        height: 100px;
        padding: 1.2rem;
        display: flex;
        display: flex;
        flex-direction: column;

        p {
          font-size: 1.5rem;
          color: rgba(54, 54, 54, 0.6);
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const RightSection = styled.div`
  flex: 1;

  .actions {
    background: #ffff;
    height: 250px;
    max-height: 250px;
    width: 85%;
    padding: 1.5rem;
    margin-bottom: 2rem;

    .rating-info {
      margin-top: 2rem;
      margin-bottom: 2rem;
      p {
        span {
          color: #25282b;
          font-size: 2.6rem;
          margin-right: 0.5rem;
        }
        color: rgba(54, 54, 54, 0.6);
        font-size: 1.4rem;
        font-weight: 500;
      }
    }

    .divider {
      border: 1px solid #eaebeb;
    }

    .action-buttons {
      display: flex;
      margin-top: 2rem;
      button {
        margin-top: 2rem;
        background: #f30;
        border: 1px solid #f30;
        border-radius: 2px;
        padding: 1.3rem;
        color: white;
        font-size: 1.5em;
        font-weight: 600;
        font-family: "Source Sans Pro", sans-serif;
        margin-right: 2rem;
        cursor: pointer;

        &:hover {
          background: transparent;
          color: #f30;
        }
      }
    }
  }

  .about-section {
    background: #ffff;
    width: 85%;
    padding: 1.5rem;
    margin-bottom: 2rem;
    .title {
      margin-top: 2rem;
      h4 {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 2.5em;
        font-weight: 550;
        color: #25282b;
      }
    }

    .description {
      margin-top: 1.3rem;
      p {
        color: rgba(54, 54, 54, 0.6);
        font-size: 1.3rem;
        line-height: 2.2;
      }
    }
  }
`;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  margin-right: 5rem;
  width: 90%;

  h4 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 2.5em;
    font-weight: 550;
    color: #25282b;
  }

  .divider {
    border: 1px solid #eaebeb;
    margin-bottom: 2rem;
  }
`;

const FormWrapper = styled.form`
  background: #ffff;
  padding: 2rem;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin-bottom: 1rem;
      color: rgba(54, 54, 54, 0.6);
      font-size: 1.5rem;
      font-weight: bold;
    }
    textarea {
      width: 60%;
      height: 200px;
      border: 1px solid #eaebeb;
      resize: none;
      padding: 1.5rem;
      font-size: 1.3rem;
    }

    select {
      padding: 2rem;
      width: 20%;
      margin-bottom: 3rem;
    }
  }

  button {
    margin-top: 2rem;
    background: #f30;
    border: 1px solid #f30;
    border-radius: 2px;
    padding: 1.3rem;
    color: white;
    font-size: 1.5em;
    font-weight: 600;
    font-family: "Source Sans Pro", sans-serif;
    margin-right: 2rem;
    cursor: pointer;
    width: 30%;

    &:hover {
      background: transparent;
      color: #f30;
    }
  }
`;
