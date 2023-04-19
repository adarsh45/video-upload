import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Upload from "./pages/Upload";
import LiveCamera from "./pages/LiveCamera";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/live",
    element: <LiveCamera />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
