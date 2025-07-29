import Home from "../pages/Home";
import About from "../pages/About";
// import NotFound from "./pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import BlankLayout from "../layouts/BlankLayout";

export const routes = [
  {
    path: "/",
    label: "Home",
    layout: DefaultLayout,
    element: <Home />,
  },
  {
    path: "/about",
    label: "About",
    layout: BlankLayout,
    element: <About />,
    children: [
      {
        path: "/about/team",
        label: "Team",
        element: <div>👥 Our Team</div>,
      },
      {
        path: "/about/contact",
        label: "Contact",
        element: <div>📞 Contact Us</div>,
      },
    ],
  },
];

// ,
//   {
//     path: "*",
//     element: <NotFound />,
//     hideInMenu: true,
//   },
