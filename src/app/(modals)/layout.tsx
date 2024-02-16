import { PropsWithChildren } from "react";
import { AuthWrapper } from "components/Auth/AuthWrapper";
import Image from "next/image";
import Icon from "components/images/verification-icon.svg";
import Link from "next/link";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div
        className={
          "fixed bg-lime-800 w-screen h-screen z-50 flex items-center justify-center"
        }
      >
        <div className={"absolute bg-black/20 w-full h-full"}></div>
        <div className={"bg-white p-12 rounded-2xl text-black"}>
          <div>
            <Image src={Icon} alt={"Icon"} />
            <div>
              <h4>Verify by Mail</h4>
              <p>
                Please check your mail and follow the instruction to activate
                your account. If you did not receive the mail,or it has
                expired,you can resend another one.
              </p>
            </div>
            <button>Resend my Verification email!</button>
            <Link href={"/register"}>Click here to change your email</Link>
          </div>
        </div>
      </div>
      <AuthWrapper />
    </>
  );
}
