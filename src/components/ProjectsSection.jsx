import "../css/Projects.css";
import ChatBot from "../images/ChatBot.jpeg";
import SandBox from "../images/SandBox.jpeg";
import Malika from "../images/Malika.jpeg";

export default function ProjectSection() {
     return (
          <div className="MainProjectSection" style={{ padding: "50px 0px" }}>
               <div className="container">
                    <div className="Projects-Parent-Box d-flex justify-content-center flexwrap">
                         <div>
                              <div className="ChatBot-Ui">
                                   <div className="ChatBot-Image relative">
                                        <img src={ChatBot} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   <a href="https://hardiik-git.github.io/Robotech-Ai/Index.html">ChatBot-Ui</a>
                              </div>
                         </div>
                         <div>
                              <div className="SandBox-Ui">
                                   <div className="SandBox-Image relative">
                                        <img src={SandBox} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   <a href="https://hardiik-git.github.io/Sandbox-ui/">SandBox-Ui</a>
                              </div>
                         </div>
                         <div>
                              <div className="Malika-Ui">
                                   <div className="SandBox-Imag relative">
                                        <img src={Malika} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   <a href="https://hardiik-git.github.io/Malika/Malika-home.html">Malika-Ui</a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
