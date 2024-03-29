import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";

export default function SelectInput() {
  const [value, setValue] = useState("");

  return (
    <Listbox value={value} onChange={setValue}>
      <div className="relative min-w-[195px] text-white">
        <Listbox.Button className="relative w-full h-full px-3 rounded border py-2 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">Price: {value || "-"}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 text-black-500 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
            <Listbox.Option
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 px-4 transition ${
                  selected
                    ? "bg-_violet-900 text-white"
                    : active
                    ? "bg-_violet-500 text-white"
                    : ""
                }`
              }
              value={"low-to-high"}
            >
              <span className={"block truncate"}>Low to High</span>
            </Listbox.Option>
            <Listbox.Option
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 px-4 transition ${
                  selected
                    ? "bg-_violet-900 text-white"
                    : active
                    ? "bg-_violet-500 text-white"
                    : ""
                }`
              }
              value={"high-to-low"}
            >
              <span className={"block truncate"}>High to Low</span>
            </Listbox.Option>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
