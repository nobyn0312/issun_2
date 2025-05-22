"use client";

import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { PostSignUpBody } from "@/api/generated/model.ts";

import { useState } from "react";

// バリデーションスキーマ（zod）
const signUpSchema = z.object({
  username: z.string().min(3, "名前は3文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});

// フォームデータの型
type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const [error, setError] = useState<string | null>(null);

  // react-hook-formのセットアップ
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpForm>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
  });

  // フォーム送信時の処理
  const onSubmit = async (data: SignUpForm) => {
    setError(null); // エラーをリセット
    const signUpData: PostSignUpBody = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await PostSignUpBody(signUpData);
      console.log("会員登録成功:", response.data);
      // ログイン画面にリダイレクト
      window.location.href = "/signin";
    } catch (err: any) {
      setError(err.response?.data?.message || "会員登録に失敗しました");
    }
  };

  return (
    <Container>
      <ContentsWrapper variant="orange" className="mb-4">
        <p className="text-sm font-bold">新規登録</p>
        <h2 className="text-xl font-bold mb-3">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="inner mb-8">
          <div className="mb-4">
            <TextField
              type="text"
              placeholder="名前"
              {...register("username")}
              className="mb-2"
            />
            {errors.username && (
              <p className="text-white text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <TextField
              type="email"
              placeholder="メール"
              {...register("email")}
              className="mb-2"
            />
            {errors.email && (
              <p className="text-white text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <TextField
              type="password"
              placeholder="パスワード"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-white text-sm">{errors.password.message}</p>
            )}
          </div>
          {error && <p className="text-white text-sm mb-4">{error}</p>}
          <div className="flex align-middle justify-center">
            <Button type="submit" variant="secondary" disabled={isSubmitting}>
              {isSubmitting ? "送信中..." : "新規登録"}
            </Button>
          </div>
        </form>
      </ContentsWrapper>
      <div>
        <Link
          href="/signin"
          className="block border-b pb-[2px] text-sm text-center mx-auto my-0 w-fit"
        >
          すでにアカウントお持ちの方はこちら
        </Link>
      </div>
    </Container>
  );
}