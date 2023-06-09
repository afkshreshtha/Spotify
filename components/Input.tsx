import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        {...props}
        className={twMerge(
          ` flex w-full rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-sm file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed focus:outline-none placeholder:text-neutral-400 `,
          className
        )}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
