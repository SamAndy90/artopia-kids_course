"use client";

import { usePathname } from "next/navigation";
import HeaderBtn from "./HeaderBtn";
import Navigation from "./Navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname.includes("/login") || pathname.includes("/register")) return;

  return (
    <header className="w-[1310px] h-12 fixed mt-5 flex items-center justify-between">
      <h1 className=" font-bold text-[40px] text-white">Artopia</h1>
      <Navigation />
      <HeaderBtn />
    </header>
  );
}
