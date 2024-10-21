import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Title from "./components/title";
import Features from "./components/features";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <Features />
      <Footer />
    </>
  );
}
