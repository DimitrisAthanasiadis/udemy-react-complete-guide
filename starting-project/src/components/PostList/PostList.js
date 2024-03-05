import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({ isPosting, onStopPosting }) {
  /**
   * inserted states and change handlers here because
   * the state needs to be handled as high level as possible (?)
   * so that it can be passed to lower level components that might
   * need it.
   */

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    /*
      whenever the new state is based on a previous state,
      we must pass a function (like an arrow function)
      to setPosts(). this is a general rule in React.
    */
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    // i can include an empty html tag. acceptable
    // for React because i need to return only ONE component.
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostList;
