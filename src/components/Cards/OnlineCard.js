import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    height: 200,
    maxWidth: 345,
    textAlign: 'left',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Online Mode
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Is this application connected to the internet?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Switch
          checked={props.online}
          onChange={props.changed}
          name="online"
          color="primary"
        />
        <p>{props.online ? `You're online! :)` : `You're not online :(`}</p>
      </CardActions>
    </Card>
  );
}