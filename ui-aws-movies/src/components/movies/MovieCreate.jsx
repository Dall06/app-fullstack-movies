import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import MovieForm from './MovieForm';
import {
  MOVIE_CREATE_STARTED,
  MOVIE_CREATE_RESET,
  MOVIE_FETCH_RESET,
} from '../../redux/constants/MoviesActionTypes';
import swal from 'sweetalert';

const MovieCreate = (props) => {
  const { history } = props;

  const dispatch = useDispatch();
  const loading = useSelector((state) => _.get(state, 'MovieAdd.loading'));
  const created = useSelector((state) => _.get(state, 'MovieAdd.created'));
  const error = useSelector((state) => _.get(state, 'MovieAdd.error'));

  const handleFinishedAction = () => {
    swal("Congrats!", "Movie uploaded to the platform!", "success");
    dispatch({
      type: MOVIE_CREATE_RESET,
    });
    dispatch({
      type: MOVIE_FETCH_RESET,
    });
  };

  useEffect(() => {
    if (loading === false && created === true) {
      handleFinishedAction();
      history.push('/app/movies/list');
    } else if(loading === false && created === false && error === true) {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    }
  });

  const uploadMovie = (movie) => {
    dispatch({
      type: MOVIE_CREATE_STARTED,
      payload: movie,
    });
  };
  return (
    <div>
      <MovieForm
        title='Upload a movie'
        buttonTitle='upload'
        windowType='create'
        onCancel={() => history.push('/app/movies/list')}
        onSubmit={uploadMovie}
      />
    </div>
  );
};

export default MovieCreate;
