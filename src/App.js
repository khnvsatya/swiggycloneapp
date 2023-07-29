import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { OnlineContext, UserContext } from "./utils/UserContext";
import UseOnlineStatus from "./utils/UseOnlineStatus";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));
const RestaurantMenuCard = lazy(() =>
  import("./components/RestaurantMenuCard")
);

const App = () => {
  const onlineState = UseOnlineStatus();
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
          <UserContext.Provider value={{ loggedInUser: username }}>
            <Header />
          </UserContext.Provider>
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
        element: <Cart />,
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
