"use client";

import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import { Navigation } from "@/components/shared/Navigation/navigation";
import Image from "next/image";
import topLogo from "/public//images/topLogo.svg";
import { useEffect, useState } from "react";

export default function Home() {

	return (
		<>
			{/* <div className={"py-4"}>
				<Container>
					<Image
						src={topLogo}
						alt={"ロゴ"}
						width={768}
						height={768}
						style={{ display: "block", margin: "0 auto" }}
					/>
				</Container>
			</div> */}
			<Container>
				<div className='flex flex-wrap justify-center pb-14'>
					{[...Array(24)].map((_, i) => (
						<ItemCard
							imageSrc='/images/item_sample.png'
							brand='UNIQLO'
							category='tops'
							price={1980}
							key={i}
						/>
					))}
				</div>
			</Container>
			<Navigation />
		</>
	);
}
