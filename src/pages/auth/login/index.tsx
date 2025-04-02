import { Card } from "@/components/atoms/card";
import AuthLayout from "../auth-layout";
import LoginForm from "./components/login-form";

const Login = () => {
  return (
    <AuthLayout>
      <Card className="p-6">
        <div className="flex flex-col space-y-2 text-left">
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and password below <br />
            to log into your account
          </p>
        </div>
        <LoginForm />
      </Card>
    </AuthLayout>
  );
};

export default Login;
