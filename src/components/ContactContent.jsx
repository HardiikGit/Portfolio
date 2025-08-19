import '../css/ContactContent.css'

import image1 from '../images/Location.png'
import image2 from '../images/Phone.png'
import image3 from '../images/Mail.png'

export default function ContactContent() {
     const mainBox = { marginTop: '40px' }
     return (
          <div className="MainContactSection" style={mainBox}>
               <div className="container">
                    <div className="Contact-fl d-flex align-items-center ">
                         <div className='d-flex'>
                              <div>
                                   <img src={image2} className='img-contain' alt="Mobile-Image" />
                              </div>
                              <div className='contact-styl-p'>
                                   <p>+91 82954-498963</p>
                              </div>
                         </div>
                         <div className='d-flex'>
                              <div>
                                   <img src={image1} className='img-contain' alt="Location-Image" />
                              </div>
                              <div className='contact-styl-p'>
                                   <p>Distric : Ambala , State : Haryana</p>
                              </div>
                         </div>
                         <div className='d-flex'>
                              <div>
                                   <img src={image3} className='img-contain' alt="Mail-Image" />
                              </div>
                              <div className='contact-styl-p'>
                                   <p>hardiik003@gmail.com</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
}