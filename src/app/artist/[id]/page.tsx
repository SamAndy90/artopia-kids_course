import Container from "common/Container";
import Banner from "components/Artist/Banner";
import Filter from "components/Artist/Filter";
import ProductsList from "components/Artist/ProductsList";
import Profile from "components/Artist/Profile";
import ProductIMG1 from "components/Artist/static/product_1.jpg";
import ProductIMG2 from "components/Artist/static/product_2.jpg";
import ProductIMG3 from "components/Artist/static/product_3.jpg";
import ProductIMG4 from "components/Artist/static/product_4.jpg";
import ProductIMG5 from "components/Artist/static/product_5.jpg";
import ProductIMG6 from "components/Artist/static/product_6.jpg";
import ProductIMG7 from "components/Artist/static/product_7.jpg";
import ProductIMG8 from "components/Artist/static/product_8.jpg";
import ProductIMG9 from "components/Artist/static/product_9.jpg";
import AvatarIMG from "components/Artist/static/artist-avatar.png";

const data = [
  {
    id: "1",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG1,
    price: 990,
  },
  {
    id: "2",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG2,
    price: 990,
  },
  {
    id: "3",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG3,
    price: 990,
  },
  {
    id: "4",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG4,
    price: 990,
  },
  {
    id: "5",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG5,
    price: 990,
  },
  {
    id: "6",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG6,
    price: 990,
  },
  {
    id: "7",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG7,
    price: 990,
  },
  {
    id: "8",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG8,
    price: 990,
  },
  {
    id: "9",
    creator_name: "John Doe",
    creator_avatar: AvatarIMG,
    product_name: "Da Viper",
    product_image: ProductIMG9,
    price: 990,
  },
];

export default function ArtistPage() {
  return (
    <section>
      <Container className={"!max-w-screen-2xl"}>
        <div className={"flex gap-10"}>
          <aside className={"basis-[402px] px-[30px]"}>
            <Profile />
          </aside>
          <div className={"flex-1 py-20"}>
            <Banner />
            <Filter />
            <ProductsList products={data} />
          </div>
        </div>
      </Container>
    </section>
  );
}
