import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bird from '../img/bird.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperLeft: {
    padding: theme.spacing(1),
    color: '#fff',
    textAlign: 'center',
    marginTop: '2rem',
    backgroundColor: '#3a8daf',
    boxShadow: 'none',
  },
  paperRight: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: '#fff',
    marginTop: '2rem',
    backgroundColor: 'black',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="title">About me</h1>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paperLeft}>
            <img src={bird} alt="my-face" className="my-image" />
            <h1 className="name">松本　未優</h1>
            <div className="description">
              <p>はじめまして。</p>
              <p>
                未経験からweb開発のフロントエンドエンジニアを目指しています。現在29歳とけして若くないビギナーですが、その分仕事を簡単に投げ出さず、腰を据えて働く覚悟があります。どうかよろしくお願いいたします。
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
