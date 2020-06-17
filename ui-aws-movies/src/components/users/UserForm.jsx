import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Avatar,
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { AddCircle, Face } from '@material-ui/icons';

const useStyles = makeStyles({
  form: {
    padding: 15,
  },
  containerDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '10rem',
  },
  componentContainer: {
    position: 'center',
    height: '30rem',
    maxHeight: '100%',
  },
  avatar: {
    backgroundColor: '#3A77C4',
  },
  containerForm: {
    width: '100%',
    marginTop: '3rem',
  },
  btnCreate: {
    backgroundColor: '#3A77C4',
  },
  btnBack: {
    color: '#ffffff',
  },
  title: {
    color: '#ffffff',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: 200,
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
});

const UserForm = (props) => {
  const { title: formTitle, buttonTitle: btnTitle, onSubmit, onCancel } = props;

  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      email,
      password,
      accountType,
    });
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      className={classes.componentContainer}
    >
      <div className={classes.containerDiv}>
        <Avatar className={classes.avatar}>
          <Face />
        </Avatar>
        <Typography component='h1' variant='h5' className={classes.title}>
          {formTitle}
        </Typography>
        <form className={classes.containerForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                defaultValue={email}
                id='input'
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
                label='Email Address'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                defaultValue={password}
                autoComplete='current-password'
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                name='account type'
                label='Account type'
                required
                fullWidth
                defaultValue={accountType}
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
                onChange={(e) => setAccountType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                startIcon={<AddCircle />}
                className={classes.btnCreate}
                onClick={handleSubmit}
              >
                {btnTitle}
              </Button>
            </Grid>
          </Grid>
          <Grid container style={{ position: 'relative', top: '1rem' }}>
            <Grid item>
              <Button onClick={onCancel} className={classes.btnBack}>
                Already have an account? Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default UserForm;
