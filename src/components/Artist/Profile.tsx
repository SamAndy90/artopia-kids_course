import Image from "next/image";
import Avatar from "./static/artist-avatar.png";
import Link from "next/link";
import { PiLinkSimpleBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

type ProfileProps = {
  id?: string;
};

export default function Profile({ id }: ProfileProps) {
  return (
    <div className={"flex flex-col items-center -translate-y-[67px]"}>
      <div
        className={
          "relative rounded-full overflow-hidden w-[134px] h-[134px] mb-6"
        }
      >
        <Image
          src={Avatar}
          alt={"Avatar Image"}
          fill
          className={"object-cover"}
        />{" "}
      </div>

      <h4 className={"font-semibold text-2xl mb-3"}>John Doe</h4>
      <p className={"text-xl mb-2"}>3d artist and modeler</p>
      <p className={"text-[15px] flex gap-4 items-center mb-2.5"}>
        Portfolio{" "}
        <Link href={"#"}>
          <PiLinkSimpleBold />
        </Link>
      </p>
      <p className={"flex items-center gap-3 mb-6"}>
        Dubai, United Arab Emirates{" "}
        <span>
          <IoLocationOutline />
        </span>
      </p>
      <button
        className={
          "flex hover:bg-_violet-700 transition-colors gap-4 font-medium justify-center items-center px-[52px] py-3 bg-_violet-950 rounded mb-10"
        }
      >
        <FiUserCheck />
        <span>Follow</span>
      </button>
      <div
        className={
          "flex gap-2 justify-between py-4 border-t border-b w-full mx-1.5 mb-7"
        }
      >
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>46</span>
          <span className={"font-medium text-sm"}>Followers</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>27</span>
          <span className={"font-medium text-sm"}>Following</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>142</span>
          <span className={"font-medium text-sm"}>Items</span>
        </div>
        <div className={"flex flex-col gap-0.5"}>
          <span className={"font-semibold text-xl"}>342</span>
          <span className={"font-medium text-sm"}>Likes</span>
        </div>
      </div>
      <Link
        href={`/artist/${id}/upload`}
        className={
          "flex gap-4 font-medium items-center hover:bg-_violet-700 transition-colors justify-center px-[52px] py-3 bg-_violet-950 rounded mb-10 w-full"
        }
      >
        <FiUpload />
        <span>Upload Product</span>
      </Link>
    </div>
  );
}
