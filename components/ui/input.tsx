import { cn } from "@/util/cn";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		return (
			<input
				className={cn(
					"border text-sm py-2 px-4 border-blue-100 rounded-md focus:border-blue-500 focus:outline-none",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";
