"use client";

import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { PostSignInBody } from "../../../../generated/model";
import { postSignIn } from "../../../../generated/api";

// バリデーションスキーマ（zod）
const signInSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});

// フォームデータの型
type SignInForm = z.infer<typeof signInSchema>;

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);

  // react-hook-formのセットアップ
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>({
    mode: "onChange",
    resolver: zodResolver(signInSchema),
  });


  const onSubmit = async (data: SignInForm) => {
    setError(null);

    // ① CSRFトークンを取得
    const csrfRes = await fetch("/api/csrf-token", {
      credentials: "include", // Cookie を送信する場合（重要）
    });

    if (!csrfRes.ok) {
      setError("CSRFトークンの取得に失敗しました");
      return;
    }

    const { csrfToken } = await csrfRes.json();

    // ② サインインデータの送信
    const signInData: PostSignInBody = {
      member: {
        email: data.email,
        password: data.password,
      },
    };

    try {
      const response = await postSignIn(signInData, {
        headers: {
          "X-CSRF-Token": csrfToken, // CSRFトークンを送信
        },
        withCredentials: true, // Cookie を含める
      });

      console.log("ログイン:", response.data);
      window.location.href = "/";
    } catch (err: any) {
      console.log("エラー:", err.response?.data);
      setError(err.response?.data?.message || "ログインに失敗しました");
    }
  };

  
  return (
    <Container>
      <ContentsWrapper variant="orange" className="mb-4">
        <p className="text-sm font-bold">サインイン</p>
        <h2 className="text-xl font-bold mb-3">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="inner mb-8">
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
              {isSubmitting ? "送信中..." : "サインイン"}
            </Button>
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
    </Container>
  );
}