import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section6 from "./component/Section6";

import HeroSection from "./component/HeroSection";
import MyMarquee from "./component/MyMarquee";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MyMarquee />

        {/* Spacer section */}
        <section aria-hidden="true" className="h-[6rem] w-full bg-white"></section>

        <Section2 />

        {/* Spacer section */}
        <section aria-hidden="true" className="h-[6rem] w-full bg-white"></section>

        <Section3 />
        <Section4 />
        <Section5 />

        {/* Company logos section */}
        <section className="bg-white w-full py-12">
          <div className="w-full bg-[#F5F6F5] overflow-hidden">
            <div className="container mx-auto">
              <img src="/companies.png" alt="Companies we work with" />
            </div>
          </div>
        </section>

        <Section6 />
      </main>
      <Footer />
    </>
  );
}
