import Image from "next/image";
import MainImg1 from "./static/MainPageImg1.jpg";
import MainImg2 from "./static/MainPageImg2.jpg";
export default function MainPageImages() {
  return (
    <div className="flex z-10 pl-10 gap-5">
      <Image src={MainImg1} height={565} width={270} alt="HeroImgleft" />
      <Image src={MainImg2} height={565} width={270} alt="HeroImgleft" />
    </div>
  );
}
