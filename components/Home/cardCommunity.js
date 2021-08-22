import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Container from "@material-ui/core/Container";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
  },
  media: {
    height: 200,
    paddingTop: "56.25%", // 16:9
  },
}));

function CardCommunity(props) {
  const { author, postBody, imgsrc, postDate, Topic, ratting } = props;
  const letters = [...author];
  let lett = letters[0];

  const colors = ["orange", "red", "blue"];
  let c = Math.floor(Math.random() * 3);
  const color = colors[c];
  const classes = useStyles();
  return (
    <Container fixed>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar style={{ backgroundColor: color }}>{lett}</Avatar>}
          title={
            <Typography variant="h6" component="h6" color="textSecondary">
              {author}
            </Typography>
          }
          subheader={postDate}
        />
        <CardMedia className={classes.media} image={imgsrc} title={Topic} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {postBody}
          </Typography>
        </CardContent>
        <IconButton aria-label="add to favorites">
          <Rating name="read-only" value={ratting} readOnly />
        </IconButton>
      </Card>
    </Container>
  );
}
export default CardCommunity;
