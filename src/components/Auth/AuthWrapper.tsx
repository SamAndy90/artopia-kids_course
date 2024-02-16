import clsx from "clsx";
import CastleIMG from "./static/castle.jpg";
import Image from "next/image";

type AuthWrapperProps = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <section className={"flex min-h-screen"}>
      <div
        className={clsx(
          "shrink-0 relative px-4 py-20 flex flex-col justify-end",
          {
            "basis-1/2": children,
            "w-full": !children,
          }
        )}
      >
        <Image
          src={CastleIMG}
          alt={"Castle"}
          fill
          className={"object-cover -z-10"}
        />
        {children && (
          <div
            className={"bg-black/30 backdrop-blur-2xl py-9 px-12 rounded-3xl"}
          >
            <h4 className={"font-semibold text-3xl"}>
              Discover and Own Unique Digital Art
            </h4>
            <p className={"font-medium text-xl"}>
              Welcome to our digital art marketplace where you can discover and
              own unique digital creations from talented artists around the
              world. Our platform is dedicated to showcasing the finest digital
              artwork in various styles and formats, ranging from illustrations
              and paintings to 3D sculptures and animations.
            </p>
          </div>
        )}
      </div>
      {children && (
        <div className={"w-full bg-white pl-5 pr-12 py-16"}>{children}</div>
      )}
    </section>
  );
};
