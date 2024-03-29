"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SelectInput from "./SelectInput";
import { IoGridOutline } from "react-icons/io5";
import { MdGridOn } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { VscSend } from "react-icons/vsc";

export default function Filter() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");
  const [grid, setGrid] = useState("grid-3");

  return (
    <div className={"flex gap-3.5 w-full mb-11"}>
      {/* Search */}
      <div
        className={clsx(
          "flex flex-1 gap-6 items-center px-5 py-3 border rounded transition-colors",
          {
            "border-_violet-500": isFocused,
          }
        )}
      >
        <button onClick={() => setSearchQuery("")}>
          <IoSearch className={"w-6 h-6"} />
        </button>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={"Search by name or attribute"}
          type={"text"}
          className={
            "placeholder:text-xs bg-transparent outline-none border-none w-full"
          }
        />
      </div>
      {/* Select */}
      <SelectInput />
      <div className={"flex items-center"}>
        <div
          className={clsx(
            "flex items-center justify-center h-full px-4 rounded",
            { "bg-gray-500": grid === "grid-2" }
          )}
          onClick={() => setGrid("grid-2")}
        >
          <IoGridOutline className={"w-7 h-7"} />
        </div>
        <div
          className={clsx(
            "flex items-center justify-center h-full px-4 rounded",
            { "bg-gray-500": grid === "list" }
          )}
          onClick={() => setGrid("list")}
        >
          <LuLayoutList className={"w-7 h-7"} />
        </div>
        <div
          className={clsx(
            "flex items-center justify-center h-full px-4 rounded",
            { "bg-gray-500": grid === "grid-3" }
          )}
          onClick={() => setGrid("grid-3")}
        >
          <MdGridOn className={"w-7 h-7"} />
        </div>
      </div>
      <button
        className={
          "flex hover:bg-_violet-700 transition-colors gap-4 font-medium justify-center items-center px-8 py-3 bg-_violet-950 rounded"
        }
      >
        <VscSend className={"w-6 h-6"} />
        <span>Message</span>
      </button>
    </div>
  );
}
