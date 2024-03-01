import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import NoAvatar from "./static/noavatar.png";
import Link from "next/link";

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
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                <div className="relative bg-lime-200 p-7 text-black-500 flex flex-col">
                  <Link href={"/profile"}>Profile</Link>
                  <Link href={"/profile"}>Settings</Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
