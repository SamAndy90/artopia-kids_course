import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type LogoutButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function LogoutButton(props: LogoutButtonProps) {
  const { className, ...restProps } = props;
  return (
    <button
      type="button"
      className={clsx(
        "px-9 py-3 whitespace-nowrap text-white bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
      {...restProps}
    >
      Log Out
    </button>
  );
}
