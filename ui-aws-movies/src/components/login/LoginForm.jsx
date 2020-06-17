import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    backgroundColor: '#18304E',
  },
  image: {
    backgroundImage:
      'url(https://www.idet.org.mx/wp-content/uploads/2018/08/Fotolia_144721891_Subscription_Monthly_M.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: '3rem',
    marginTop: '15rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#3A77C4',
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: '1rem',
  },
  submit: {
    margin: '0.2rem',
    backgroundColor: '#3A77C4',
  },
  gridContainer: {
    backgroundColor: '#1E2834',
  },
  createbtn: {
    color: '#ffffff',
  },
  cssLabel: {
    color : '#ffffff'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#656B72',
  },
  multilineColor:{
    color:'#ffffff',
  },
}));

const LoginPage = (props) => {
  const { onSubmit, onCreate } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <Grid container component='main' className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className={classes.gridContainer}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' style={{ color: '#ffffff' }}>
            Sign in
          </Typography>
          <form className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.multilineColor
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                },
              }}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                  input: classes.multilineColor
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Button className={classes.createbtn} onClick={onCreate}>
              Do not have an account? Sign Up
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
