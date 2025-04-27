"use client";

import { Button, buttonVariants } from "@/components/ui/Button/button";
import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import { Navigation } from "@/components/shared/Navigation/navigation";
import { Textarea } from "@/components/ui/TextArea/text-area";
import Image from "next/image";
import topLogo from "/public//images/topLogo.svg";
import Link from "next/link";

export default function Home() {
	return (
		<>
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
