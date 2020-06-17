import React from 'react';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

const MoviePlayer = (props) => {
  const { pathname, search } = props.location;
  const slug = pathname.split('/player/').pop();
  const link = `${slug}${search}`;

  if (link !== '') {
    console.log(link);
    return (
        <Container>
          <Button onClick={() => window.close()}>
          Close
        </Button>
        <ReactPlayer url={link} controls width='100%' height='95vh'/>
      </Container>
    );
  }
  return <div />;
};

export default MoviePlayer;
