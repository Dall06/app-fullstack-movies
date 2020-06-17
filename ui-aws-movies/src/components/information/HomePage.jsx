import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  mainPage: {
    backgroundColor: '#18304E',
    height: '100vh',
    width: '100%',
    overflowY: 'hidden',
  },
  circular: {
    marginTop: '5rem',
    marginLeft: '50%',
  },
  img: {
    maxWidth: '400px',
    maxHeight: '400px',
    marginLeft: '40%',
    marginTop: '5rem',
  },
}));

const HomePage = (props) => {
  const classes = useStyles();
  const { history } = props;

  const awaitFor = () => {
    setTimeout(() => {
      history.push('/login');
    }, 1200);
  };

  return (
    <div className={classes.mainPage} onLoad={awaitFor()}>
      <Grid container>
        <Grid item xs={12}>
          <img
            className={classes.img}
            alt='complex'
            src='../../icons/logo512.png'
          />
        </Grid>
        <Grid item xs={12}>
          <CircularProgress
            className={classes.circular}
            size={80}
            color='primary'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
