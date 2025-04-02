import App from "@/components/templates/auth_layout/App";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/_layout")({
  component: App,
});
