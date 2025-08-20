import '../css/Footer.css'

export default function Footer() {
     return (
          <div className="FooterSection">
               <div className="container">
                    <div className="Footer d-flex align-items-center justify-space-between">
                         <div className="social-links d-flex align-items-center">
                              <div className="social-name"><a href="https://github.com/Hardiik-git">Github</a></div>
                              <div className="social-name"><a href="https://www.linkedin.com/in/har-dik-033229363/">Linkedin</a></div>
                              <div className="social-name"><a href="#">Projects</a></div>
                         </div>
                         <div className='copyright'>
                              <p>© 2024 All rights reserved.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}