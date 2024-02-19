import { PropsWithChildren } from "react";
import Image from "next/image";
import BG from "../../../public/castle.jpg";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section className={"relative min-h-screen"}>
        {children}
        <Image src={BG} alt={"Background"} fill className={"object-cover"} />
      </section>
    </>
  );
}
