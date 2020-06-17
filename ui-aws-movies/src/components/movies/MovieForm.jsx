import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Cancel from '@material-ui/icons/Cancel';
import Movie from '@material-ui/icons/Movie';
import AddCircle from '@material-ui/icons/AddCircle';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  form: {
    padding: 15,
  },
  containerDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '2rem',
  },
  componentContainer: {
    backgroundColor: '#1E2834',
    position: 'center',
    marginTop: '4rem',
    height: '40rem',
    maxHeight: '100%',
  },
  containerForm: {
    width: '100%',
    marginTop: '3rem',
  },
  btnUpload: {
    backgroundColor: '#3A77C4',
  },
  btnCancel: {
    color: '#B72851',
  },
  avatar: {
    backgroundColor: '#3A77C4',
  },
  txtform: {
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
});

const MovieForm = (props) => {
  const {
    title: formTitle,
    buttonTitle: btnTitle,
    onSubmit,
    onCancel,
    movie,
  } = props;

  const classes = useStyles();

  const [loaded, setLoaded] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [movieUrl, setMovieUrl] = useState('');
  const [validation, setValidation] = useState(false);

  const handleFieldsValidation = () => {
    if (name === '') {
      setName(movie.name);
    }
    if (description === '') {
      setDescription(movie.description);
    }
    if (genre === '') {
      setGenre(movie.genre);
    }
    if (duration === '') {
      setDuration(movie.duration);
    }
    if (year === '') {
      setYear(movie.year);
    }
    if (imageUrl === '') {
      setImageUrl(movie.imageUrl);
    }
    if (movieUrl === '') {
      setMovieUrl(movie.movieUrl);
    }
    setValidation(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formTitle === 'uploading') {
      handleFieldsValidation();
    }
    onSubmit({
      name,
      description,
      genre,
      duration,
      year,
      imageUrl,
      movieUrl,
    });
  };

  const handleSetValues = () => {
    setName(movie.name);
    setDescription(movie.description);
    setGenre(movie.genre);
    setDuration(movie.duration);
    setYear(movie.year);
    setImageUrl(movie.imageUrl);
    setMovieUrl(movie.movieUrl);
    setLoaded(true);
  };

  useEffect(() => {
    if (movie && validation === false && loaded === false) {
      handleSetValues();
    }
  });

  return (
    <Container
      component='main'
      maxWidth='xs'
      className={classes.componentContainer}
    >
      <div className={classes.containerDiv}>
        <Avatar className={classes.avatar}>
          <Movie />
        </Avatar>
        <Typography component='h1' variant='h5' className={classes.txtform} >
          {formTitle}
        </Typography>
        <Typography component='h2' variant='h6' className={classes.txtform}>
          {name}
        </Typography>
        <CssBaseline />
        <form className={classes.containerForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant='outlined'
                label='Movie Title'
                multiline
                rowsMax={1}
                value={name}
                placeholder={name}
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
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                multiline
                rowsMax={3}
                value={description}
                label='Description'
                placeholder={description}
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Duration'
                rowsMax={1}
                value={duration}
                placeholder={duration}
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
                onChange={(e) => setDuration(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='year'
                variant='outlined'
                required
                fullWidth
                label='Movie Year'
                rowsMax={1}
                value={year}
                placeholder={year}
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
                onChange={(e) => setYear(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='image url'
                rowsMax={1}
                value={imageUrl}
                placeholder={imageUrl}
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
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                rowsMax={1}
                value={movieUrl}
                placeholder={movieUrl}
                label='Movie url'
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
                onChange={(e) => setMovieUrl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                placeholder={genre}
                rowsMax={1}
                value={genre}
                label='movie genre'
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
                onChange={(e) => setGenre(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                color='primary'
                onClick={onCancel}
                startIcon={<Cancel />}
                className={classes.btnCancel}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                startIcon={<AddCircle />}
                className={classes.btnUpload}
                onClick={handleSubmit}
              >
                {btnTitle}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default MovieForm;
