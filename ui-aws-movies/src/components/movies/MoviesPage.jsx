import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import {
  MOVIE_FETCH_STARTED,
  MOVIE_DELETE_STARTED,
} from '../../redux/constants/MoviesActionTypes';
import MoviesCard from './MoviesCard';

const useStyles = makeStyles({
  container: {
    overflowY: 'hidden',
    margin: 'auto',
    marginTop: '2rem',
    marginLeft: '20%',
    marginBottom: '1rem',
  },
});

const MoviesPage = (props) => {
  const { history } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const movies = useSelector((state) => _.get(state, 'MoviesFetch.results'));
  const loading = useSelector((state) => _.get(state, 'MoviesFetch.loading'));

  useEffect(() => {
    if (loading === false && movies === null) {
      dispatch({ type: MOVIE_FETCH_STARTED });
    }
  });

  const handleCreate = () => {
    history.push('/app/movies/add-movie');
  };
  const handleUpdate = (id) => {
    history.push(`/app/movies/update-movie/${id}`);
  };
  const handleDelete = (id) => {
    dispatch({
      type: MOVIE_DELETE_STARTED,
      payload: id,
    });
  };

  if (loading === true) {
    return <CircularProgress size={100} color='primary' />;
  }
  return (
    <Container className={classes.container}>
      <MoviesCard
        onCreate={handleCreate}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        movies={movies}
      />
    </Container>
  );
};

export default MoviesPage;
