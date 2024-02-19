import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type AuthFormButtonProps = {
  children: React.ReactNode;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function AuthFormButton({ children, className }: AuthFormButtonProps) {
  return (
    <button
      type={"submit"}
      className={clsx(
        "bg-_violet-500 text-white text-lg font-medium rounded-md w-full py-5 px-8 flex items-center justify-center hover:bg-_violet-600 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
