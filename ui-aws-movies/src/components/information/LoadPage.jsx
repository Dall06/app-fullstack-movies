import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  mainPage: {
    backgroundColor: '#18304E',
    height: '100vh',
    width: '100%',
    flexGrow: 1,
    overflowY: 'hidden',
  },
  circular: {
    position: 'absolute',
    marginLeft: '50%',
    marginTop: '25%',
  },
}));

const LoadPage = (props) => {
  const classes = useStyles();
  const { history } = props;

  const awaitFor = () => {
    setTimeout(() => {
      history.push('/app/movies/list');
    }, 1000);
  };

  return (
    <div className={classes.mainPage} onLoad={awaitFor()}>
      <CircularProgress
        className={classes.circular}
        size={100}
        color='primary'
      />
    </div>
  );
};

export default LoadPage;
