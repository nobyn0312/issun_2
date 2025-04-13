import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";

export default function SignUpPage() {
  return (
    <div>

      <p className='text-sm font-bold'>新規登録</p>
     <h2 className='text-xl font-bold mb-3'>SignUp</h2>
      <form>
        <input type="email" placeholder="メールアドレス" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="パスワード" className="border p-2 w-full mb-4" />

        <TextField type="name" placeholder="名前"></TextField>
        {/* <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          登録
        </button> */}
        <Button variant="secondary">
          新規登録
        </Button>
      </form>


    </div>
  );
}