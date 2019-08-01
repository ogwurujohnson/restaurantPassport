import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBlacklists } from '../store/actions/blacklist';
import { baseUrl } from '../utils/url';
import SingleBlacklist from '../components/SingleBlacklist';

class BlackList extends Component {
  state = {
    blacklists: []
  }
  componentDidMount() {
    this.getBlacklist();
  }

  getBlacklist  = async () => {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);
    const userId = user.id;
    const url = `${baseUrl}/blacklists/${userId}`;
    await this.props.getBlacklists(url).then(() => {
      this.setState({ blacklists: this.props.blacklists });
    })
  }
  
  render() {
    return (
      <div>
        {this.state.blacklists.length === 0 && <p>Nothing here</p> }
        {this.state.blacklists.length !==0 ? this.state.blacklists.map((blacklist) => {
          return <SingleBlacklist key={blacklist.id} blacklist={blacklist} />
        }) : <p>Loading...</p>}
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    blacklists: store.blacklist.blacklists
  }
}

export default connect(mapStateToProps, { getBlacklists })(BlackList)