import classes from "./Post.module.css"; // css module is imported. different classNames syntax.
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </Link>
    </li>
  );
}

export default Post;
