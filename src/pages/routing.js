import { AboutPage } from "./About/about";
import { ContactPage } from "./Contact/contact";
import { Homepage } from "./Homepage/homepage";
import { Blog } from "./Blog/blog";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER_ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);
