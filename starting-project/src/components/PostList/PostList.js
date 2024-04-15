import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useEffect, useState } from "react";

function PostList() {
  /**
   * inserted states and change handlers here because
   * the state needs to be handled as high level as possible (?)
   * so that it can be passed to lower level components that might
   * need it.
   */

  const [posts, setPosts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      setFetching(true);
      try {
        const response = await fetch("http://localhost:8080/posts");
        if (!response.ok) {
          setIsResponseOk(false);
        }
        const resData = await response.json();
        setPosts(resData.posts);
        setFetching(false);
        setIsResponseOk(true);
      } catch (error) {
        setIsResponseOk(false);
        setFetching(false);
        setErrorMessage(error.message);
      }
    }

    fetchPosts();
  }, []);

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
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    // i can include an empty html tag. acceptable
    // for React because i need to return only ONE component.
    <>
      {!isResponseOk && (
        <div style={{ textAlign: "center", color: "red" }}>
          <p>There was an error when fetching posts</p>
          <p>{errorMessage}</p>
        </div>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {!isFetching && isResponseOk && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "black" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some</p>
        </div>
      )}

      {isFetching && (
        <div style={{ textAlign: "center", color: "black" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
