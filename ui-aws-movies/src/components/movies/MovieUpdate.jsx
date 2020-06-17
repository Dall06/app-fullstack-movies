import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import MovieForm from './MovieForm';
import {
  MOVIE_UPDATE_STARTED,
  MOVIE_UPDATE_RESET,
  MOVIE_GET_BY_ID_STARTED,
  MOVIE_FETCH_RESET,
  MOVIE_GET_BY_ID_RESET
} from '../../redux/constants/MoviesActionTypes';
import swal from 'sweetalert';

const MovieUpdate = (props) => {
  const { history } = props;
  const { id } = props.match.params;

  const dispatch = useDispatch();
  const loading = useSelector((state) => _.get(state, 'MovieUpdate.loading'));
  const updated = useSelector((state) => _.get(state, 'MovieUpdate.updated'));
  const error = useSelector((state) => _.get(state, 'MovieUpdate.error'));
  const movie = useSelector((state) => _.get(state, 'MovieById.results'));
  const loadingFetch = useSelector((state) =>
    _.get(state, 'MovieById.loading')
  );

  const handleFinishedAction = () => {
    swal("Congrats!", "Movie updated!", "success");
    dispatch({
      type: MOVIE_UPDATE_RESET,
    });
    dispatch({
      type: MOVIE_FETCH_RESET,
    });
  };

  const handleCancel = () => {
    dispatch({
      type: MOVIE_GET_BY_ID_RESET,
    });
  };

  useEffect(() => {
    if (loading === false && updated === true) {
      handleFinishedAction();
      history.push('/app/movies/list');
    } else if(loading === false && updated === false && error === true) {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    }
    if (loadingFetch === false && movie === null) {
      dispatch({
        type: MOVIE_GET_BY_ID_STARTED,
        payload: id,
      });
    }
  });

  const updateMovie = (_movie) => {
    const _id = id;
    const obj = {
      id: _id,
      name: _movie.name,
      description: _movie.description,
      genre: _movie.genre,
      duration: _movie.duration,
      year: _movie.year,
      imageUrl: _movie.imageUrl,
      movieUrl: _movie.movieUrl,
    };
    console.log(obj);
    dispatch({
      type: MOVIE_UPDATE_STARTED,
      payload: obj,
    });
  };

  return (
    <div>
      <MovieForm
        title='Updating'
        buttonTitle='update'
        windowType='update'
        movie={movie}
        onCancel={() => {
          handleCancel();
          history.push('/app/movies/list');
          }}
        onSubmit={updateMovie}
      />
    </div>
  );
};

export default MovieUpdate;
