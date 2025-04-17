"use client";

import { Button, buttonVariants } from "@/components/ui/Button/button";
import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import { Navigation } from "@/components/shared/Navigation/navigation";
import Image from "next/image";
import topLogo from "/public//images/topLogo.svg";
import Link from "next/link";

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
				<div className='flex flex-wrap justify-center py-4 mb-10'>
					{[...Array(9)].map((_, i) => (
						<Link href="#">
												<ItemCard
							imageSrc='/images/item_sample.png'
							brand='UNIQLO'
							category='tops'
							price={1980}
							key={i}
						/>
						</Link>
					))}
				</div>
			</Container>
			<Navigation />
		</>
	);
}
