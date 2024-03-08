import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import NoAvatar from "./static/noavatar.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

type AvatarPopoverProps = {
  image: string;
};

export const AvatarPopover = ({ image }: AvatarPopoverProps) => {
  return (
    <Popover as={"div"} className="relative leading-none">
      {({ open }) => (
        <>
          <Popover.Button className={""}>
            <span
              className={"w-9 h-9 rounded-full relative overflow-hidden block"}
            >
              <Image
                src={image ? image : NoAvatar}
                alt={"No Avatar"}
                fill
                className={"object-cover"}
              />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 max-w-sm transform px-4 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-lg">
                <nav className="bg-white p-2 min-w-40 text-black-500 flex flex-col">
                  <Link
                    className={
                      "py-3 px-2 text-lg rounded-md transition-colors hover:bg-_violet-50"
                    }
                    href={"/profile"}
                  >
                    Profile
                  </Link>
                  <Link
                    className={
                      "py-3 px-2 text-lg rounded-md transition-colors hover:bg-_violet-50"
                    }
                    href={"/profile"}
                  >
                    Settings
                  </Link>
                  <LogoutButton className={"mt-4 rounded-md"} />
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
