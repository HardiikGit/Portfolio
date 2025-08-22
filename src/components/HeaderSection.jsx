import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export default function HeaderSection() {
     // Navigation Bar Button
     const [isOpen, setIsOpen] = useState(false);

     // Hire Button
     const HireMe = () => {
          const Confirm = window.confirm("Are You Hire Me...?")
          if (Confirm) {
               window.open('/resume');
          }
          else {
               window.close('');
          }
     };

     return (
          <div className="MainHeaderSection">
               <div className="container">
                    <div className="navigation-fl d-flex justify-space-between align-items-center">

                         {/* Logo */}
                         <div className="header-logo" data-aos="fade-in">
                              <Link to="/" className="d-flex align-items-center">
                                   <div className="h-styl">
                                        <h4 className="d-flex align-items-center justify-content-center">H</h4>
                                   </div>
                                   <div className="Logo-name">
                                        <h4>
                                             Hardik
                                        </h4>
                                   </div>
                              </Link>
                         </div>

                         {/* Navigation Menu */}
                         <div className={`navigation-bar ${isOpen ? "Open" : ""}`}> { /* Ternary Operator Ternary operator ek shortcut if-else hai jo ek hi line me decision lene ke liye use hota hai. */}
                              {/* Close Button */}
                              <div className="crose-x-btn d-none">
                                   <button className="Close-x" onClick={() => setIsOpen(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                             <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                        </svg>

                                   </button>
                              </div>

                              <ul className="nav-items-fl d-flex justify-space-between align-items-center">
                                   <li className="nav-items">
                                        <Link data-aos="fade-in" to='/'>About Me</Link>
                                   </li>
                                   <li className="nav-items">
                                        <Link data-aos="fade-in" to='/resume'>Resume</Link>
                                   </li>
                                   <li className="nav-items">
                                        <Link data-aos="fade-in" to='/projects'>Project</Link>
                                   </li>
                                   <li className="nav-items">
                                        <Link data-aos="fade-in" to='/contactme'>Contact Me</Link>
                                   </li>
                                   <li className="hire-Button">
                                        <button data-aos="fade-in" className="hire-me" onClick={HireMe}>Hire Me</button>
                                   </li>
                              </ul>
                         </div>

                         {/* Open Button */}
                         <div className="Nav-open-btn d-none">
                              <button className="Toggle-btn" onClick={() => setIsOpen(true)} data-aos="fade-in">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd" />
                                   </svg>

                              </button>
                         </div>
                         {/* Overlay */}
                         <div className={`OverLay-Add d-none ${isOpen ? "Open" : ""}`}></div>
                    </div>
               </div>
          </div>

     );
}
