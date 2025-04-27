import { Container } from "@/components/features/container";
import { Header } from "@/components/shared/Header/header";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>
        <header className="mb-8"></header>
        <div className="max-w-md mx-auto">{children}</div>
      </Container>
    </>
  );
}
