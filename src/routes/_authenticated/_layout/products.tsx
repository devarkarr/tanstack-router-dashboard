import Products from "@/pages/products";
import { productsQueryOptions } from "@/services/products/queries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/_layout/products")({
  loader: async ({ context: { queryClient } }) =>
    await queryClient.ensureQueryData(productsQueryOptions),
  component: Products,
});
