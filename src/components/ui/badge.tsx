import * as React from "react";
import { cn } from "../../utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const baseClasses =
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2";

  const variantClasses = {
    default:
      "border-transparent bg-gray-900 text-white shadow hover:bg-gray-800",
    secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
    destructive:
      "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
    outline: "text-gray-900 border-gray-300",
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

export { Badge };
