import pages from "../pages";
import Layout from "../components/Layouts";
import configPath from "./configPath";
// Public routes
const publicRotes = [
  {
    path: configPath.home,
    component: pages.Home,
    layout: Layout.DefaultLayout,
  },
  {
    path: configPath.watch,
    component: pages.Watch,
    layout: Layout.NotNavigationLayout,
  },
  {
    path: configPath.shorts,
    component: pages.Shorts,
    layout: Layout.DefaultLayout,
  },
  {
    path: configPath.lirbrary,
    component: pages.Library,
    layout: Layout.DefaultLayout,
  },
  {
    path: configPath.subscribe,
    component: pages.Subscribe,
    layout: Layout.DefaultLayout,
  },
  {
    path: configPath.search,
    component: pages.Search,
    layout: Layout.DefaultLayout,
  },
];

// Private routes
const privateRoutes = [];

export { publicRotes, privateRoutes };
