import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getPopularAndTrendingAnimes,
  resetPopularAndTrendingAnimes
} from '../actions/getPopularAndTrendingAnimes';

import { Grid, Divider } from 'semantic-ui-react';
import SampleList from './SampleList';

class Home extends Component {
  componentWillMount() {
    this.props.getPopularAndTrendingAnimes();
  }
  componentWillUnmount() {
    this.props.resetPopularAndTrendingAnimes();
  }

  render() {
    const { sampleAnimes, auth } = this.props;
    return (
      <Grid className="home">
        <Grid.Row className="home-section home-section-primary">
          <Grid.Column>
            <div className="home-section-header">
              <h1>VNIME</h1>
              <p>
                Watch your favourite anime all day, everyday, every week, every
                June.
              </p>
              {auth && auth.loggedIn ? (
                <Link to="/dashboard" className="btn-clear">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login" className="btn-clear">
                  Login | SignUp
                </Link>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className="home-section home-section-secondary">
          {sampleAnimes !== null ? (
            <div>
              <SampleList text="Popular Today" animes={sampleAnimes.popular} />
            </div>
          ) : (
            ''
          )}
          <Divider />
          {sampleAnimes !== null ? (
            <div>
              <SampleList
                text="Trending Today"
                animes={sampleAnimes.trending}
              />
            </div>
          ) : (
            ''
          )}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = ({ sampleAnimes, auth }) => ({ sampleAnimes, auth });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getPopularAndTrendingAnimes, resetPopularAndTrendingAnimes },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
