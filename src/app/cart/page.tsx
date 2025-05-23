"use client";

import { Container } from "@/components/features/container";
import { Header } from "@/components/shared/Header/header";
import { Navigation } from "@/components/shared/Navigation/navigation";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDelete = () => {
    console.log("削除ボタンが押されました");
  };

  return (
    <>
      <Header />
      <div className="pb-12">
        <Container>
          <div className="max-w-md mx-auto">
            {/* <h1 className='text-2xl font-bold'>カート</h1> */}
            <p>カートに商品がありません</p>
            <p>小計：</p> <p>¥ 3.960</p>
          </div>

          <div>
            <ContentsWrapper
              variant="lightgray"
              className="bg-gray-100 rounded-3xl mb-6"
            >
              <div className="mb-5">
                <a href="" className="flex items-center gap-2">
                  <Image
                    src={"/images/item_sample.png"}
                    alt="商品画像"
                    width={100}
                    height={100}
                  />
                  <div className="w-1/3	">
                    <p>Uniqlo</p>
                    <p>エアリズムオーバーサイズTシャツ</p>
                    <p>¥ 1.980</p>
                  </div>

                  <div>
                    <input
                      type="number"
                      className="w-1/3 border-b-black"
                    ></input>
                    <button>+</button>

                    <button>削除</button>
                  </div>
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/item_sample.png"}
                    alt="商品画像"
                    width={100}
                    height={100}
                  />
                  <div className="w-1/3	">
                    <p>Uniqlo</p>
                    <p>エアリズムオーバーサイズTシャツ</p>
                    <p>¥ 1.980</p>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <div className="flex">
                      <p className="bg-white border rounded-sm p-2 w-10">{quantity}</p>
                      <button
                        className="bg-orange-500 text-white px-2 py-1 rounded"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={handleDelete}
                    >
                      削除
                    </button>
                  </div>
                </div>
              </div>
            </ContentsWrapper>
          </div>

          <Button className="mx-auto" size={"lg"}>
            購入する
          </Button>
        </Container>
      </div>
      <Navigation />
    </>
  );
};

export default page;
