import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blogs from "./components/Blogs";
import PostPage from "./pages/PostPage";

const routes = [
  { path: "/post/:id([0-9]+)?", component: PostPage },
  { path: "/blogs/:id", component: Blogs },
  { path: "/blogs", component: BlogPage },
  { path: "/about-us", component: AboutUs },
  { path: "/profile", component: Profile },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
