import { Button, buttonVariants } from "@/components/ui/button";
import { Secondary } from "@/stories/Button.stories";
import Image from "next/image";
import { describe } from "vitest";
import { cn, getCustomColor } from "@/lib/utils";

export default function Home() {
	return (
		<div className='space-y-5'>
			<p>ボタンコンポーネント</p>
			<Button
				className={cn(
					"min-w-[220px] max-w-[220px] md:max-w-[280px] hover:bg-[#ffa789]",
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

			<p>
				shadcn--------------------------------------------------------------------
			</p>
			<div className='font-bold'>Variant</div>
			<div className='flex space-x-5'>
				<Button>Default</Button>
				<Button variant='destructive'>Destructive</Button>
				<Button variant='outline'>Outline</Button>
				<Button variant='secondary'>Secondary</Button>
				<Button variant='ghost'>Ghost</Button>
				<Button variant='link'>Link</Button>
			</div>
			<div className='font-bold'>Size</div>
			<div className='flex space-x-5'>
				<Button>Default</Button>
				<Button size='sm'>Small</Button>
				<Button size='lg'>Large</Button>
				<Button size='icon'>Icon</Button>
			</div>
		</div>
	);
}
