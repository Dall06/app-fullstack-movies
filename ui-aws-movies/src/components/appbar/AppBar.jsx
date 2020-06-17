import React from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Movie from '@material-ui/icons/Movie';
import Info from '@material-ui/icons/Info';
import ExitToApp from '@material-ui/icons/ExitToApp';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  title: {
    margin: '25px',
  },
  drawercontainer: {
    backgroundColor: '#151D27',
    height: '100%',
    color: '#ffffff',
    width: '12rem',
  },
  drawer: {
    flexShrink: 0,
  },
  button: {
    textTransform: 'none',
  },
  icons: {
    color: '#3A77C4',
  },
  icons2: {
    color: '#DD9001',
  },
}));

const ResponsiveDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer variant='permanent' className={classes.drawer}>
      <div className={classes.drawercontainer}>
        <Typography variant='h6' className={classes.title}>
          Movies App
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <Button
              startIcon={<Movie className={classes.icons} />}
              component={NavLink}
              className={classes.button}
              to='/app/movies/list'
              color='inherit'
            >
              Movies
            </Button>
          </ListItem>
          <ListItem>
            <Button
              startIcon={<Info className={classes.icons} />}
              component={NavLink}
              className={classes.button}
              to='/app/about/'
              color='inherit'
            >
              About
            </Button>
          </ListItem>
        </List>
        <div style={{ height: '65%' }} />
        <Divider />
        <List>
          <ListItem>
            <Button
              startIcon={<ExitToApp className={classes.icons2} />}
              component={NavLink}
              className={classes.button}
              to='/welcome'
              color='inherit'
            >
              Log out
            </Button>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default ResponsiveDrawer;
