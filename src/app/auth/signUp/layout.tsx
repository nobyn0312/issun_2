import { Container } from "@/components/features/container";
import { ContentsWrapper } from "@/components/shared/Wrapper/contents-wrapper";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Container>
      <header className="mb-8">
        <h1 className="text-xl font-bold">ISSUN</h1>
      </header>

      <ContentsWrapper variant="orange">
      <main className="p-8 rounded-lg w-full max-w-md">
        {children}
      </main>
      </ContentsWrapper>


    </Container>
    </>

  );
}