import Post from "../Post/Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Jim" body="Jim's text" />
      <Post author="Dimitris" body="Dimitris' text" />
    </ul>
  );
}

export default PostList;
