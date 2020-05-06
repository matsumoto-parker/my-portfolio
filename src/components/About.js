import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bird from '../img/bird.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'center',
  },
  paperLeft: {
    color: '#fff',
    textAlign: 'center',
    marginTop: '2rem',
    backgroundColor: '#3a8daf',
    boxShadow: 'none',
  },
  paperRight: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: '#fff',
    marginTop: '2rem',
    backgroundColor: '#333',
    opacity: '0.8',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="title">About me</h1>
      <Grid container>
        <Grid item xs={5}>
          <Paper className={classes.paperLeft}>
            <img src={bird} alt="my-face" className="my-image" />
            <h1 className="name">松本　未優</h1>
            <div className="description">
              <p>
                　はじめまして。未経験からweb開発のフロントエンドエンジニアを目指しています。
                現在29歳とけして若くないビギナーですが、その分仕事を簡単に投げ出さず、腰を据えて働く覚悟があります。
                どうかよろしくお願いいたします。
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperRight}>
            <h2 className="career">職務経歴</h2>
            <dl className="career-box">
              <div className="career-history">
                <dt>2015年</dt>
                <dd className="career-text">印刷会社に就職</dd>
              </div>
              <div className="career-history">
                <dt>2018年</dt>
                <dd className="career-text">部署内リーダー職に就任</dd>
              </div>
              <div className="career-history">
                <dt>2020年</dt>
                <dd className="career-text">印刷会社を退職</dd>
              </div>
            </dl>
            <h2 className="skill">学習スキル</h2>
            <p className="skill-text">
              　2020年からHTML/CSS、JavaScript、Reactとフロントエンド周りを勉強してきました。
              またFirebaseを使用することで、バックエンドも含めたアプリの制作から公開までを経験しています。
              学習時メンターにアプリの添削をしてもらう際にGitHubを使用。チーム開発への下地はできています。
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
