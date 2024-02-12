"use client";
import Image from "next/image";
import arrowImg from "./static/arrow.svg";
import { useState } from "react";
export function FooterForm() {
  const [email, setEmail] = useState("");
  return (
    <form className="flex items-center " action="">
      <input
        onChange={(e) => {
          setEmail(e.target.value);
          console.log(email);
        }}
        value={email}
        placeholder="Email addres"
        className=" p-4 email-input rounded-3xl bg-zinc-800 h-14 w-[350px] focus:border focus:border-purple-500 transition-colors"
        type="email"
      />

      <button
        className=" ml-[-48px]  left-0 rounded-full bg-standart_violet-500 h-[28px] w-[28px] "
        type="button"
      >
        <Image
          src={arrowImg}
          width="28"
          height="28"
          className=" ml-[7px]
         size-4"
        />
      </button>
    </form>
  );
}
