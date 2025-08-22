import "../css/Projects.css";
import ChatBot from "../images/ChatBot.jpeg";
import SandBox from "../images/SandBox.jpeg";
import Malika from "../images/Malika.jpeg";

export default function ProjectSection() {
     const links = [
          { ChatBotUi: "ChatBot-Ui", url: "https://hardiik-git.github.io/Robotech-Ai/Index.html" },
          { SandBoxUi: "SandBox-Ui", url: "https://hardiik-git.github.io/Sandbox-ui/" },
          { MalikaUI: "Malika-Ui", url: "https://hardiik-git.github.io/Malika/Malika-home.html" },
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
                         <div data-aos="slide-right">
                              <div className="ChatBot-Ui">
                                   <div className="ChatBot-Image relative">
                                        <img src={ChatBot} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   {links.map((link, index) => (<div key={index}>
                                        <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.ChatBotUi}</a>
                                   </div>
                                   ))}
                              </div>
                         </div>
                         <div data-aos="fade-in" >
                              <div className="SandBox-Ui">
                                   <div className="SandBox-Image relative">
                                        <img src={SandBox} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   {links.map((link, index) => (
                                        <div key={index}>
                                             <a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.SandBoxUi}</a>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         <div data-aos="slide-left">
                              <div className="Malika-Ui">
                                   <div className="SandBox-Imag relative">
                                        <img src={Malika} className="img-cover" alt="" />
                                   </div>
                              </div>
                              <div className="Project-Link text-center">
                                   {links.map((link, index) => (<div key={index}><a href={link.url} onClick={(e) => OpenNewTab(e, link.url)}>{link.MalikaUI}</a>
                                   </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
