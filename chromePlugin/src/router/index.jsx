import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

export default function Router() {
  const userInfo = useSelector((state) => state.userInfo);
  
  // 如果登陆了，直接重定向到home页；如果未登陆，重定向到login页
  const redirectIfHasUser = () => {
    if (userInfo) {
      return redirect("/home");
    }
    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      loader: redirectIfHasUser,
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
