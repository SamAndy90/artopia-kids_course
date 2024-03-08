import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import { TbX } from "react-icons/tb";

type Art = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

type CartProps = {
  isOpen: boolean;
  closeModal: () => void;
  artsToBuy: Art[] | [];
};

export const Cart = ({ isOpen, closeModal, artsToBuy }: CartProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black-500/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Ready to Buy
                </Dialog.Title>

                <ul className="bg-white p-2 min-w-40 text-black-500 flex flex-col">
                  {artsToBuy.length ? (
                    artsToBuy.map((art) => {
                      return (
                        <li
                          key={art.id}
                          className={
                            "py-3 px-2 text-lg rounded-md transition-colors hover:bg-_violet-50"
                          }
                        ></li>
                      );
                    })
                  ) : (
                    <li
                      className={"py-3 px-2 text-lg rounded-md"}
                    >{`Your cart is emty`}</li>
                  )}
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export function ArtCard(art: Art) {
  return (
    <div>
      <button>
        <TbX />
      </button>
      <div className={"relative"}>
        <Image
          src={art.image}
          alt={art.title}
          fill
          className={"object-cover"}
        />
      </div>
      <div>
        <h3>{art.title}</h3>
        <p>{art.description}</p>
        <span>{art.price}</span>
      </div>
    </div>
  );
}
