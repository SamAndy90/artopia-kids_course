import Image from "next/image";
import { PropsWithChildren } from "react";
import BG from "components/Artist/static/artist-bg.jpg";

export default function ArtistLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section className={"pt-[84px] md:pt-[112px]"}>
        <Image src={BG} alt={"Background"} />
      </section>
      {children}
    </>
  );
}
