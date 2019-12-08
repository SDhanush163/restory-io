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

  
    const images = [
      "https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.JPG",
      "http://digitalimagemakerworld.com/images/images-1080p/37566996-images-1080p.jpg",
      "https://i.pinimg.com/originals/87/22/19/872219e39469e56ff5742581122212bf.jpg",
      "https://i.pinimg.com/originals/31/9d/ce/319dce67ea7e656296d9334040a9b991.jpg",
      "https://i.redd.it/d3h7ofnt73621.png",
      "https://wallpaperplay.com/walls/full/9/a/7/221581.jpg",
      "https://i.pinimg.com/originals/f5/8f/1b/f58f1bef7d20039918b01a516be277e6.jpg",
      "https://wallpapercave.com/wp/8UgQsyE.jpg",
      "https://livewallpaperswide.com/wp-content/uploads/2017/01/1483519754_578_1080p-hd-wallpaper.jpg",
      "https://www.larutadelsorigens.cat/wallpic/full/56-560120_astronaut-wallpaper-1080p.jpg"
    ]

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
        image={images[Math.floor((Math.random() * 10))]}//"https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t3/sample_images/img/index/ff_x_t3_002.JPG"//{props.imgUrl}
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
