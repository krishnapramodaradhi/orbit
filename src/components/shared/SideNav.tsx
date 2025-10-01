import { NavLink } from "react-router-dom";
import {
  Orbit,
  LayoutDashboard,
  UserPen,
  User,
  Settings,
  FolderKanban,
  CheckCheck,
  LogOut,
  Sun,
  EarthLock,
  Moon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "../ThemeProvider";

const topNavItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
  { name: "Projects", path: "/projects", icon: <FolderKanban size={18} /> },
  { name: "Tasks", path: "/tasks", icon: <CheckCheck size={18} /> },
];

const userNavItems = [
  { name: "Profile", path: "/user/profile", icon: <User size={18} /> },
  { name: "Settings", path: "/user/settings", icon: <Settings size={18} /> },
];

const adminNavItems = [
  {
    name: "User Management",
    path: "/admin/users",
    icon: <UserPen size={18} />,
  },
  {
    name: "Security and Access",
    path: "/admin/security",
    icon: <EarthLock size={18} />,
  },
];

const SideNav = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex h-screen flex-col justify-between border-r p-4 bg-slate-50-background flex-1 fixed top-0 left-0 w-[15%]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl p-2 font-bold"
          >
            <Orbit size={24} />
            <h1 className="text-3xl">Orbit</h1>
          </NavLink>
          <span className="text-gray-500 text-sm">v0.1</span>
        </div>
        <ul>
          <span className="text-xs p-2 uppercase mb-2 text-gray-500">
            General
          </span>
          {topNavItems.map((item) => (
            <li
              key={item.name}
              className="hover:bg-gray-200 hover:dark:bg-gray-800 rounded-md"
            >
              <NavLink to={item.path} className="flex items-center gap-2 p-2">
                {item.icon}
                <span className="text-md">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <span className="text-xs p-2 uppercase mb-2 text-gray-500">User</span>
          {userNavItems.map((item) => (
            <li
              key={item.name}
              className="hover:bg-gray-200 hover:dark:bg-gray-800 rounded-md"
            >
              <NavLink to={item.path} className="flex items-center gap-2 p-2">
                {item.icon}
                <span className="text-md">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <span className="text-xs p-2 uppercase mb-2 text-gray-500">
            Admin
          </span>
          {adminNavItems.map((item) => (
            <li
              key={item.name}
              className="hover:bg-gray-200 hover:dark:bg-gray-800 rounded-md"
            >
              <NavLink to={item.path} className="flex items-center gap-2 p-2">
                {item.icon}
                <span className="text-md">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex justify-between items-center p-4">
        <li className="flex items-center gap-2">
          {theme === "dark" ? (
            <Button
              variant="ghost"
              className="p-0 cursor-pointer"
              onClick={() => setTheme("light")}
            >
              <Sun size={18} />
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="p-0 cursor-pointer"
              onClick={() => setTheme("dark")}
            >
              <Moon size={18} />
            </Button>
          )}
        </li>
        <li className="flex items-center gap-2">
          <LogOut size={16} />
          <span className="text-sm">Log Out</span>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
