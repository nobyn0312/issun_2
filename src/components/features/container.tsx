import { ReactNode } from "react";

type Props = {
	children: ReactNode;
	className?: string; // classNameを追加
};

export const Container = ({ children, className = "" }: Props) => {
	const style = {
		maxWidth: "800px",
		margin: "0 auto",
		padding: "0 16px",
	};

	return (
		<div style={style} className={className}>
			{children}
		</div>
	);
};
