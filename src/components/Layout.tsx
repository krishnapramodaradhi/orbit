import { Outlet } from "react-router-dom";
import SideNav from "./shared/SideNav";
import { ThemeProvider } from "./ThemeProvider";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="position-relative">
        <SideNav />
        <main className="ml-[15%]">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
