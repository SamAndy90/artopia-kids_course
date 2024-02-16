"use client";

import clsx from "clsx";
import { forwardRef, useId } from "react";

export type TextInputProps = {
  label?: string;
  className?: {
    inputClasses?: string;
    labelClasses?: string;
    containerClasses?: string;
    iconClasses?: string;
  };
  icon?: React.ReactNode;
  helperText?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      label,
      icon,
      helperText,
      className = {},
      type = "text",
      ...inputProps
    } = props;
    const { labelClasses, inputClasses, containerClasses, iconClasses } =
      className;
    const id = useId();
    return (
      <div className={clsx("flex flex-col gap-y-2", containerClasses)}>
        <div className={"gap-3.5 flex flex-col "}>
          {label && (
            <label
              htmlFor={id}
              className={clsx("text-[#696F79] font-medium", labelClasses)}
            >
              {label}
            </label>
          )}
          <input
            id={id}
            ref={ref}
            type={type}
            className={clsx(
              "border border-[#8692A6] text-[#494949] font-medium placeholder:text-[#8692A6] placeholder:text-sm rounded-md px-7 py-6 outline-none focus:border-standart_violet-500 focus:shadow-lg",
              inputClasses
            )}
            {...inputProps}
          />
        </div>
        {helperText && <p className={"text-red-500"}>{helperText}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
