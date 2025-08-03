import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Leadership from "../pages/About/Leadership";
import Management from "../pages/About/Management";
import Accreditation from "../pages/About/Accreditation";
// import NotFound from "./pages/NotFound";
import Approve from "../pages/Confirmation/Approve";
import DefaultLayout from "../layouts/DefaultLayout";
import BlankLayout from "../layouts/BlankLayout";
import AboutLayout from "../layouts/AboutLayout";
import Auditors from "../pages/About/Auditors";
import Approved from "../pages/About/Approved";
import Rules from "../pages/About/Rules";
import ConfirmationLayout from "../layouts/ConfirmationLayout";
import Employee from "../pages/Confirmation/Employee";
import Product from "../pages/Confirmation/Product";

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
    layout: AboutLayout,
    element: (
      <AboutLayout>
        <Outlet />
      </AboutLayout>
    ),
    children: [
      {
        index: true, // /about
        element: <About />,
      },
      {
        path: "leadership", // /about/leadership
        element: <Leadership />,
      },
      {
        path: "management", // /about/contact
        element: <Management />,
      },
      {
        path: "accreditation", // /about/contact
        element: <Accreditation />,
      },
      {
        path: "auditors",
        element: <Auditors />,
      },
      {
        path: "approved",
        element: <Approved />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
    ],
  },
  {
    path: "/confirm",
    label: "Confirm",
    layout: ConfirmationLayout,
    element: (
      <ConfirmationLayout>
        <Outlet />
      </ConfirmationLayout>
    ),
    children: [
      {
        index: true, // /about
        element: <About />,
      },
      {
        path: "approve", // /about/leadership
        element: <Approve />,
      },
      {
        path: "employee", // /about/contact
        element: <Employee />,
      },
      {
        path: "product", // /about/contact
        element: <Product />,
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
