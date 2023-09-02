import React, { HTMLInputTypeAttribute, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = forwardRef<
  HTMLInputElement,
  UseFormRegisterReturn & { type: HTMLInputTypeAttribute }
>(({ type, ...props }, ref) => {
  return (
    <input
      className="h-10 w-full px-2 focus:outline-none border border-gray-300 rounded-s-sm"
      placeholder="What needs to be done?"
      type={type}
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = 'Input'; // Add this line

export default Input;
