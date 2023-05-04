import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import ChefDetails from "../LayOut/ChefDetails";
import Blogs from "../Components/Blogs";
import Contact from "../Components/Contact";
import ErrorShow from "../Components/ErrorShow";
import SecureRoutes from "./secureRoutes";
import Profile from "../Components/Profile";
// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorShow />,
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
        path: "/profile",
        element: (
          <SecureRoutes>
            <Profile />
          </SecureRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/chef_Details/:id",
    element: (
      <SecureRoutes>
        <ChefDetails />
      </SecureRoutes>
    ),
    errorElement: <ErrorShow />,
    loader: ({ params }) =>
      fetch(
        `https://dish-dash-server-xanon-oc.vercel.app/chef_Details/${params.id}`
      ),
  },
]);
export default router;
