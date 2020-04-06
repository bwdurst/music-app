import React from 'react';
import AppContainer from '../AppContainer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '100%'
  },
});

export default function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppContainer />
    </div>
  );
}
