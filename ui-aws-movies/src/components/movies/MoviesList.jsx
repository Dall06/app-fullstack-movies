/* eslint-disable no-else-return */
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  MOVIE_FETCH_STARTED,
  MOVIE_DELETE_STARTED,
  MOVIE_DELETE_RESET,
  MOVIE_FETCH_RESET,
} from '../../redux/constants/MoviesActionTypes';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import AddCircle from '@material-ui/icons/AddCircle';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MoviesCard from './MoviesCard';

const useStyles = makeStyles({
  container: {
    margin: 'auto',
    marginTop: '2rem',
    marginLeft: '15%',
    marginBottom: '1rem',
  },
  txtSearch: {
    width: '40%',
    margin: '1rem',
    position: 'center',
    textEmphasisColor: '#ffffff',
    opacity: 0.6,
  },
  txtInstruction: {
    margin: '1rem',
    position: 'center',
    color: '#ffffff',
    opacity: 0.6,
    fontSize: '10px',
  },
  btnAdd: {
    color: '#3A77C4',
    width: '2rem',
    height: '2rem',
  },
  appbar: {
    width: '82%',
    backgroundColor: '#151D27',
  },
  cssLabel: {
    color : '#ffffff'
  },
  serachcontainer: {
    marginLeft: '25%'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#656B72',
  },
  multilineColor:{
    color:'#ffffff',
  },
});

const MoviesPage = (props) => {
  const { history } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [list, setList] = useState([]);

  const movies = useSelector((state) => _.get(state, 'MoviesFetch.results'));
  const loading = useSelector((state) => _.get(state, 'MoviesFetch.loading'));
  const error = useSelector((state) => _.get(state, 'MoviesFetch.error'));
  const loadingDelete = useSelector((state) =>
    _.get(state, 'MovieDelete.loading')
  );
  const deleted = useSelector((state) => _.get(state, 'MovieDelete.delete'));

  const handleCreate = () => {
    history.push('/app/movies/add-movie');
  };
  const handleUpdate = (id) => {
    history.push(`/app/movies/update-movie/${id}`);
  };
  const handleFilter = () => {
    const _movies = movies.filter((m) =>
      m.genre.toLowerCase().includes(search.toLowerCase())
    );
    if (_movies === []) {
      
    }
    setFilteredInfo(_movies);
  };
  const handleList = () => {
    setList(movies);
  };
  const handleListChange = () => {
    setList(filteredInfo);
  };
  const handleDeleteMovie = (id) => {
    dispatch({
      type: MOVIE_DELETE_STARTED,
      payload: id,
    });
    history.push('/app/movies/list');
  };
  const handleDeleteFinished = () => {
    dispatch({
      type: MOVIE_DELETE_RESET,
    });
    dispatch({
      type: MOVIE_FETCH_RESET,
    });
    history.push('/app/movies/list');
  };

  useEffect(() => {
    if (movies === null && loading === false) {
      dispatch({ type: MOVIE_FETCH_STARTED });
    }
    if (movies !== null && loading === false) {
      handleList();
    }
    if (movies !== null && search !== '' && filteredInfo !== []) {
      handleListChange();
    }
    if (loadingDelete === false && deleted === true) {
      handleDeleteFinished();
    }
  });

  if (loading === true) {
    return <CircularProgress size={100} color='primary' />;
  } else if (error || filteredInfo === []) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.btnContainer}>
            <IconButton onClick={handleCreate}>
              <AddCircle fontSize='large' className={classes.btnAdd} />
            </IconButton>
          </div>
          <Card>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                No Movies where found.
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Please try later
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  } else if (list && loading === false) {
    return (
      <Grid container className={classes.container}>
        <AppBar position='static' className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={handleCreate}>
              <AddCircle fontSize='large' className={classes.btnAdd} />
            </IconButton>
            <div className={classes.serachcontainer}>
              <Typography className={classes.txtInstruction}>
                if you finished writing your search, click on the magnifying
                glass
              </Typography>
            </div>
              <TextField
                variant='outlined'
                id='txtSearch'
                placeholder='search movie GENRE'
                InputProps={{
                  startAdornment: (
                    <IconButton position='start' onClick={handleFilter}>
                      <Search style={{ color: '#ffffff'}}/>
                    </IconButton>
                  ),
                  classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.multilineColor
                  },
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                  },
                }}
                className={classes.txtSearch}
                onChange={(e) => setSearch(e.target.value)}
              />
          </Toolbar>
        </AppBar>
        <MoviesCard
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          movies={list}
          onDelete={handleDeleteMovie}
        />
      </Grid>
    );
  }
  return <div />;
};

export default MoviesPage;
