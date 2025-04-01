import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ItemCardProps {
	imageSrc: string | StaticImageData;
	brand: string;
	category: string;
	price: number;
}

export const ItemCard: React.FC<ItemCardProps> = ({
	imageSrc,
	brand,
	category,
	price,
}) => {
	return (
		<div
			style={{
				flex: "1 0 33.33%", // 1/3の幅を確保
				maxWidth: "256px", // 768pxでの最大幅（768 ÷ 3）
				width: "100%", // フルード対応
			}}
		>
			<div
				style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}
			>
				<Image
					src={imageSrc}
					alt='item'
					fill
					style={{ objectFit: "cover" }}
					sizes='(max-width: 768px) 33vw' // 画面幅の1/3
				/>
			</div>
			<div className='px-2 py-2'>
				<p className='text-xs font-bold'>{brand}</p>
				<p className='text-xs'>{category}</p>
				<p className='text-sm font-bold text-orange-500'>{price}</p>
			</div>
		</div>
	);
};
