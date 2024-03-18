"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import SelectInput from "./SelectInput";

export default function Filter() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      {/* Search */}
      <div
        className={clsx(
          "flex gap-6 items-center px-5 py-3 border rounded transition-colors",
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
      {/* <select name="price">
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select> */}
      <SelectInput />
    </div>
  );
}
