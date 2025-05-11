"use client";

import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { StringValidation } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/utils/validationScheme";

interface signInForm {
  name: string;
  email: string;
  password: string;
}

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInForm>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onsubmit = (data: signInForm) => {
    console.log(data);
  };

  return (
    <>

<form onSubmit={handleSubmit(onsubmit)}>
          <label htmlFor="名前">名前</label>
          <input id="name" type="text" {...register("name")} />
          <p>{errors.name?.message as React.ReactNode}</p>
          <input type="text" />

          <button type='submit'>送信</button>
        </form>

      <ContentsWrapper variant="orange" className="mb-4">

        <p className="text-sm font-bold">サインイン</p>
        <h2 className="text-xl font-bold mb-3">signIn</h2>
        <form>
          <div className="inner mb-8">
            <TextField
              type="email"
              placeholder="メール"
              className="mb-2"
            ></TextField>
            <TextField type="password" placeholder="パスワード"></TextField>
          </div>
          <div className="flex align-middle justify-center">
            <Button variant="secondary">サインイン</Button>
          </div>
        </form>
      </ContentsWrapper>
      <div>
        <Link
          href="/signup"
          className="block border-b pb-[2px] text-sm text-center mx-auto my-0 w-fit"
        >
          アカウントお持ちでない方はこちら
        </Link>
      </div>
    </>
  );
}
