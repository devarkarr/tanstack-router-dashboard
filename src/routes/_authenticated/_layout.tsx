import App from "@/components/templates/App";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_layout")({
  component: App,
});
