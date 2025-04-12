import React from "react";
import { Container } from "@/components/features/container";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const contentsWrapperVariants = cva(
  "rounded-lg py-4",
  {
	variants: {
		variant: {
			default: "bg-gray-200 text-black",
			orange: "bg-orange-500 text-white",
			black: "bg-black text-white",
			white: "bg-white text-black",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

type Props = React.HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof contentsWrapperVariants>;

export const ContentsWrapper = ({
	children,
	className,
	variant,
	...props
}: Props) => {
	return (
		<div className={cn(contentsWrapperVariants({ variant }), className)} {...props}>
			<Container>{children}</Container>
		</div>
	);
};
