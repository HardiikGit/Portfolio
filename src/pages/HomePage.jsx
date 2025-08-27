import HeaderSection from "../components/HeaderSection";
import BannerSection from "../components/BannerSection";
import WhatIdo from "../components/WhatIDo";
import Skills from "../components/DesignSkills";
import Footer from "../components/FooterLabel";
import PageRefresh from "../components/Body";
import CursorMove from "../components/MouseMove";

export default function HomePage() {
     return (
          <>
               <HeaderSection />
               <BannerSection />
               <WhatIdo />
               <Skills />
               <Footer />
               <PageRefresh />
               <CursorMove />
          </>
     )
}