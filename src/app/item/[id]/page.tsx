"use client";

import { Container } from "@/components/features/container";
import { ReviewItem } from "./ReviewItem";
import ItemDetail from "./ItemDetail";
import ItemLink from "./ItemLink";
import { Navigation } from "@/components/shared/Navigation/navigation";
import { Header } from "@/components/shared/Header/header";
import { Button } from "@/components/ui/Button/button";

const Item = {
	title: "エアリズムオーバーサイズコットンTシャツ",
	detail:
		"フォルムと着心地を極めた1枚。Uniqlo U\nコットンの見た目でサラリと快適な「エアリズム」。\nやや首元が詰まったクルーネックでクリーンな印象。-\nドロップショルダーでゆったとしたフィットの5袖。\nシルエットがきれいに出る素材感。フォルムと着心地を極めた1枚。",
	price: 1980,
	stock: 3,
};

const detail = () => {
	return (
		<>
		<Header/>
			<div className='pb-12'>
				<Container>
					<div className='max-w-md mx-auto'>
						<ItemDetail className='mb-4' />
						<Button className='mx-auto mb-4' size={"lg"}>カートに入れる</Button>
						<Button className='mx-auto mb-4' variant={"outline"} size={"default"}>お気に入り</Button>
						<ReviewItem className='mb-4' />
						<ItemLink className='mb-4' />
					</div>
				</Container>
			</div>
			<Navigation />
		</>
	);
};

export default detail;
