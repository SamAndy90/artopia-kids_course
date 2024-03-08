import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type LogoutButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function LogoutButton({ className }: LogoutButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "px-9 py-3 whitespace-nowrap text-white bg-_violet-500 hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      Log Out
    </button>
  );
}
