import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protectation from "./components/Protectation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  console.log("App: ", user);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protectation user={user}>
          <Home setUser={setUser} />
        </Protectation>
      ),
    },
    {
      path: "/contact",
      element: (
        <Protectation user={user}>
          <Contact />
        </Protectation>
      ),
    },
    {
      path: "/about",
      element: (
        <Protectation user={user}>
          <About />
        </Protectation>
      ),
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login setUser={setUser} />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  return <RouterProvider router={routes} />;
}