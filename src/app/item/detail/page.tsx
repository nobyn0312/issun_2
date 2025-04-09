import { Container } from '@/components/features/container';
import { Button } from '@/components/ui/Button/button';
import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const detail = () => {
  return (
		<Container>
			<div className='max-w-md mx-auto'>
				{/* 画像 */}
				<Image
					src={"/images/item_sample.png"} // インポートした画像を使用
					alt='item'
					width={361}
					height={454}
					className='object-cover'
				/>

				{/* 商品情報 */}
				<div className='mt-4 bg-orange-500 px-4 py-4 text-white rounded-md'>
					<p className='text-sm text-gray-500'>BRAND: Uniqlo</p>
					<h2 className='text-xl font-bold'>
						エアリズムオーバーサイズコットンT
					</h2>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>PRICE</p>
						<p className='text-lg'>¥1,980</p>
					</div>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>DETAIL</p>
						<p className='text-sm'>
							詳細 フォルムと着心地を極めた1枚。 Uniqlo U 仕様 -
							コットンの見た目でサラリと快適な「エアリズム」。-
							やや首元が詰まったクルーネックでクリーンな印象。-
							ドロップショルダーでゆったりとしたフィットの5袖。-
							シルエットがきれいに出る素材感。
						</p>
					</div>
				</div>

				{/* レビュー */}
				<div className='mt-4 px-4 py-4 bg-gray-200 rounded-md'>
					<p className='text-sm text-gray-500'>Minnano</p>
					<p className='text-sm font-semibold'>Review</p>
					<p className='text-sm'>reviewer：32</p>
					<div className='mt-2'>
						<div className='text-sm font-medium'>着丈ちょうどいい</div>
						<p className='text-xs text-gray-500'>2024/09/09</p>
						<p className='text-sm'>★★★★☆</p>
						<p className='text-sm'>SIZE：S</p>
						<p className='text-sm'>
							白のMサイズを購入
							大きめで着るのが好きなので袖も長めでちょうどいいです
							着丈も長めですがいつもインして着ています
							洗濯してもシワになりづらく、お気に入りです
						</p>
					</div>
				</div>

				{/* 販売元リンク */}
				<div className='mt-6 flex flex-col items-center'>
					<p className='text-sm text-gray-500'>BRAND: Uniqlo</p>
					<p className='text-sm'>エアリズムオーバーサイズコットンT</p>
					<Button className='mt-2'>販売元ページへ</Button>
				</div>
			</div>
		</Container>
	);
}

export default detail