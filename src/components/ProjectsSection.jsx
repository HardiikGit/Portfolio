import "../css/Projects.css";
import ChatBot from "../images/ChatBot.jpeg";
import SandBox from "../images/SandBox.jpeg";
import Malika from "../images/Malika.jpeg";
import Infusing from '../images/InFusing.jpeg'
import OneClick from '../images/OneClick.png'

export default function ProjectSection() {
     const links = [
          { ChatBotUi: "ChatBot-Ui", url: "https://hardiikgit.github.io/Robotech-Ai/Index.html" },
          { SandBoxUi: "SandBox-Ui", url: "https://hardiikgit.github.io/Sandbox-ui/" },
          { MalikaUi: "Malika-Ui", url: "https://hardiikgit.github.io/Malika/Malika-home.html" },
          { InfusingUi: "Infusing-Ui", url: "https://hardiikgit.github.io/InFusing/Home-Page.html" },
          { OneClickFigmaUi: "One-Click-Ui-Figma", url: "https://www.figma.com/community/file/1547489905447259929/one-click-poltics" }

     ];

     const OpenNewTab = (e, url) => {
          e.preventDefault();
          const confirmOpen = window.confirm("Do you want to open in a new tab?");
          if (confirmOpen) {
               window.open(url);
          } else {
               return;
          }
     };

     return (
          <div className="MainProjectSection" style={{ padding: "50px 0px" }}>
               <div className="container">
                    <div className="Projects-Parent-Box d-flex justify-content-center flexwrap">
                         <div data-aos="fade-in">
                              <div className="ChatBot-Ui relative">
                                   <div className="ChatBot-Image">
                                        <img src={ChatBot} className="img-cover" alt="" />
                                        <div className="ChatBot-Content absolute text-center">
                                             <div className="Project-Link text-center">
                                                  {links.map((link, index) => (<div key={index}>
                                                       <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.ChatBotUi}</a>
                                                  </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div data-aos="fade-in" >
                              <div className="SandBox-Ui relative">
                                   <div className="SandBox-Image">
                                        <img src={SandBox} className="img-cover" alt="" />
                                        <div className="Sandbox-Content absolute text-center">
                                             <div className="Project-Link text-center">
                                                  {links.map((link, index) => (<div key={index}>
                                                       <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.SandBoxUi}</a>
                                                  </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div data-aos="fade-in">
                              <div className="Malika-Ui relative">
                                   <div className="Malika-Imag">
                                        <img src={Malika} className="img-cover" alt="" />
                                        <div className="Malika-Content absolute text-center">
                                             <div className="Project-Link text-center">
                                                  {links.map((link, index) => (<div key={index}>
                                                       <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.MalikaUi}</a>
                                                  </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div data-aos="fade-in">
                              <div className="Infusing-Ui relative">
                                   <div className="Infusing-Imag">
                                        <img src={Infusing} className="img-cover" alt="" />
                                        <div className="Infusing-Content absolute text-center">
                                             <div className="Project-Link text-center">
                                                  {links.map((link, index) => (<div key={index}>
                                                       <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.InfusingUi}</a>
                                                  </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div data-aos="fade-in">
                              <div className="One-Click-Ui-Figma relative">
                                   <div className="One-Click-Imag">
                                        <img src={OneClick} className="img-cover" alt="" />
                                        <div className="One-Click-Ui-Figma-Content absolute text-center">
                                             <div className="Project-Link text-center">
                                                  {links.map((link, index) => (<div key={index}>
                                                       <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.OneClickFigmaUi}</a>
                                                  </div>
                                                  ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
