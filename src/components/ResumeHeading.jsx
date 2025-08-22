export default function ResumeHeading() {
     const ResumeHeading = {
          padding: "50px 0px",
          borderTop: " 2px solid #333333",
          borderBottom: "2px solid #333333",
          background: "#252525",
          marginBottom: "30px",
     };
     const Parastyl = { fontSize: "12px", color: "#aaa", fontWeight: "400" };
     return (
          <div className="MainResumeSection" style={ResumeHeading}>
               <div className="container">
                    <div className="HeadingBoxResume d-flex justify-space-between" data-aos="fade-in">
                         <div class="MainHeading">
                              <h1>Resume</h1>
                         </div>
                         <div className="get-in-touch">
                              <p style={Parastyl}>8 Months Experience</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
