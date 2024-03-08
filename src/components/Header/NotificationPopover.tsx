import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MdNotificationsNone } from "react-icons/md";

type NotificationPopoverProps = {
  notifications: string[] | [];
};

export const NotificationPopover = ({
  notifications = [],
}: NotificationPopoverProps) => {
  return (
    <Popover as={"div"} className="relative leading-none">
      {({ open }) => (
        <>
          <Popover.Button className={""}>
            <span
              className={
                "relative before:absolute before:top-1 before:right-2 before:w-2 before:h-2 before:rounded-full before:bg-red-500"
              }
            >
              <MdNotificationsNone
                className={"w-9 h-9 hover:text-_violet-500 transition-colors"}
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
                <ul className="bg-white p-2 min-w-40 text-black-500 flex flex-col">
                  {notifications.length ? (
                    notifications.map((notification) => {
                      return (
                        <li
                          key={notification}
                          className={
                            "py-3 px-2 text-lg rounded-md transition-colors hover:bg-_violet-50"
                          }
                        >
                          {notification}
                        </li>
                      );
                    })
                  ) : (
                    <li
                      className={"py-3 px-2 text-lg rounded-md"}
                    >{`You haven't notifications`}</li>
                  )}
                </ul>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
