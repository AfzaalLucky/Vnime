import React from "react";
import { connect } from "react-redux";

const VideoTitle = ({ selectedEpisode }) => {
  return (
    <div>
      {selectedEpisode ? (
        <h4>
          <small>EP: {selectedEpisode.episode.info.episode}</small>
          <span className="divide" />
          <em>
            {selectedEpisode.episode.info.title ||
              `Episode ${selectedEpisode.episode.info.episode}`}
          </em>
        </h4>
      ) : (
        <em>...</em>
      )}
    </div>
  );
};

const mapStateToProps = ({ selectedEpisode }) => ({ selectedEpisode });

export default connect(
  mapStateToProps,
  null
)(VideoTitle);
