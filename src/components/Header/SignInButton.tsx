import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type SignInButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SignInButton(props: SignInButtonProps) {
  const { className, ...restProps } = props;
  return (
    <button
      type="button"
      className={clsx(
        "md:px-20 md:py-5 py-3 px-14 bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
      {...restProps}
    >
      Sing In
    </button>
  );
}
