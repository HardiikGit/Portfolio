import { TypeAnimation } from "react-type-animation"
import "../css/Banner.css"
import '../css/Animation.css'
import BannerImage from "../images/MyImage.jpg"
export default function BannerSection() {
     const DownloadResume = () => {
          const ConfirmDownload = window.confirm("Do you want Download Resume");
          if (ConfirmDownload) {
               const link = document.createElement("a");
               link.href = "public/Hardik_CV.pdf";
               link.download = "Hardik_CV";
               link.click();
          }
     };
     return (
          <div className="MainBannerSection">
               <div className="container">
                    <div className="Banner-Content d-flex align-items-center justify-content-center flexwrap" data-aos="fade-in">
                         <div className="d-flex justify-content-center">
                              <div className="Banner-Image relative">
                                   <img src={BannerImage} className="img-cover" data-aos="fade-in" />
                              </div>
                         </div>

                         <div className="Banner-Text" data-aos="fade-in">
                              <div className="TypeAnimation">
                                   <TypeAnimation sequence={["Web Designer", 2000, "Web Developer", 2000, "Ui Ux Designer", 2000,]}
                                        wrapper="span" speed={300} style={{
                                             display: "inline-block", fontFamily: "var(--font-poppins)",
                                             fontSize: ".9rem", color: "#aaa",
                                        }} repeat={Infinity} />
                              </div>

                              <div className="MainHeading">
                                   <h1>Hardik</h1>
                              </div>

                              <div className="Banner-Para">
                                   <p>
                                        The great time is mine, not the flexibility heavily raised. The
                                        convulsions, not condiment growth, hateful bathed feline,from
                                        the harmless poisonous, out of me. A certain instability, a
                                        place of enjoyable price.
                                   </p>
                              </div>
                              <div className="Banner-Button d-flex align-items-center">
                                   <div>
                                        <button className="Download-CV" onClick={DownloadResume}>
                                             Download CV
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
