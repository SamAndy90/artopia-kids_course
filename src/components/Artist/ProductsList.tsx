import ProductCard from "common/ProductCard";
import { Product } from "data-fetchers/types";

type ProductsListProps = {
  products: Product[];
};
export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className={"flex flex-wrap gap-x-6 gap-y-8"}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
