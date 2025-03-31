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
		<div>
			{/* <div
				style={{
					backgroundImage: `url(${imageSrc})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "auto",
					aspectRatio: "250 / 375",
					borderRadius: "8px",
				}}
			/> */}
			<div>
				<Image
					src={imageSrc}
					width={131}
					height={161}
					// style={{ objectFit: "contain" }}
					alt='item'
					// fill={true}
					style={{ objectFit: "cover" }}
				/>
			</div>

			<div className='px-2 py-2'>
				<p className='text-xs font-bold'>{brand}</p>
				<p className='text-xs'>{category}</p>
				<p className='text-sm font-bold text-primary-orange!important'>
					{price}ああ
				</p>
			</div>
		</div>
	);
};
