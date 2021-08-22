import style from "../styles/Community/community.module.css";
import Post from "../components/Community/post.js";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { TiThList } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Box from "@material-ui/core/Box";
import { useRouter } from "next/router";
import { posts } from "../database/posts.js";

function Community({ postsdata }) {
  const Router = useRouter();
  const [Posts, setPosts] = useState(postsdata);
  const [postValue, setPostValue] = useState("");
  const [postTitle, setPostTilte] = useState("");
  const [postTopic, setPostTopic] = useState("BodyBuilding");
  const [controllValue, setControllValue] = useState(2);
  const [iconState, setIconState] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const changeIconhandle = (event) => {
    setIconState(!iconState);
  };
  const filterByName = async () => {
    Router.push(`/community?author=${filterName}`, undefined, {
      shallow: true,
    });
    const response = await fetch(`/api/posts?author=${filterName}`);
    const datafilter = await response.json();
    setPosts(datafilter);
  };
  const filterByCategory = async () => {
    Router.push(`/community?category=${filterCategory}`, undefined, {
      shallow: true,
    });
    const response = await fetch(`/api/posts?category=${filterCategory}`);
    const datafilter = await response.json();
    setPosts(datafilter);
  };
  const bringAll = async () => {
    Router.push("/community", undefined, { shallow: true });
    const response = await fetch("/api/posts");
    const datafilter = await response.json();
    setPosts(datafilter);
  };
  const addPostHandler = async () => {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        author: "Ali Hamdan",
        body: postValue,
        ratting: controllValue,
        topic: postTopic,
      }),
      headers: { "content-Type": "application/json" },
    });
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div className={style.container}>
      <form>
        <div className={style.usernameContainer}>
          <Avatar className={style.avatar}>A</Avatar>
          <Typography variant="h6" component="h6" color="textSecondary">
            Ali Hamdan
          </Typography>
        </div>
        <label className={style.label} htmlFor="newPost">
          Add a Post
        </label>
        <textarea
          rows="4"
          className={style.input}
          type="text"
          id="newPost"
          value={postValue}
          onChange={(e) => {
            setPostValue(e.target.value);
          }}
        />
        <label
          style={{ fontSize: "25px", fontWeight: "500", letterSpacing: "1px" }}
        >
          Topic :
        </label>
        <div className={style.radio}>
          <div>
            <input
              type="radio"
              className={style.inputRadio}
              id="build"
              value="BodyBuilding"
              onChange={(e) => {
                setPostTopic(e.target.value);
              }}
              name="topic"
            />
            <label htmlFor="build" style={{ fontSize: "20px" }}>
              Body Building
            </label>
          </div>
          <div>
            <input
              type="radio"
              className={style.inputRadio}
              id="yoga"
              value="yoga"
              onChange={(e) => {
                setPostTopic(e.target.value);
              }}
              name="topic"
            />
            <label htmlFor="yoga" style={{ fontSize: "20px" }}>
              Yoga
            </label>
          </div>
          <div>
            <input
              type="radio"
              className={style.inputRadio}
              id="fit"
              value="fitness"
              onChange={(e) => {
                setPostTopic(e.target.value);
              }}
              name="topic"
            />
            <label htmlFor="fit" style={{ fontSize: "20px" }}>
              Fitness
            </label>
          </div>
        </div>

        <Typography component="legend">Give a Rate</Typography>
        <Rating
          name="simple-controlled"
          value={controllValue}
          onChange={(event, newValue) => {
            setControllValue(newValue);
          }}
        />

        <Button
          className={style.button}
          variant="contained"
          type="button"
          color="primary"
          onClick={() => {
            addPostHandler();
          }}
        >
          Add a Post
        </Button>
      </form>
      <h1>Posts</h1>
      <div className={style.content}>
        <div className={style.postColumn}>
          {Posts.map((post) => {
            return (
              <Post
                key={post.postId}
                author={post.author}
                postBody={post.body}
                imgsrc={post.image}
                ratting={post.ratting}
                postDate={post.postDate}
                Topic={post.topic}
              />
            );
          })}
        </div>
        {iconState === false ? (
          <TiThList className={style.showIcon} onClick={changeIconhandle} />
        ) : (
          <AiFillCloseSquare
            className={style.showIcon}
            onClick={changeIconhandle}
          />
        )}
        <div
          className={
            iconState === false ? style.interraction : style.iconInterraction
          }
        >
          <div>
            <h2 className={style.h2}>Filter Post by Name</h2>
            <input
              type="text"
              placeholder="Enter a name"
              className={style.filterName}
              value={filterName}
              onChange={(e) => {
                setFilterName(e.target.value);
              }}
            />
            <Button
              className={style.button}
              variant="contained"
              type="button"
              size="small"
              color="primary"
              onClick={() => {
                filterByName();
              }}
            >
              Filter
            </Button>
          </div>
          <div>
            <h2 className={style.h2}>Filter Post by Topic</h2>
            <div style={{ margin: "10px 0px" }}>
              <label
                htmlFor="selectTopic"
                style={{ fontSize: "20px", margin: "0px 10px 0px 0px" }}
              >
                Select a Topic
              </label>
              <select
                id="selectTopic"
                className={style.selectTopic}
                value={filterCategory}
                onChange={(e) => {
                  setFilterCategory(e.target.value);
                }}
              >
                <option value="yoga">Yoga</option>
                <option value="BodyBuilding">Body Building</option>
                <option value="fitness">Fitness</option>
              </select>
            </div>
            <Button
              className={style.button}
              variant="contained"
              type="button"
              size="small"
              color="primary"
              onClick={() => {
                filterByCategory();
              }}
            >
              Filter
            </Button>
          </div>
          <div>
            <h2 style={{ margin: "0px 0px 10px" }}>Bring All</h2>
            <Button
              className={style.button}
              variant="contained"
              type="button"
              size="small"
              color="primary"
              onClick={() => {
                bringAll();
              }}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Community;

export async function getServerSideProps() {
  const data = posts;
  return {
    props: { postsdata: data.reverse() },
  };
}
