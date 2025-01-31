import Features from "./components/features";
import Hero from "./components/hero/hero";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
}
