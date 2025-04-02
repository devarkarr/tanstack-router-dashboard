import { SidebarTrigger } from "../atoms/sidebar";
import { ThemeSwitch } from "../atoms/theme-switch";

const AppHeader = () => {
  return (
    <div className=" h-8 flex justify-between items-center  ">
      <SidebarTrigger />
      <ThemeSwitch />
    </div>
  );
};

export default AppHeader;
