import App from "../pages/App";
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
