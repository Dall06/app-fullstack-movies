import { all } from 'redux-saga/effects';
import CreateUser from './CreateUser';
import DeleteMovie from './DeleteMovie';
import EditMovie from './EditMovie';
import Login from './Login';
import MovieDetail from './MovieDetail';
import MovieList from './MoviesList';
import UploadMovie from './UploadMovie';

export default function* () {
  yield all([
    CreateUser(),
    DeleteMovie(),
    EditMovie(),
    Login(),
    MovieDetail(),
    MovieList(),
    UploadMovie(),
  ]);
}
