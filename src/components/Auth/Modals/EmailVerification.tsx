"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./static/verification-icon.svg";
import { ModalButton } from "common/ui/Buttons/ModalButton";
import { useRouter } from "next/navigation";

export function EmailVerification() {
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
          <Image src={Icon} alt={"Icon"} className={"mx-auto mb-14"} />
          <h4 className={"text-4xl font-semibold mb-10"}>Verify by Mail</h4>
          <p className={"text-2xl font-medium mb-12 text-[#222]"}>
            Please check your mail and follow the instruction to activate your
            account. If you did not receive the mail,or it has expired,you can
            resend another one.
          </p>
          <ModalButton
            onClick={() => router.push("/success")}
            className={"mb-6"}
            fullWidth={true}
          >
            Resend my Verification email!
          </ModalButton>
          <Link
            href={"/register"}
            className={
              "font-medium text-lg text-[#222] hover:text-_violet-600 transition-colors"
            }
          >
            Click here to change your email
          </Link>
        </div>
      </div>
    </div>
  );
}
