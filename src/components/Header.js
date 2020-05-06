import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#3a8daa' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Matsumoto Portfolio</Link>
          </Typography>
          <Link to="/about">
            <Button color="inherit">about</Button>
          </Link>
          <Link to="/work">
            <Button color="inherit">work</Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
