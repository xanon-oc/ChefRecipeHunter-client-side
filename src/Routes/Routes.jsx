import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";

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
    ],
  },
]);
export default router;
