import { Container } from '@/components/features/container';
import { ContentsWrapper } from '@/components/shared/Wrapper/contents-wrapper';

import { Button } from '@/components/ui/Button/button';
import Image from 'next/image';
import React from 'react'

const detail = () => {
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
				<h2 className='text-xl font-bold'>
						エアリズムオーバーサイズコットンTシャツ
					</h2>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>PRICE</p>
						<p className='text-lg font-bold'>¥1,980</p>
					</div>
					<div className='mt-2'>
						<p className='text-sm font-semibold'>DETAIL</p>
						<p className='text-sm'>
							フォルムと着心地を極めた1枚。 Uniqlo U 仕様 -
							コットンの見た目でサラリと快適な「エアリズム」。-
							やや首元が詰まったクルーネックでクリーンな印象。-
							ドロップショルダーでゆったりとしたフィットの5袖。-
							シルエットがきれいに出る素材感。
						</p>
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
						<p className='text-sm'>
						良いです。
						</p>
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
}

export default detail