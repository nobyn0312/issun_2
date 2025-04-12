"use client";

import { Button, buttonVariants } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import { Header } from "@/components/shared/Header/header";
import { Navigation } from "@/components/shared/Navigation/navigation";
import { Textarea } from "@/components/ui/TextArea/textarea";
export default function Home() {
	return (
		<>
			<Header />
			<br />
			<Container>
				<div className='flex flex-wrap justify-center'>
					{[...Array(9)].map((_, i) => (
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
