import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import HomeView from "./pages/HomeView.jsx";
import AboutView from "./pages/AboutView.jsx";
import ContactView from "./pages/ContactView.jsx";
import TodoView from "./pages/TodoView.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeView />} />

      <Route path="about" element={<AboutView />} />

      <Route path="contact" element={<ContactView />} />

      <Route path="todo" element={<TodoView />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
