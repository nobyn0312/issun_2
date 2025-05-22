"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>名前:</label>
      <input {...register("name", { required: "名前を入力してください" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>メールアドレス:</label>
      <input
        {...register("email", {
          required: "メールアドレスを入力してください",
          pattern: { value: /^\S+@\S+$/i, message: "メールアドレスの形式が不正です" }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>問い合わせ内容:</label>
      <textarea {...register("message", { required: "問い合わせ内容を入力してください" })} />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit">送信</button>
    </form>
  );
};

export default Contact;
