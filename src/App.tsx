import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ProjectList from "./pages/projects/ProjectList";
import ProjectDetails, {
  loader as projectDetailLoader,
} from "./pages/projects/ProjectDetails";
import TaskList from "./pages/tasks/TaskList";
import TaskDetails, {
  loader as taskDetailsLoader,
} from "./pages/tasks/TaskDetails";
import UserProfile from "./pages/user/Profile";
import UserSettings from "./pages/user/Settings";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      {
        path: "/projects",
        element: <ProjectList />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetails />,
        loader: projectDetailLoader,
      },
      {
        path: "/projects/:projectId/task/:taskId",
        element: <TaskDetails />,
        loader: taskDetailsLoader,
      },
      { path: "/tasks", element: <TaskList /> },
      { path: "/user/profile", element: <UserProfile /> },
      { path: "/user/settings", element: <UserSettings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
