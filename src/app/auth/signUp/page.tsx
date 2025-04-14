import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<>
			<ContentsWrapper variant='orange'>
				<p className='text-sm font-bold'>新規登録</p>
				<h2 className='text-xl font-bold mb-3'>SignUp</h2>
				<form>
					<TextField type='name' placeholder='名前'></TextField>
					<div className='inner mb-4'>
						<TextField type='email' placeholder='メール'></TextField>
						<TextField type='password' placeholder='パスワード'></TextField>
					</div>
					<div className='flex align-middle justify-center'>
						<Button variant='secondary'>新規登録</Button>
					</div>
				</form>
			</ContentsWrapper>
			<div>
				<Link href='#'>
					<p className='text-center'>すでにアカウントお持ちの方はこちら</p>
				</Link>
			</div>
		</>
	);
}
