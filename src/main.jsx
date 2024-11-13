import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Provider from "./providers/Provider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "books/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
      },
      {
        path: "listedBooks",
        loader: () => fetch("/booksData.json"),
        element: <PrivateRoute><ListedBooks></ListedBooks></PrivateRoute>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
    <ToastContainer/>
  </React.StrictMode>
);