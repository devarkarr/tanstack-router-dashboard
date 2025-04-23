import { queryOptions } from "@tanstack/react-query";
import api from "../api";

const getProducts = async () => {
  const response = await api.get("products");
  return response.data;
};

export const productsQueryOptions = queryOptions({
  queryKey: ["get-products"],
  queryFn: () => getProducts(),
});
