"use client";

import { usePathname } from "next/navigation";
import Container from "common/Container";
import Link from "next/link";
import NavBar from "./NavBar";
import SignIn from "./SignInButton";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

import { FormEvent, useState } from "react";
import { Cart } from "components/Header/Cart";
import { AvatarPopover } from "./AvatarPopover";
import { NotificationPopover } from "./NotificationPopover";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const [avatar, setAvatar] = useState("");
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [isSearch, setIsSearch] = useState(false);
  let [query, setQuery] = useState("");

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
          <div className={"py-4 flex items-center justify-between"}>
            <Link href={"/"} className=" font-bold text-[40px] text-white">
              Artopia
            </Link>
            <NavBar />
            {/* <SignIn /> */}
            <div className={"flex items-center gap-8"}>
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
                  className={"w-9 h-9 hover:text-_violet-500 transition-colors"}
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
