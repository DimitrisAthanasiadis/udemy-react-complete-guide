import Modal from "../Modal/Modal";
import NewPost from "../NewPost/NewPost";
import Post from "../Post/Post";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList() {
    /**
     * inserted states and change handlers here because
     * the state needs to be handled as high level as possible (?)
     * so that it can be passed to lower level components that might
     * need it.
     */

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    // i can include an empty html tag. acceptable
    // for React because i need to return only ONE component.
    <>
      <Modal>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
          enteredBody={enteredBody}
          enteredAuthor={enteredAuthor}
        />
      </Modal>
      {enteredAuthor || enteredBody ? (
        <ul className={classes.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
        </ul>
      ) : null}
    </>
  );
}

export default PostList;
