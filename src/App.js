import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AddService from "./Pages/AddService/AddService";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import ServiceReview from "./Pages/ServiceReview/ServiceReview";
import PrivateRouter from "./Router/PrivateRouter/PrivateRouter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () => fetch("http://localhost:5000/services"),
        },
        {
          path: "/serviceDetails/:id",
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/addService",
          element: <AddService></AddService>,
        },
        {
          path: "/serviceReview",
          element: (
            <PrivateRouter>
              <ServiceReview></ServiceReview>
            </PrivateRouter>
          ),
          loader: () => fetch("http://localhost:5000/reviews"),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
