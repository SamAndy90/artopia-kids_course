"use client";

import { usePathname } from "next/navigation";
import Container from "common/Container";
import Link from "next/link";
import SignIn from "./SignInButton";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { TbX } from "react-icons/tb";

import { FormEvent, useState } from "react";
import { Cart } from "components/Header/Cart";
import { AvatarPopover } from "./AvatarPopover";
import { NotificationPopover } from "./NotificationPopover";
import clsx from "clsx";
import { useAuth } from "contexts/auth";
import LogoutButton from "./LogoutButton";
import SignInButton from "./SignInButton";

export const links = [
  {
    url: "/discover",
    title: "Discover",
  },
  {
    url: "/forum",
    title: "Forum",
  },
  {
    url: "/news",
    title: "News",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [avatar, setAvatar] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if (
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification")
  )
    return;

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    console.log({ query });
    setQuery("");
    setIsSearch(false);
  }
  return (
    <>
      <header className="fixed z-50 w-full bg-black-500">
        <Container>
          <div
            className={clsx("py-4 gap-x-4 flex items-center justify-between", {
              "!py-2": pathname.startsWith("/artist"),
            })}
          >
            <Link
              href={"/"}
              className=" font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white"
            >
              Artopia
            </Link>

            <nav className="md:flex hidden gap-x-7 lg:gap-x-16 items-center justify-between">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.url}
                  className={clsx(
                    "text-[22px] font-semibold hover:-translate-y-1 transition-transform",
                    {
                      "text-_violet-500": pathname === link.url,
                    }
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            {!isLoggedIn && (
              <Link href={"/login"} className={"hidden md:block"}>
                <SignInButton />
              </Link>
            )}
            {isLoggedIn && (
              <div className={"hidden md:flex items-center gap-x-6 lg:gap-x-8"}>
                {!isSearch ? (
                  <button
                    className={"outline-none border-none"}
                    onClick={() => setIsSearch(true)}
                  >
                    <IoMdSearch
                      className={
                        "w-9 h-9 hover:text-_violet-500 transition-colors"
                      }
                    />
                  </button>
                ) : (
                  <form
                    className={clsx(
                      "overflow-hidden flex items-center rounded-full focus-within:ring-1 focus-within:ring-_violet-500 bg-zinc-800 gap-1 px-2 py-1"
                    )}
                    onSubmit={handleSearch}
                  >
                    <input
                      className={"outline-none bg-transparent px-2"}
                      value={query}
                      type="text"
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                      type={"submit"}
                      className={"outline-none border-none"}
                    >
                      <IoMdSearch
                        className={
                          "w-8 h-8 hover:text-_violet-500 transition-colors"
                        }
                      />
                    </button>
                  </form>
                )}
                <button
                  className={"outline-none border-none"}
                  onClick={() => setIsCartOpen(true)}
                >
                  <MdOutlineShoppingCart
                    className={
                      "w-9 h-9 hover:text-_violet-500 transition-colors"
                    }
                  />
                </button>
                <AvatarPopover image={avatar} />
                <NotificationPopover
                  notifications={[
                    "Notification 1",
                    "Notification 2",
                    "Notification 3",
                  ]}
                />
              </div>
            )}
            <button onClick={() => setIsMenuOpen(true)} className={"md:hidden"}>
              <IoMenu className={"w-8 h-8"} />
            </button>
            <div
              className={clsx(
                "fixed min-w-[200px] top-0 right-0 h-full bg-_violet-990 z-[9999] px-3 transition-transform",
                {
                  "translate-x-full": !isMenuOpen,
                }
              )}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className={"absolute top-4 right-4"}
              >
                <TbX className={"w-6 h-6"} />
              </button>
              <nav className="flex flex-col gap-y-4 mt-14 text-center mb-8">
                {links.map((link) => (
                  <Link
                    href={link.url}
                    onClick={() => setIsMenuOpen(false)}
                    key={link.url}
                    className={clsx(
                      "text-[22px]  font-semibold hover:-translate-y-1 transition-transform",
                      {
                        "text-_violet-500": pathname === link.url,
                      }
                    )}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
              {!isLoggedIn && (
                <Link href={"/login"}>
                  <SignInButton
                    onClick={() => setIsMenuOpen(false)}
                    className={"w-full"}
                  />
                </Link>
              )}
              {isLoggedIn && (
                <LogoutButton
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsMenuOpen(false);
                  }}
                  className={"w-full"}
                />
              )}
            </div>
          </div>
        </Container>
      </header>
      <Cart
        artsToBuy={[]}
        isOpen={isCartOpen}
        closeModal={() => setIsCartOpen(false)}
      />
    </>
  );
}
