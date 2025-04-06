	import React from "react";
	import Image from "next/image";
	import { StaticImageData } from "next/image";
	import styles from "./itemcard.module.css";
import Link from "next/link";
	interface ItemCardProps {
		imageSrc: string;
		brand: string;
		category: string;
		price: number;
	}
	export const ItemCard = ({
		imageSrc,
		brand,
		category,
		price,
	}: ItemCardProps) => {
		const priceInt = price.toLocaleString();
		return (
			<Link href={"#"} className={styles.itemCard}>
				<div>
					<div className={styles.item}>
						<Image
							src={imageSrc}
							alt='item'
							fill
							sizes='(max-width: 768px) 33vw' // 画面幅の1/3
						/>
					</div>
					<div className='px-1 py-2'>
						<p className='text-xs font-bold'>{brand}</p>
						<p className='text-xs'>{category}</p>
						<p className='text-sm font-bold text-orange-500'>{priceInt}</p>
					</div>
				</div>
			</Link>
		);
	};
