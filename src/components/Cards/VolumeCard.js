import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 200,
    maxWidth: 345,
    textAlign: 'left',
  },
  slider: {
    width: '95%',
  },
});

function valueText(value) {
  return `${value}`;
}

export default function VolumeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Master Volume
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Slider
          className={classes.slider}
          defaultValue={50}
          getAriaValueText={valueText}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          onChange={props.changed}
          step={10}
          marks
          min={10}
          max={100}
        />
      </CardActions>
    </Card>
  );
}