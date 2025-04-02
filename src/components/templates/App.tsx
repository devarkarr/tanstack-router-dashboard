import { SidebarProvider } from "@/components/atoms/sidebar";
import AppHeader from "@/components/organisms/app-header";
import { AppSidebar } from "@/components/organisms/app-sidebar";
import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="p-4 w-full">
          <AppHeader />
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};

export default App;
