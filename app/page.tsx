import Header from "../components/Header";
import Hero from "../components/Hero";
import Presses from "../components/Presses";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import TrustBand from "../components/TrustBand";
import DealerLocator from "../components/DealerLocator";
import SupportStrip from "../components/SupportStrip";
import Footer from "../components/Footer";
import ScrollFx from "../components/ScrollFx";

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Presses />
        <Categories />
        <Featured />
        <TrustBand />
        <DealerLocator />
        <SupportStrip />
      </main>
      <Footer />
      <ScrollFx />
    </>
  );
}
