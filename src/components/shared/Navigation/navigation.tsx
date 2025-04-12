import React from "react";
import { Container } from "@/components/features/container";
import Image from "next/image";
export const Navigation = () => {
	return (
		<div className={"bg-white fixed bottom-0 z-100 w-screen h-80l border-t  border-gray-300"}>
			<Container>
				<ul className={"flex gap-3 justify-between"}>
					<li className={"p-1"}>
						<Image
							src={"/icon/house-solid.svg"}
							alt='nav_home'
							width={24}
							height={24}
						/>
						HOME
					</li>
					<li>
						<Image
							src={"/icon/house-solid.svg"}
							alt='nav_home'
							width={24}
							height={24}
						/>
						Favorite
					</li>
					<li>
						<Image
							src={"/icon/house-solid.svg"}
							alt='nav_home'
							width={24}
							height={24}
						/>
						Search
					</li>
					<li>
						<Image
							src={"/icon/house-solid.svg"}
							alt='nav_home'
							width={24}
							height={24}
						/>
						Additem
					</li>
					<li>
						<Image
							src={"/icon/house-solid.svg"}
							alt='nav_home'
							width={24}
							height={24}
						/>
						Mypage
					</li>
				</ul>
			</Container>
		</div>
	);
};
