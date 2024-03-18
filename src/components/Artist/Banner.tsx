import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import BannerIMG from "./static/banner.png";

export default function Bunner() {
  return (
    <div className={"relative rounded-3xl overflow-hidden p-11 mb-8"}>
      <div className={"text-2xl max-w-[430px]"}>
        <p className={"font-medium mb-10"}>
          Showcase and sell your art in the mostawesome digital art marketplace
        </p>
        <Link
          href={"#"}
          className={
            "inline-flex items-end gap-5 opacity-70 hover:opacity-100 transition group"
          }
        >
          <span>Become a seller</span>
          <FaArrowRight className={"group-hover:translate-x-2 transition"} />
        </Link>
      </div>
      <Image
        src={BannerIMG}
        alt={"Banner Background"}
        fill
        className={"object-cover object-top -z-10 select-none"}
      />
    </div>
  );
}
