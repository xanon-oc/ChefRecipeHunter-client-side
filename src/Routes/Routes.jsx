import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import ChefDetails from "../LayOut/ChefDetails";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/chef_Details/:id",
    element: <ChefDetails />,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/chef_Details/${params.id}`),
  },
]);
export default router;
