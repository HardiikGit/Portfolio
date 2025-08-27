import PageRefresh from "../components/Body";
import Footer from "../components/FooterLabel";
import HeaderSection from "../components/HeaderSection";
import ProjectHeading from "../components/ProjectsHeading";
import ProjectSection from "../components/ProjectsSection";
import CursorMove from "../components/MouseMove";


export default function Project() {
     return (
          <>
               <HeaderSection />
               <ProjectHeading />
               <ProjectSection />
               <Footer />
               <PageRefresh />
               <CursorMove />
          </>
     )
}