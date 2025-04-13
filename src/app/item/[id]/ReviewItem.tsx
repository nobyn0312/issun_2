import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import React from "react";

type Review = {
	reviewer: string;
	title: string;
	date: Date;
	rate: number;
	size: string;
	comment: string;
	username: string;
	sex: string;
	height: string;
	shape: string;
};

type Props = {
	review: Review;
	className?: string;
};

const ReviewCnt = {
	reviewer: "32",
	title: "着丈ちょうどいい",
	date: new Date("2024-09-09"),
	rate: 4,
	size: "M",
	comment:
		"白のMサイズを購入\n大きめで着るのが好きなので袖も長めでちょうどいいです\n着丈も長めですがいつもインして着ています\n洗濯してもシワになりづらく、お気に入りです",
	username: "チョロ松",
	sex: "男性",
	height: "165cm",
	shape: "やや細身",
};
export const ReviewItem = ({ review = ReviewCnt , className="" }) => {
	const dateInt = review.date.toLocaleDateString("ja-JP");
	const rateInt = "★".repeat(review.rate) + "☆".repeat(5 - review.rate);

	return (
		<div className={className}>
			<ContentsWrapper>
				<p className='text-sm text-gray-500'>Minnano</p>
				<p className='text-sm font-semibold'>Review</p>
				<p className='text-sm'>reviewer：{review.reviewer}</p>
				<ContentsWrapper variant='white' className={"mb-2"}>
					<p className='text-sm font-medium'>{review.title}</p>
					<p className='text-xs text-gray-500'>{dateInt}</p>
					<p className='text-sm'>{rateInt}</p>
					<p className='text-sm'>SIZE：{review.size}</p>
					<p className='text-sm  mb-4'>{review.comment}</p>
					<p>
						{review.username}/{review.sex}/{review.height}cm/{review.shape}
					</p>
				</ContentsWrapper>
			</ContentsWrapper>
		</div>
	);
};
