"use client";

import { FaCheckCircle } from "react-icons/fa";
import { ModalButton } from "common/ui/Buttons/ModalButton";
import { useRouter } from "next/navigation";

export function Success() {
  const router = useRouter();
  return (
    <div
      className={
        "fixed w-screen h-screen z-50 flex items-center justify-center p-4"
      }
    >
      <div className={"absolute bg-black/40 w-full h-full -z-10"}></div>
      <div
        className={
          "bg-white px-12 py-10 rounded-2xl text-black w-full md:max-w-[800px]"
        }
      >
        <div className={"text-center"}>
          <FaCheckCircle
            className={"mx-auto mb-16 w-40 h-40 text-_violet-500"}
          />
          <h4 className={"text-4xl font-semibold mb-14"}>
            Account created successfully
          </h4>
          <ModalButton
            onClick={() => router.push("/complete")}
            className={"mb-6"}
            fullWidth={true}
          >
            Click here to continue
          </ModalButton>
        </div>
      </div>
    </div>
  );
}
