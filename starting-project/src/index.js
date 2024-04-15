import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts, { loader as postsLoader } from "./routes/Posts/Posts";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost/NewPost";
import RootLayout from "./routes/RootLayout/RootLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
// children property is used in the router elements so that the
// children can be rendered under their parent. i also need an 
// Outlet element to wrapt the children.
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]); // takes an array of routes i want to have

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
