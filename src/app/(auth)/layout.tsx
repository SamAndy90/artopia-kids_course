import { PropsWithChildren } from "react";
import { AuthWrapper } from "components/Auth/AuthWrapper";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <AuthWrapper>
      <div className={"text-[#8692A6] flex items-start justify-between"}>
        <Link
          href={"#"}
          className={"flex items-center hover:text-[#606c83] transition-colors"}
        >
          <MdArrowBackIos className={"size-5"} />
          <span className={"font-semibold"}>Back</span>
        </Link>
        <div className={"text-right"}>
          <div className={"text-[#BDBDBD] text-sm"}>STEP 01/03</div>
          <Link
            href={"#"}
            className={"font-semibold hover:text-[#606c83] transition-colors"}
          >
            Personal Info.
          </Link>
        </div>
      </div>
      {children}
    </AuthWrapper>
  );
}
