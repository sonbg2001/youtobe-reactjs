import Home from "../pages/Home";
import DefaultLayout from "../components/Layouts/DefaultLayout";
// Public routes
const publicRotes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/short",
    component: Home,
  },
];

// Private routes
const privateRoutes = [];

export { publicRotes, privateRoutes };
