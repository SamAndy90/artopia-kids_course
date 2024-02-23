import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";

type ModalButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function ModalButton({
  children,
  fullWidth = false,
  className,
}: ModalButtonProps) {
  return (
    <button
      className={clsx(
        "text-white font-medium text-2xl py-6 px-8 flex items-center justify-center bg-_violet-900 rounded-md hover:bg-_violet-600 transition-colors",
        {
          "w-full": fullWidth,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
