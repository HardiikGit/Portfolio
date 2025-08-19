export default function ContactFn() {
     const ContactStyl = {
          padding: "50px 0px",
          borderTop: " 2px solid #333333",
          borderBottom: "2px solid #333333",
          background: "#252525",
          marginBottom: "30px",
     };
     const ParaStyl = { fontSize: "12px", color: "#aaa", fontWeight: "400" };
     return (
          <div className="MainContactSection" style={ContactStyl}>
               <div className="container">
                    <div className="HeadingBoxContact d-flex justify-space-between align-items-start">
                         <div class="MainHeading">
                              <h1>Contact Me</h1>
                         </div>
                         <div className="get-in-touch">
                              <p style={ParaStyl}>Get in Touch</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
