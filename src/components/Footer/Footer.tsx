"use client";

import { usePathname } from "next/navigation";
import { FooterCopyright } from "./FooterCopyright";
import { FooterNavigation } from "./FooterNavigation";
import { FooterRegister } from "./FooterRegister";
export default function Footer() {
  const pathname = usePathname();

  if (
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification")
  )
    return;

  return (
    <footer className="flex flex-col gap-8 pl-10 text-white bg-[#504f4f74]">
      <div className=" pt-5 flex gap-[70px]">
        <FooterRegister />
        <FooterNavigation />
      </div>
      <FooterCopyright />
    </footer>
  );
}
