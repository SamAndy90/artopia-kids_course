import { Product } from "data-fetchers/types";
import Image from "next/image";
import Link from "next/link";
type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    creator_avatar,
    creator_name,
    price,
    product_image,
    product_name,
  } = product;
  return (
    <Link
      href={`products/${id}`}
      className="w-[320px] h-[400px] relative rounded-3xl overflow-hidden"
    >
      <Image fill src={product_image} alt="NFT"></Image>
      <div className="absolute bottom-0 w-full h-1/4 bg-opacity-95 flex flex-col gap-2 bg-[#343c3c] p-2">
        <h3 className="text-xl font-bold">{product_name}</h3>
        <div className="flex gap-3">
          <Image
            width={42}
            height={42}
            src={creator_avatar}
            alt="Creator Avatar"
          />
          <div>
            <p className=" text-[#777e90]  text-xs">Creator</p>
            <h4 className="text-lg ">{creator_name}</h4>
          </div>
          <div className="absolute right-10">
            <p className=" text-[#777e90]  text-xs">Cost</p>
            <h4 className="text-lg ">{price}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
