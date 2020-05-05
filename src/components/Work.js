import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import work from '../img/work1.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: '5rem',
  },
  media: {
    height: 160,
  },
  button: {
    width: 200,
  },
});

export default function Work() {
  const classes = useStyles();

  return (
    <div className="work-container">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={work}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: '#333' }}
            >
              Task Manager
            </Typography>
            <Typography variant="body2" component="p" style={{ color: '#333' }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
          <Button
            size="large"
            style={{ backgroundColor: '#3a8daf', width: 150 }}
          >
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={work}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: '#333' }}
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
