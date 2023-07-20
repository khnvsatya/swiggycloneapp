import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
const About = lazy(() => import("./components/About"));
const RestaurantMenuCard = lazy(() =>
  import("./components/RestaurantMenuCard")
);

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
