import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getVisits } from '../store/actions/visits';
import { baseUrl } from '../utils/url';
import SingleVisit from '../components/SingleVisit';

class Visits extends Component {
  state = {
    visits: []
  }
  componentDidMount() {
    this.getVisits();
  }

  getVisits  = async () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const userId = user.id;
    const url = `${baseUrl}/visits/${userId}`;
    await this.props.getVisits(url).then(() => {
      this.setState({ visits: this.props.visits });
    })
  }
  
  render() {
    return (
      <div>
        {this.state.visits.length === 0 && <p>Nothing here</p> }
        {this.props.visits.length !==0 ? this.state.visits.map((visit) => {
          return <SingleVisit key={visit.id} visit={visit} />
        }) : <p>Loading...</p>}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    visits: store.visits.visits
  }
}

export default connect(mapStateToProps, { getVisits })(Visits)