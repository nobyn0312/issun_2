import Link from "next/link";
import React from "react";
export const Header = () => {
	return (
		<div className='bg-gray-200 '>
		<h1 className='text-xl font-bold text-center'>
			<Link href="/">
				ISSUN
			</Link>
		</h1>
	</div>
	);
};
