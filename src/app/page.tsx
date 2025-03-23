import { Button, buttonVariants } from "@/components/ui/button";
import { Secondary } from "@/stories/Button.stories";
import Image from "next/image";
import { describe } from "vitest";

export default function Home() {
  return (
		<div>
			<Button>Primary</Button>
			<Button variant={"outline"}>Secondaly</Button>
			<Button variant={"destructive"}>Black</Button>
		</div>
	);
}