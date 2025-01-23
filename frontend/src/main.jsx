import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import Errors from "./pages/Errors.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const SendLetter = lazy(() => import("./pages/SendLetter.jsx"));
const Letters = lazy(() => import("./pages/Letters.jsx"));
const ViewLetter = lazy(() => import("./pages/ViewLetter.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/profile/settings",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "/connections/send",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <SendLetter />
          </Suspense>
        ),
      },
      {
        path: "/letters",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <Letters />
          </Suspense>
        ),
      },
      {
        path: "/letters/:letterType/:letterId",
        element: (
          <Suspense fallback={<h1>Fallback Loading....</h1>}>
            <ViewLetter />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
