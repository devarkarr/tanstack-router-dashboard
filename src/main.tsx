import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "./components/molecules/theme-provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
        if (error instanceof AxiosError)
          // showToastNoti("Too slow connection!", "error");
          // eslint-disable-next-line no-console
          console.log(failureCount);
        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        );
      },
      refetchOnWindowFocus: import.meta.env.PROD,
    },
    mutations: {
      // onError: (error) => handleServerError(error),
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        // showToastNoti("Session expired!");
        // useStore.getState().resetAuth();
      }
      if (error instanceof AxiosError && error.response?.status === 403) {
        // router.navigate("/forbidden", { replace: true });
      }
    },
  }),
});

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
