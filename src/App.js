import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { OnlineContext, userContext } from "./utils/userContext";
import useOnlineStatus from "./utils/useOnlineStatus";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const RestaurantMenuCard = lazy(() =>
  import("./components/RestaurantMenuCard")
);
const Cart = lazy(() => import("./components/Cart"));
const About = lazy(() => import("./components/About"));

const App = () => {
  const onlineState = useOnlineStatus();
  const [username, setUsername] = useState();

  useEffect(() => {
    const data = {
      name: "sai",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <OnlineContext.Provider value={onlineState}>
        <div className="app">
          <userContext.Provider value={{ loggedInUser: username }}>
            <Header />
          </userContext.Provider>
          <Outlet />
        </div>
      </OnlineContext.Provider>
    </Provider>
  );
};

export default App;

export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback="loading">
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback="Loading...">
            <RestaurantMenuCard />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
