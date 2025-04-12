import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";

import { Button } from "@/components/ui/Button/button";
import Image from "next/image";
import React, { useState } from "react";

const Item = {
	title: "エアリズムオーバーサイズコットンTシャツ",
	detail:
		"フォルムと着心地を極めた1枚。Uniqlo U\nコットンの見た目でサラリと快適な「エアリズム」。\nやや首元が詰まったクルーネックでクリーンな印象。-\nドロップショルダーでゆったとしたフィットの5袖。\nシルエットがきれいに出る素材感。フォルムと着心地を極めた1枚。",
	price: 1980,
	stock: 3,
};

const detail = ({ item = Item }) => {
	const priceInt = item.price.toLocaleString();
	return (
		<Container>
			<div className='max-w-md mx-auto'>
				<Image
					src={"/images/item_sample.png"}
					alt='item'
					width={361}
					height={454}
					className='object-cover mx-auto block'
				/>

				<ContentsWrapper variant='orange' className='mb-4'>
					<p className='text-sm font-bold'>BRAND: Uniqlo</p>
					<h2 className='text-xl font-bold'>{Item.title}</h2>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>PRICE</p>
						<p className='text-lg font-bold'>{priceInt}</p>
					</div>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>DETAIL</p>
						<p className='text-sm'>{Item.detail}</p>
					</div>
				</ContentsWrapper>

				<ContentsWrapper>
					<p className='text-sm text-gray-500'>Minnano</p>
					<p className='text-sm font-semibold'>Review</p>
					<p className='text-sm'>reviewer：32</p>

					<ContentsWrapper variant='white' className={"mb-2"}>
						<p className='text-sm font-medium'>着丈ちょうどいい</p>
						<p className='text-xs text-gray-500'>2024/09/09</p>
						<p className='text-sm'>★★★★☆</p>
						<p className='text-sm'>SIZE：M</p>
						<p className='text-sm'>
							白のMサイズを購入
							大きめで着るのが好きなので袖も長めでちょうどいいです
							着丈も長めですがいつもインして着ています
							洗濯してもシワになりづらく、お気に入りです
						</p>
						<p>一寸法師/男性/160cm/やや細身</p>
					</ContentsWrapper>

					<ContentsWrapper variant='white'>
						<p className='text-sm font-medium'>小さくても似合う神Tシャツ</p>
						<p className='text-xs text-gray-500'>2024/09/09</p>
						<p className='text-sm'>★★★★☆</p>
						<p className='text-sm'>SIZE：M</p>
						<p className='text-sm'>良いです。</p>
						<p>チョロ松/男性/165cm/やや細身</p>
					</ContentsWrapper>
				</ContentsWrapper>

				<div className='mt-6 flex flex-col items-center'>
					<p className='text-sm text-gray-500'>BRAND: Uniqlo</p>
					<p className='text-sm'>エアリズムオーバーサイズコットンT</p>
					<Button className='mt-2'>販売元ページへ</Button>
				</div>
			</div>
		</Container>
	);
};

export default detail;
