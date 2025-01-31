import Image from "next/image";
import Footer from "./components/footer";
import Title from "./components/title";
import Features from "./components/features";
import { Navbar } from "./components";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
