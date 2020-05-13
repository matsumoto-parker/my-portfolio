import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import chatBot from '../img/chatbot.png';
import decisionMaker from '../img/decision-maker.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: '2rem',
  },
  media: {
    height: 160,
  },
  button: {
    width: 330,
    display: 'block',
    textAlign: 'center',
  },
});

export default function Work() {
  const classes = useStyles();

  return (
    <div>
      <div className="container">
        <h1>Work</h1>
      </div>
      <div className="work-container">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={chatBot}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: '#333' }}
              >
                profile-chatbot
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ color: '#333' }}
              >
                chatbotを通して僕の学習状況がわかります。
                <br />
                <br />
                使用した技術: React/Firebase
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.button}>
            <a
              href="https://profile-chatbot-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="large"
                style={{ backgroundColor: '#3a8daf', width: 300 }}
              >
                見てみる
              </Button>
            </a>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={decisionMaker}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: '#333' }}
              >
                decision-maker
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{ color: '#333' }}
              >
                やることをランダムで決定してくれます。
                <br />
                <br />
                使用した技術: React Hooks
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.button}>
            <a
              href="https://matsumoto-parker.github.io/decision-maker-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="large"
                style={{ backgroundColor: '#3a8daf', width: 300 }}
              >
                見てみる
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
