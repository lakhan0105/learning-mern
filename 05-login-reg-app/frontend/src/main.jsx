import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
