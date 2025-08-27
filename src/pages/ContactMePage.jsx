import Footer from "../components/FooterLabel";
import ContactContent from "../components/ContactContent";
import ContactFn from "../components/ContactMeHeading";
import GoogleMapSection from "../components/GoogleMaps";
import HeaderSection from "../components/HeaderSection";
import PageRefresh from "../components/Body";
import CursorMove from "../components/MouseMove";

export default function ContactMe() {
     return (
          <>
               <HeaderSection />
               <ContactFn />
               <GoogleMapSection />
               <ContactContent />
               <Footer />
               <PageRefresh />
               <CursorMove />
          </>
     )
}