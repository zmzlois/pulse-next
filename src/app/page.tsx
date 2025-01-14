import { HeroNav } from "@/components/hero_nav";
import { HeroText } from "@/components/hero_text";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <HeroNav />
      <HeroText />
    </main>
  );
}
