import "./Posts.css";
import PostList from "../../components/PostList/PostList";
import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <>
      {/* Outlet is used because it is a nested, child element in the router */}
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
