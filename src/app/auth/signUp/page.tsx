import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<>
			<ContentsWrapper variant='orange' className='mb-4'>
				<p className='text-sm font-bold'>新規登録</p>
				<h2 className='text-xl font-bold mb-3'>SignUp</h2>
				<form>
					<TextField
						type='name'
						placeholder='名前'
						className='mb-2'
					></TextField>
					<div className='inner mb-8'>
						<TextField
							type='email'
							placeholder='メール'
							className='mb-2'
						></TextField>
						<TextField type='password' placeholder='パスワード'></TextField>
					</div>
					<div className='flex align-middle justify-center'>
						<Button variant='secondary'>新規登録</Button>
					</div>
				</form>
			</ContentsWrapper>
			<div>
				<Link
					href='/auth/login'
					className='block border-b pb-[2px] text-sm text-center mx-auto my-0 w-fit'>
					すでにアカウントお持ちの方はこちら
				</Link>
			</div>
		</>
	);
}
