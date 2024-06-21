import { Route, Routes } from "react-router-dom";

import { ThemeMode } from "@constants/themeMode";
import { useTheme } from "@hooks/useTheme";

import { Home } from "@pages/Home";
import { MainLayout } from "@pages/MainLayout";

import styles from "./styles.module.scss";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "timeline", element: <div>timeline</div> },
      { path: "card", element: <div>card</div> },
      { path: "contacts", element: <div>contacts</div> },
      { path: "*", element: <div>Note found</div> }
    ]
  }
];

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <div className={theme === ThemeMode.dark ? styles.app : styles.app_white}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((child, childIndex) => (
                <Route key={childIndex} {...child} />
              ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
};

export { App };
