import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Add } from "./pages/Add/Add";
import { Gig } from "./pages/Gig/Gig";
import { Gigs } from "./pages/Gigs/Gigs";
import { Home } from "./pages/Home/Home";
import { Message } from "./pages/Message/Message";
import { Messages } from "./pages/Messages/Messages";
import { Mygigs } from "./pages/MyGigs/Mygigs";
import { Orders } from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
         
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/gigs/",
          element: <Gigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <Mygigs />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },

        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
