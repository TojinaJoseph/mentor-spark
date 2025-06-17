import "./App.css";
import Admin from "./pages/admin/Admin";
import Error from "./pages/error/Error";
import Root from "./pages/layout/Root";
import Login from "./pages/login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile/Profile";

// const routeDefinitions = createRoutesFromElements(<Route>
//   <Route path="/" element={<Login/>}/>
//   <Route path="/admin" element={<Admin/>}/>

// </Route>);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Login /> },
      { path: "admin", element: <Admin /> },
      { path: "profile/:id", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
