import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoTitle extends Component {
  render() {
    const { selectedEpisode } = this.props;
    return (
      <div>
        {selectedEpisode ? (
          <h4>
            <small>EP: {selectedEpisode.episode.info.episode}</small>
            <span className="divide" />
            <em>{selectedEpisode.episode.info.title}</em>
          </h4>
        ) : (
          <em>...</em>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ selectedEpisode }) => ({ selectedEpisode });

export default connect(mapStateToProps, null)(VideoTitle);
