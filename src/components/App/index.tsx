import { Route, Routes } from "react-router-dom";

import { useTheme } from "@hooks/useTheme";

import { BankCard } from "@pages/BankCard";
import { Contacts } from "@pages/Contacts";
import { Home } from "@pages/Home";
import { MainLayout } from "@pages/MainLayout";
import Timeline from "@pages/Timeline";

import styles from "./styles.module.scss";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "timeline", element: <Timeline /> },
      { path: "card", element: <BankCard /> },
      { path: "contacts", element: <Contacts /> },
      { path: "*", element: <div>Note found</div> }
    ]
  }
];

const App: React.FC = () => {
  const darkTheme = useTheme();

  const classApp = darkTheme ? styles.app : styles.app_white;

  return (
    <div className={classApp}>
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
