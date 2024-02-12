import { PropsWithChildren } from "react";
import CastleIMG from "./static/castle.jpg";
import Image from "next/image";

export const AuthWrapper = ({ children }: PropsWithChildren) => {
  return (
    <section className={"flex min-h-screen"}>
      <div
        className={"basis-1/2 relative px-4 py-20 flex flex-col justify-end"}
      >
        <Image
          src={CastleIMG}
          alt={"Castle"}
          fill
          className={"object-cover -z-10"}
        />
        <div className={"bg-black/30 backdrop-blur-2xl py-9 px-12 rounded-3xl"}>
          <h4 className={"font-semibold text-3xl"}>
            Discover and Own Unique Digital Art
          </h4>
          <p className={"font-medium text-xl"}>
            Welcome to our digital art marketplace where you can discover and
            own unique digital creations from talented artists around the world.
            Our platform is dedicated to showcasing the finest digital artwork
            in various styles and formats, ranging from illustrations and
            paintings to 3D sculptures and animations.
          </p>
        </div>
      </div>
      <div className={"basis-1/2 bg-white pl-5 pr-12 py-16"}>{children}</div>
    </section>
  );
};
