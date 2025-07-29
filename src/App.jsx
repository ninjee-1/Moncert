import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes/index";
import "@fontsource/inter/400.css"; // Regular
import "@fontsource/inter/600.css"; // SemiBold

function renderRoutes(routeList) {
  return routeList.map(({ path, element, layout: Layout = ({ children }) => <>
        {children}
      </> }) => (
    <Route
      key={path}
      path={path}
      element={<Layout>{element}</Layout>} // 👉 layout ашиглаж байна
    />
  ));
}

function App() {
  return <Routes>{renderRoutes(routes)}</Routes>;
}

export default App;
