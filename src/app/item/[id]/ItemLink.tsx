import { Button } from "@/components/ui/Button/button";
import React from "react";
import Image from "next/image";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";

type Item = {
	brand: string;
	title: string;
	detail: string;
	price: number;
};

type Props = {
	item: Item;
	className?: string;
};

const Item = {
	brand: "Uniqlo",
	title: "エアリズムオーバーサイズコットンTシャツ",
};

const ItemLink = ({ item = Item, className = "" }) => {
	return (
		<div className={className}>
			<ContentsWrapper variant='black'>
				<div className={"flex items-center gap-4"}>
					<Image
						src={"/images/item_sample.png"}
						alt='item'
						width={120}
						height={150}
						className={"object-cover block rounded-lg"}
					/>
					<div>
						<p className='text-sm text-gray-500'>BRAND: {item.brand}</p>
						<p className='text-sm'>{item.title}</p>
						<Button size='sm' className='mt-2'>
							販売元ページへ
						</Button>
					</div>
				</div>
			</ContentsWrapper>
		</div>
	);
};

export default ItemLink;
