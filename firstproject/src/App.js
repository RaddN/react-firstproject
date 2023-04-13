import "./App.css";
import AboutPage from "./component/about";
import { CommonPage } from "./component/commonPage";
import { Home } from "./component/home";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./component/contact";
import { Login } from "./component/usermanagement/login";
import { Register } from "./component/usermanagement/register";
import { PostPage } from "./component/usermanagement/post";
import { Addpost } from "./component/usermanagement/addpost";
const isLogin = false;
const CommonElement = CommonPage;
const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonElement />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/addpost",
        element: <Addpost />,
      },
      {
        path: "/home",
        element: <PostPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/about/:id",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
