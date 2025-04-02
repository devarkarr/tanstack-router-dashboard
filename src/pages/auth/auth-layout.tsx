import { ReactNode } from "@tanstack/react-router";
import { ScanFace } from "lucide-react";

interface AuthLayout {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayout) => {
  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <div className="flex items-center gap-3 justify-center">
          <ScanFace />
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
            Tanstack Router
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
