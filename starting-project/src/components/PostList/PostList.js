import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import classes from "./PostList.module.css";

function PostList() {
  /**
   * inserted states and change handlers here because
   * the state needs to be handled as high level as possible (?)
   * so that it can be passed to lower level components that might
   * need it.
   */

  const posts = useLoaderData();

  function addPostHandler(postData) {
    /*
      whenever the new state is based on a previous state,
      we must pass a function (like an arrow function)
      to setPosts(). this is a general rule in React.
    */

    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    // i can include an empty html tag. acceptable
    // for React because i need to return only ONE component.
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  );
}

export default PostList;
