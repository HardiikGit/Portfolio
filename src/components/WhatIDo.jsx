import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faWebAwesome } from "@fortawesome/react-fontawesome";
import '../css/WhatIDo.css'
// import WebDesign from '../images/Web-Design.png'
// import WebDev from '../images/Web-Dev.png'
// import UiUx from '../images/Ui-Ux.png'


export default function WhatIdo() {
     return (
          <div className="MainWhatIDoSection">
               <div className='container'>
                    <div className='What-I-Do-Content'>
                         <div className='Sub-Heading'>
                              <h2 className='relative'>What I Do</h2>
                         </div>
                         <div className='Working-Boxes-fl d-flex align-items-center justify-content-start flexwrap'>
                              {/* 1 */}
                              <div className="Info-box d-flex justify-content-start">
                                   <div className='Box-Image'>
                                        <FontAwesomeIcon icon={faDesktop} />
                                   </div>
                                   <div>
                                        <div className='Box-heading'>
                                             <h3>Web Design</h3>
                                        </div>
                                        <div className='Box-para'>
                                             <p>I design clean, modern, and user-friendly websites that blend creativity with functionality.Crafting responsive and visually appealing web designs to enhance user experience.Transforming ideas into engaging digital experiences with thoughtful web design.</p>
                                        </div>

                                   </div>
                              </div>
                              {/* 2 */}
                              <div className="Info-box d-flex justify-content-start">
                                   <div className='Box-Image'>
                                        <FontAwesomeIcon icon={faWebAwesome} />
                                   </div>
                                   <div>
                                        <div className='Box-heading'>
                                             <h3>Web Development</h3>
                                        </div>
                                        <div className='Box-para'>
                                             <p>Building fast, scalable, and responsive websites with clean and efficient code.
                                                  Turning creative designs into fully functional web applications.
                                                  Developing seamless digital experiences with modern web technologies.</p>
                                        </div>

                                   </div>
                              </div>
                              {/* 3 */}
                              <div className="Info-box d-flex justify-content-start">
                                   <div className='Box-Image'>

                                   </div>
                                   <div>
                                        <div className='Box-heading'>
                                             <h3>UI/UX Design</h3>
                                        </div>
                                        <div className='Box-para'>
                                             <p>Crafting user-centered UI/UX designs that blend creativity with usability.
                                                  Transforming ideas into engaging digital experiences through thoughtful UI/UX design.</p>
                                        </div>

                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}