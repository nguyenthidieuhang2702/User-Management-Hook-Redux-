import React, { Component } from 'react';
import { withRouter } from '../../HOC/withRouter';

class About extends Component {
  render() {
    return (
      <div>
        <p>Keyword: {this.props.searchParams.get('keyword')}</p>
        <p>User Id: {this.props.searchParams.get('userId')}</p>
        <p>Movie Id: {this.props.searchParams.get('movieId')}</p>
      </div>
    );
  }
}

export default withRouter(About);
