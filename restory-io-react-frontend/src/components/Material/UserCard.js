import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import userImage from '../Assets/Images/DefaultProfile.png'
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
  },
  buttonwidth: {
    width: "100%",
  }
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="User"
          height="250"
          image={userImage}
          title="User"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.buttonwidth}>
          <PersonIcon />
          Profile
        </Button>
      </CardActions>
    </Card>
  );
}
