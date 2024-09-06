import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages";
import { Layout } from "@/components/layout";

const privateRouter: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];

export const router = createBrowserRouter([
  { element: <Layout />, children: privateRouter },
]);
