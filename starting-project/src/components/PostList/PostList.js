import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    // i can include an empty html tag. acceptable
    // for React because i need to return only ONE component.
    <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Jim" body="Jim's text" />
            <Post author="Dimitris" body="Dimitris' text" />
        </ul>
    </>
  );
}

export default PostList;
