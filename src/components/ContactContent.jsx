import '../css/ContactContent.css'
import image1 from '../images/Location.png'
import image2 from '../images/Phone.png'
import image3 from '../images/Mail.png'

export default function ContactContent() {
     const mainBox = { padding: '50px 0px' }
     return (
          <div className="MainContactSection" style={mainBox}>
               <div className="container">
                    <div className="ContactMeSection-fl d-flex justify-space-between flexwrap">
                         <div className="Adress-fl d-flex flexcolumn" data-aos="fade-in">
                              <div className='Contact-Box d-flex'>
                                   <div className='ContactLogo'>
                                        <img src={image2} className='img-contain' alt="Mobile-Image" />
                                   </div>
                                   <div className='Contact-Info'>
                                        <div className='contact-h3'>
                                             <h3>+91 82954-48963</h3>
                                        </div>
                                        <div className='contact-styl-p'>
                                             <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className='Contact-Box d-flex'>
                                   <div className='ContactLogo'>
                                        <img src={image1} className='img-contain' alt="Location-Image" />
                                   </div>
                                   <div className='Contact-Info'>
                                        <div className='contact-h3'>
                                             <h3>Ambala</h3>
                                        </div>
                                        <div className='contact-styl-p'>
                                             <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className='Contact-Box d-flex'>
                                   <div className='ContactLogo'>
                                        <img src={image3} className='img-contain' alt="Mail-Image" />
                                   </div>
                                   <div className='Contact-Info'>
                                        <div className='contact-h3'>
                                             <h3>hardiik003@gmail.com</h3>
                                        </div>
                                        <div className='contact-styl-p'>
                                             <p>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className='Contact-Input-Area'>
                              <div class="Sub-Heading" data-aos="fade-in">
                                   <h2 class="relative">Contact Me</h2>
                              </div>
                              <div className="Input-Contact-Area d-flex flexcolumn" data-aos="fade-in">
                                   <div className='Input-Box'>
                                        <input type="text" placeholder='Full Name' />
                                   </div>
                                   <div className='Input-Box'>
                                        <input type="email" placeholder='Email Address' />
                                   </div>
                                   <div className='Input-Box'>
                                        <input type="text" placeholder='Subject' />
                                   </div>
                                   <div className='Text-Area'>
                                        <textarea name="" id="" placeholder='Message'></textarea>
                                   </div>
                                   <div className='Contact-btn'>
                                        <button className='Submit-Button Download-CV'>
                                             Send Message
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
}