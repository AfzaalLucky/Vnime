import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAnime, resetAnime } from '../actions/getAnime';
import { resetEpisodeOptions } from '../actions/getEpisodeOptions';
import { resetVideo } from '../actions/selectVideo';

import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react';
import Hero from './Hero';
import SideContent from './SideContent';
import EpisodeList from './EpisodeList';
import VideoPlayer from './VideoPlayer';
import VideoBar from './VideoBar';

class Watch extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    this.props.getAnime(pathname.replace('/watch/', ''));
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.props.resetVideo();
      this.props.resetAnime();
      this.props.resetEpisodeOptions();
      const { pathname } = this.props.location;
      this.props.getAnime(pathname.replace('/watch/', ''));
    }
  }
  componentWillUnmount() {
    this.props.resetVideo();
    this.props.resetAnime();
    this.props.resetEpisodeOptions();
  }

  render() {
    const { anime } = this.props;
    return (
      <div
        style={{
          backgroundColor: '#f2f8fc',
          minHeight: '180vh',
          paddingBottom:'40px'
        }}
      >
        {anime !== null && anime !== false ? (
          <div>
            {/* Hero */}
            <Hero anime={anime} />
            {/* Content */}
            <Grid padded="horizontally">
              <SideContent className="fade-in" anime={anime} />
              <Grid.Column mobile={12} tablet={12} computer={12}>
                <Segment.Group>
                  <VideoPlayer />
                  <VideoBar />
                  <EpisodeList
                    slug={anime.info.slug}
                    episodes={anime.episodes}
                  />
                </Segment.Group>
              </Grid.Column>
            </Grid>
          </div>
        ) : anime === false ? (
          <div className="error-page">Error</div>
        ) : (
          <Dimmer active>
            <Loader size="huge" />
          </Dimmer>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ anime }) => ({ anime });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getAnime, resetAnime, resetEpisodeOptions, resetVideo },
    dispatch
  );
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Watch)
);
