import { Button, buttonVariants } from "@/components/ui/Button/button";
import { Secondary } from "@/stories/Button.stories";
import Image from "next/image";
import { describe } from "vitest";
import { cn, getCustomColor } from "@/lib/utils";
import { TextField } from "@/components/ui/TextField/text-field";
import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import itemImage from "@/assets/item_sample.png";
export default function Home() {
	return (
		<>
			<Container>
				<div className='space-y-5'>
					<p>ボタンコンポーネント</p>
					<Button
						className={cn(
							"min-w-[220px] max-w-[220px] md:max-w-[280px] hover:bg-orange-400",
							getCustomColor("brand-primary")
						)}
						style={{ display: "block" }}
					>
						Primary Button
					</Button>

					<Button
						className={cn(
							"min-w-[220px] max-w-[220px] md:max-w-[280px] hover:bg-[#6b6b6b]",
							getCustomColor("brand-secondary")
						)}
						style={{ display: "block" }}
					>
						Secondary Button
					</Button>

					<Button
						className={cn(
							"min-w-[220px] max-w-[220px] md:max-w-[280px] hover:bg-[#ffffff7b] hover:opacity-60",
							getCustomColor("brand-outline")
						)}
						style={{ display: "block" }}
					>
						Outline Button
					</Button>
				</div>

				<br />
				<p>TextField</p>

				<TextField label='Email' type='email' placeholder='Email' />

				<TextField label='Username' type='text' placeholder='name' />

				<TextField label='Review' type='textarea' placeholder='' rows={5} />

				<TextField label='password' type='password' placeholder='password' />
			</Container>

			<br />
			<Container>
				<div className='flex'>
					<ItemCard
						imageSrc='/images/item_sample.png'
						brand='UNIQLO'
						category='tops'
						price={1980}
					/>
					<ItemCard
						imageSrc='/images/item_sample.png'
						brand='UNIQLO'
						category='tops'
						price={1980}
					/>
					<ItemCard
						imageSrc='/images/item_sample.png'
						brand='UNIQLO'
						category='tops'
						price={1980}
					/>
				</div>
			</Container>
		</>
	);
}
