"use client";

import { Button, buttonVariants } from "@/components/ui/Button/button";
import { TextField } from "@/components/ui/TextField/text-field";
import { Container } from "@/components/features/container";
import { ItemCard } from "@/components/shared/ItemCard/item-card";
import { Header } from "@/components/shared/Header/header";
import { Navigation } from "@/components/shared/Navigation/navigation";
import { Textarea } from "@/components/ui/TextArea/textarea";
export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <div className="space-y-5">
          <p>ボタンコンポーネント</p>
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>

        <br />
        <br />
        <TextField label="Email" type="email" placeholder="Email" />
        <br />
        <TextField label="Username" type="text" placeholder="name" />
        <br />
        <TextField label="password" type="password" placeholder="password" />
        <br />
        <p>textArea</p>
        <Textarea />
        <br />
      </Container>
      <br />
      <Container>
        <div className="flex flex-wrap justify-center">
          {[...Array(9)].map((_, i) => (
            <ItemCard
              imageSrc="/images/item_sample.png"
              brand="UNIQLO"
              category="tops"
              price={1980}
              key={i}
            />
          ))}
        </div>
      </Container>
      <Navigation />
    </>
  );
}
