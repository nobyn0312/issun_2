import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import { Button } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import { Textarea } from "../../../components/ui/TextArea/text-area";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <>
        <ContentsWrapper variant="default">
          <p className="text-sm font-bold">Review</p>
          <h2 className="text-xl font-bold mb-3">レビュー編集</h2>

          <form>
            <p>タイトル</p>
            <TextField
              type="name"
              placeholder="名前"
              className="mb-2"
            ></TextField>
            <div className="inner mb-2">
              <p>評価</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>rate</SelectLabel>
                    <SelectItem value="1">★☆☆☆☆</SelectItem>
                    <SelectItem value="2">★★☆☆☆</SelectItem>
                    <SelectItem value="3">★★★☆☆</SelectItem>
                    <SelectItem value="4">★★★★☆</SelectItem>
                    <SelectItem value="5">★★★★★</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p>レビュー</p>
            <Textarea
              placeholder="レビューを入力してください"
              className="mb-8"
            ></Textarea>
            <div className="flex align-middle justify-center">
              <Button variant="secondary">レビュー編集</Button>
            </div>
          </form>
        </ContentsWrapper>
    </>
  );
};

export default page;
