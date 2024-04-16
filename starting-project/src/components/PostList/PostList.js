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
