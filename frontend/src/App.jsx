// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import HomePage from "./components/HomePage";
// import ForgetPassword from "./components/ForgetPass";
// import ResetPassword from "./components/ResetPass";
// import AllTask from "./components/AllTask";
// import ShowUsers from "./components/ShowUsers";
// import Dashboard from "./components/Dashboard";

// // Define the routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <SignUp />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/forget-pass",
//     element: <ForgetPassword />,
//   },
//   {
//     path: "/reset-pass",
//     element: <ResetPassword />,
//   },
//   {
//     path: "/homepage",
//     element: <HomePage />,
//   },
//   {
//     path: "/All-task",
//     element: <AllTask />,
//   },
//   {
//     path: "/showusers",
//     element: <ShowUsers />,
//   },
//   {
//     path: "/dashboard", // ✅ New Dashboard route
//     element: <Dashboard />,
//   },
// ]);

// // App component
// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;\






import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import ForgetPassword from "./components/ForgetPass";
import ResetPassword from "./components/ResetPass";
import TaskPage from "./components/TaskPage"; // Assuming this is the task management page
import ShowUsers from "./components/ShowUsers";
import Dashboard from "./components/Dashboard";
import AdminPage from "./components/AdminPage"; // Admin Page
import AdminDashboard from "./components/AdminDashboard"; // Admin Dashboard

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-pass",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-pass",
    element: <ResetPassword />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
  {
    path: "/all-task",  // Task management route
    element: <TaskPage />,
  },
  {
    path: "/showusers",  // Show users route
    element: <ShowUsers />,
  },
  {
    path: "/dashboard",  // Regular Dashboard route
    element: <Dashboard />,
  },
  {
    path: "/admin",  // Admin Page route
    element: <AdminPage />,
  },
  {
    path: "/admin-dashboard",  // Admin Dashboard route
    element: <AdminDashboard />,
  },
]);

// App component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;