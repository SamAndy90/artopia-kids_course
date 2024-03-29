import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  creator_name: string;
  creator_avatar: StaticImageData;
  product_name: string;
  product_image: StaticImageData;
  price: number;
};
