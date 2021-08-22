import style from "../../styles/Community/post.module.css";
import Image from "next/image";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
function Post(props) {
  const { author, postBody, ratting, imgsrc, postDate, Topic } = props;
  const letters = [...author];
  let lett = letters[0];
  return (
    <div style={{ margin: "0px 0px 40px" }}>
      <div className={style.postContainer}>
        <img className={style.img} src={imgsrc} alt="" />
        <div className={style.postText}>
          <div className={style.usernameContainer}>
            <Avatar className={style.avatar}>{lett}</Avatar>
            <Typography variant="h6" component="h6" color="textSecondary">
              {author}
            </Typography>
          </div>
          <p>{postBody}</p>
          <div className={style.subText}>
            <h3 className={style.h3}>{postDate}</h3>
            <h3 className={style.topicTitle}>{`Topic: ${Topic}`}</h3>
          </div>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Ratting</Typography>
            <Rating name="read-only" value={ratting} readOnly />
          </Box>
        </div>
      </div>
    </div>
  );
}
export default Post;
