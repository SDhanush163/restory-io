import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));
 

export default function PostCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={props.username}
        subheader={props.groupname}
      />
      <CardMedia
        className={classes.media}
        height="100"
        image="https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.JPG"//{props.imgUrl}
        title={props.altText}
      />


      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.textBody}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
