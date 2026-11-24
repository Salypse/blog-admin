import Login from "../features/auth/pages/Login";
import App from "../pages/App";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
