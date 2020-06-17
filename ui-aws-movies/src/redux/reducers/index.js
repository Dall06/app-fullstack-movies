import { combineReducers } from 'redux';
import MovieAdd from './MovieAdd';
import MovieById from './MovieById';
import MovieDelete from './MovieDelete';
import MoviesFetch from './MoviesFetch';
import MovieUpdate from './MovieUpdate';
import UserAdd from './UserAdd';
import UserAuthentication from './UserAuthentication';

export default combineReducers({
  MovieAdd,
  MovieById,
  MovieDelete,
  MoviesFetch,
  MovieUpdate,
  UserAdd,
  UserAuthentication,
});
