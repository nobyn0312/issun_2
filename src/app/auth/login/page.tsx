import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<>
			<ContentsWrapper variant='orange' className='mb-4'>
				<p className='text-sm font-bold'>ログイン</p>
				<h2 className='text-xl font-bold mb-3'>Login</h2>
				<form>
					<div className='inner mb-8'>
						<TextField
							type='email'
							placeholder='メール'
							className='mb-2'
						></TextField>
						<TextField type='password' placeholder='パスワード'></TextField>
					</div>
					<div className='flex align-middle justify-center'>
						<Button variant='secondary'>ログイン</Button>
					</div>
				</form>
			</ContentsWrapper>
			<div>
				<Link
					href='/auth/signUp'
					className='block border-b pb-[2px] text-sm text-center mx-auto my-0 w-fit'>
					まだアカウントお持ちでない方
				</Link>
			</div>
		</>
	);
}
