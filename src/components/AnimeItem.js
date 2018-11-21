import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Image, Icon, Popup } from "semantic-ui-react";

const AnimeItem = ({ anime }) => {
  return (
    <Grid.Column
      mobile={3}
      tablet={3}
      computer={3}
      largeScreen={3}
      widescreen={2}
      className="fade-in"
    >
      <Popup
        basic
        content={anime.anime.title}
        hideOnScroll
        inverted
        size="mini"
        trigger={
          <Card fluid as={Link} to={anime.url} className="card-no-border">
            <Image rounded src={anime.anime.poster} fluid />
            {anime.episode && (
              <div className="card-episodes">
                <span>EP {anime.episode}</span>
              </div>
            )}
            {anime.extra && (
              <div className="card-extra">
                <span>
                  <Icon name="eye" size="small" />
                  {anime.extra}
                </span>
              </div>
            )}
            <div className="card-overlay">{anime.anime.title}</div>
            <div className="card-play">
              <Icon name="video play" size="huge" />
            </div>
          </Card>
        }
      />
    </Grid.Column>
  );
};

export default AnimeItem;
