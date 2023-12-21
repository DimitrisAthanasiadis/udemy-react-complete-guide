import classes from "./Post.module.css";  // css module is imported. different classNames syntax.

function Post(props) {
  return (
    <li className={classes.post} >
      <p className={classes.author} >{props.author}</p>
      <p className={classes.text} >{props.body}</p>
    </li>
  );
}

export default Post;
