import HeaderSection from "../components/HeaderSection";
import ResumeHeading from "../components/ResumeHeading";
import ResumeContent from "../components/ResumeContentSection";
import Skills from "../components/DesignSkills";
import Footer from "../components/FooterLabel";
import PageRefresh from "../components/Body";


export default function MyResume() {
     return (
          <>
               <HeaderSection />
               <ResumeHeading />
               <ResumeContent />
               <Skills />
               <Footer />
               <PageRefresh />
          </>
     );
}