import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 'auto',
    maxWidth: 800,
    height: 450,
    marginTop: 200,
    backgroundColor: '#1E2834',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: '1rem',
    display: 'block',
    maxWidth: 700,
    maxHeight: 400,
  },
  text: {
    color: '#FFFFFF',
    fontSize: '10px',
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: '20px',
  },
  container: {
    margin: '1rem',
  },
  divider: {
    margin: '2rem',
    width: '50%',
    backgroundColor: '#ffffff',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <img
              className={classes.img}
              alt='complex'
              src='https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              className={classes.container}
              item
              xs
              container
              direction='column'
              spacing={2}
            >
              <Grid item xs>
                <Typography
                  gutterBottom
                  className={classes.textTitle}
                  variant='h4'
                >
                  Developed by:
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Diego Alberto León López
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  César Augusto Jamit Crespo
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Diego Robledo Mendoza
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Mauricio Mejía Sánchez
                </Typography>
                <Typography variant='h5' className={classes.text} gutterBottom>
                  Salomón Romero Oláez
                </Typography>
                <Divider className={classes.divider} />
                <div>
                  <Typography className={classes.text} gutterBottom>
                    Movies catalog app
                  </Typography>
                  <Typography className={classes.text} gutterBottom>
                    Version: 1.0.0 Many features cooming soon, it is just a
                  </Typography>
                  <Typography className={classes.text} gutterBottom>
                    tempalte test
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
