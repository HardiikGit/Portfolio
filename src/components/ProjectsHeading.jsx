export default function ProjectHeading() {
     const ProjectStyl = {
          padding: "50px 0px",
          borderTop: " 2px solid #333333",
          borderBottom: "2px solid #333333",
          background: "#252525",
          marginBottom: "30px",
     };

     return (
          <div className="MainProjectSection" style={ProjectStyl}>
               <div className="container">
                    <div class="MainHeading">
                         <h1>Projects</h1>
                    </div>
               </div>
          </div>
     );
}
