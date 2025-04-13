import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import Image from "next/image";
import React from "react";

type Item = {
	brand: string;
	category: string;
	title: string;
	detail: string;
	price: number;
	stock: number;
};

type Props = {
	item: Item;
	className?: string;
};

const Item = {
	brand: "Uniqlo",
	category: "tops",
	title: "エアリズムオーバーサイズコットンTシャツ",
	detail:
		"フォルムと着心地を極めた1枚。Uniqlo U\nコットンの見た目でサラリと快適な「エアリズム」。\nやや首元が詰まったクルーネックでクリーンな印象。-\nドロップショルダーでゆったとしたフィットの5袖。\nシルエットがきれいに出る素材感。フォルムと着心地を極めた1枚。",
	price: 1980,
	stock: 3,
};

const ItemDetail = ({ item = Item, className = "" }) => {
	const priceInt = item.price.toLocaleString();

	return (
		<div className={className}>
			<Image
				src={"/images/item_sample.png"}
				alt='item'
				width={361}
				height={454}
				className='rounded-lg object-cover mx-auto block mb-4'
			/>
			<ContentsWrapper variant='orange'>
				<p className='text-sm font-bold'>BRAND: {item.brand}</p>
				<h2 className='text-xl font-bold'>{item.title}</h2>
				<div className='mt-2'>
					<p className='text-sm font-semibold'>PRICE</p>
					<p className='text-lg font-bold'>{priceInt}</p>
				</div>
				<div className='mt-2'>
					<p className='text-sm font-semibold'>DETAIL</p>
					<p className='text-sm'>{item.detail}</p>
				</div>
			</ContentsWrapper>
		</div>
	);
};

export default ItemDetail;
