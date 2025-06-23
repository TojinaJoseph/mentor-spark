import "./App.css";
import Admin from "./pages/admin/Admin";
import Error from "./pages/error/Error";
import Login from "./pages/login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import MentorsList from "./pages/mentorList/MentorsList";
import MenteeList from "./pages/menteeList/MenteeList";
import AdminRoot from "./pages/layout/AdminRoot";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "admin",
        element: <AdminRoot />,
        errorElement: <Error />,
        children: [
          { index: true, element: <Admin /> },
          { path: "mentors", element: <MentorsList /> },
          { path: "mentees", element: <MenteeList /> },
        ],
      },
      { path: "profile/:id", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
