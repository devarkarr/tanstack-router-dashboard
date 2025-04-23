import { DataTable } from "@/components/organisms/data-table"
import { productsQueryOptions } from "@/services/products/queries";
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "./columns";


const ProductTable = () => {
  const {data} = useSuspenseQuery(productsQueryOptions);

  return (
    <DataTable columns={columns} data={data} />
    
  )
}

export default ProductTable