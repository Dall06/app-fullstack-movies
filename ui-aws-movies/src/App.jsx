import React from 'react';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MovieCreate from './components/movies/MovieCreate';
import MovieUpdate from './components/movies/MovieUpdate';
import AppBar from './components/appbar/AppBar';
import UserLogin from './components/login/UserLogin';
import MoviesList from './components/movies/MoviesList';
import UserAdd from './components/users/UserAdd';
import About from './components/information/About';
import HomePage from './components/information/HomePage';
import MoviePlayer from './components/movies/MoviePlayer';

const useStyles = makeStyles(() => ({
  mainPage: {
    backgroundColor: '#2E3B4B',
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    overflowX: 'hidden',
  },
}));

const App = (props) => {
  const { store } = props;

  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/welcome'>
            <Route path='/welcome' component={HomePage} />
          </Route>

          <Route exact path='/'>
            <Redirect to='/welcome' />
          </Route>

          <Route path='/login'>
            <Switch>
              <Route path='/login/create-account' component={UserAdd} />
              <Route path='/login' component={UserLogin} />
            </Switch>
          </Route>

          <Route path='/app'>
            <main className={classes.mainPage}>
              <Switch>
                <Route path='/app/movies/list' component={MoviesList} />
                <Route path='/app/movies/add-movie' component={MovieCreate} />
                <Route
                  path='/app/movies/update-movie/:id'
                  component={MovieUpdate}
                />
                <Route excat path='/app/movies'>
                  <Redirect to='/app/movies/list' />
                </Route>
                <Route path='/app/about' component={About} />
              </Switch>
              <AppBar />
            </main>
          </Route>
          <Route path='/player/:link' component={MoviePlayer} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
