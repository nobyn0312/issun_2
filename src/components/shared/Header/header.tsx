import React from 'react'
import Image from "next/image";
import topLogo from "/public//images/topLogo.svg";
import { Container } from '@/components/features/container';

export const Header = () => {
  return (
		<div>
			<Container>
				<Image
					src={topLogo}
					alt={"ロゴ"}
					width={490}
					height={490}
					style={{ display: "block", margin: "0 auto" }}
				/>
			</Container>
		</div>
	);
}