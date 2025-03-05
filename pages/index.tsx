import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { About, Container } from "@/components/organisms";
import { Hero } from "@/components/organisms/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
    </Container>
  );
}
