import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import makeStyles from '@material-ui/core/styles/makeStyles';
import swal from 'sweetalert';

const useStyles = makeStyles({
  cardImg: {
    height: '20rem',
    width: '34rem',
    backgroundColor: 'black',
    opacity: 0.6
  },
  InfoContainer: {
    position: 'absolute',
    top: '5rem',
    left: '35rem',
  },
  btnEdit: {
    color: '#3A77C4',
  },
  btntrash: {
    color: '#C80300',
  },
  cardContainer: {
    backgroundColor: '#1E2834',
    height: '20rem',
    width: '65rem',
  },
  listContainer: {
    marginTop: '1rem',
    overflowX: 'hidden',
  },
  container: {
    marginLeft: '7%',
    overflowY: 'scroll'
  },
  actionsContainer: {
    position: 'relative',
    bottom: '18em',
    left: '88%',
  },
  colorText:{
    color: '#ffffff',
  },
});

const MoviesCard = (props) => {
  const { movies, onDelete, onUpdate } = props;

  const classes = useStyles();

  const [link, setLink] = useState('');
  const [trash, setTrash] = useState('');

  const handleVideo = () => {
    window.open(`/player/${link}`);
    setLink('');
  };
  const handleTrash = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        onDelete(trash);
        setTrash('');
        swal("Movie has been deleted!", {
          icon: "success",
        });
      } else {
        setTrash('');
      }
    });
  };

  useEffect(() => {
    if (link) {
      handleVideo();
    }
    if (trash !== '') {
      handleTrash();
    }
  });

  if (movies) {
    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs>
          <Grid container spacing={3} className={classes.listContainer}>
            {movies.map((m) => (
              <Grid key={m.id} item xs={10}>
                <Card className={classes.cardContainer}>
                  <CardActionArea
                    onClick={() => {
                      setLink(m.movieUrl);
                    }}
                  >
                    <CardMedia
                      className={classes.cardImg}
                      component='img'
                      image={m.imageUrl}
                    />
                    <CardContent className={classes.InfoContainer}>
                      <Typography className={classes.colorText} variant='h5'>
                        {m.name}
                      </Typography>
                      <Typography className={classes.colorText}>
                        {m.description}
                      </Typography>
                      <Typography className={classes.colorText}>
                        Genre:
                        {` ${m.genre}`}
                      </Typography>
                      <Typography className={classes.colorText}>
                        Duration:
                        {` ${m.duration}`}
                      </Typography>
                      <Typography className={classes.colorText}>
                        Year:
                        {` ${m.year}`}
                      </Typography>
                      <Typography className={classes.colorText}>
                        Uploaded at:
                        {` ${m.uploadedAt}`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.actionsContainer}>
                    <IconButton
                      size='small'
                      onClick={() => onUpdate(m.id)}
                    >
                      <Avatar className={classes.btnEdit}>
                        <Edit />
                      </Avatar>
                    </IconButton>
                    <IconButton
                      size='small'
                      onClick={() => setTrash(m.id)}
                    >
                      <Avatar className={classes.btntrash}>
                        <Delete />
                      </Avatar>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return <div />;
};

export default MoviesCard;
