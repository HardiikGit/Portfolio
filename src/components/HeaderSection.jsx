import "../css/Header.css";

export default function HeaderSection() {
     return (
          <div className="MainHeaderSection">
               <div className="container">
                    <div className="col-lg-12">
                         <div className="navigation-fl d-flex justify-space-between align-items-center">
                              <div className="header-logo">
                                   <a href="#" className="d-flex align-items-center">
                                        <div className="h-styl">
                                             <h4 className="d-flex align-items-center justify-content-center">H</h4>
                                        </div>
                                        <div className="Logo-name">
                                             <h4>
                                                  Alex <span className="Bold-hd">Smith</span>
                                             </h4>
                                        </div>
                                   </a>
                              </div>
                              <div className="navigation-bar">
                                   <ul className="nav-items-fl d-flex justify-space-between align-items-center">
                                        <li className="nav-items">
                                             <a href="#">About Me</a>
                                        </li>
                                        <li className="nav-items">
                                             <a href="#">Resume</a>
                                        </li>
                                        <li className="nav-items">
                                             <a href="#">Project</a>
                                        </li>
                                        <li className="nav-items">
                                             <a href="#">Contact Me</a>
                                        </li>
                                        <li className="hire-Button">
                                             <button className="hire-me">
                                                  Hire Me
                                             </button>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
