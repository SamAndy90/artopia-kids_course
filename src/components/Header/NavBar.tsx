"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-16 items-center justify-between">
      <Link
        href={"/discover"}
        className={clsx(
          "text-[22px] font-semibold hover:-translate-y-1 transition-transform",
          {
            "text-_violet-500": pathname === "/discover",
          }
        )}
      >
        Discover
      </Link>
      <Link
        href={"/forum"}
        className={clsx(
          "text-[22px] font-semibold hover:-translate-y-1 transition-transform",
          {
            "text-_violet-500": pathname === "/forum",
          }
        )}
      >
        Forum
      </Link>
      <Link
        href={"/news"}
        className={clsx(
          "text-[22px] font-semibold hover:-translate-y-1 transition-transform",
          {
            "text-_violet-500": pathname === "/news",
          }
        )}
      >
        News
      </Link>
      <Link
        href={"/blog"}
        className={clsx(
          "text-[22px] font-semibold hover:-translate-y-1 transition-transform",
          {
            "text-_violet-500": pathname === "/blog",
          }
        )}
      >
        Blog
      </Link>
    </nav>
  );
}
