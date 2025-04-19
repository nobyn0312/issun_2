import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import Link from "next/link";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='bg-gray-200 '>
				<h1 className='text-xl font-bold text-center'>ISSUN</h1>
			</div>
			<Container>
				<header className='mb-8'></header>
				<div className='max-w-md mx-auto'>{children}</div>
			</Container>
		</>
	);
}
