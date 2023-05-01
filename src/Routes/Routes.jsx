import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
