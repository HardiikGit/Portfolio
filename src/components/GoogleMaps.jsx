import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMapSection() {
     const MapStyles = {
          height: "180px", width: "100%",
     };

     const defaultCenter = {
          // My Location 
          lat: 30.311768,
          lng: 77.047554
     };
     return (
          <div className="MainMapSection">
               <div className="container">
                    <div className="Frame-Styl" data-aos="fade-in">
                         <LoadScript googleMapsApiKey="AIzaSyB6RYlCsxbZctRgAqYDcrQNSwUrPsaaT0M">
                              <GoogleMap mapContainerStyle={MapStyles} zoom={15} center={defaultCenter}>
                                   <Marker position={defaultCenter} />
                              </GoogleMap>
                         </LoadScript>
                    </div>
               </div>
          </div>
     );
}