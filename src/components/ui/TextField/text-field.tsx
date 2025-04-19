import * as React from "react";

import { cn } from "@/lib/utils";

interface TextFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  type: string;
  placeholder?: string;
  error?: boolean;
  value?: string;
  id?: string;
  rows?: number;
}
export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  error = false,
  type = "text",
  value,
  rows = 5,
  id,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 max-w-[430px]">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        aria-invalid={error}
        className={cn(
          "w-full min-w-0 rounded-md border-1 border-gray-400 bg-white px-2 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-black",
          error
            ? "border-destructive ring-destructive/20 dark:ring-destructive/40"
            : "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          className,
        )}
        {...props}
      />
    </div>
  );
};
