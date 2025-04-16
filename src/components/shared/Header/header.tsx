import React from "react";
import Image from "next/image";
import topLogo from "/public//images/topLogo.svg";
import { Container } from "@/components/features/container";

export const Header = () => {
	return (
		<div className={"py-4"}>
			<Container>
				<Image
					src={topLogo}
					alt={"ロゴ"}
					width={768}
					height={768}
					style={{ display: "block", margin: "0 auto" }}
				/>
			</Container>
		</div>
	);
};
