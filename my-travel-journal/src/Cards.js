
import './index.css';
export default function Cards(props) {
  return (

    <div className="card">
      <div className="div-padding">
         <img src={`./${props.img}`} className="image-handle" />
      </div>


      <div className="card-info">
         <div className="card-core-info">
            <img src="map-icon.png" className="map-icon"/> 
            <h3 className="location-handle">{props.title}</h3>
            <a className="map-info" href ={props.googleMapsUrl}> View on Google Maps
            </a> 
          </div>
         <div className="location-name">
             <p>{props.location}</p> 
          </div>   
          <div className="date-and-info">
             <h2 className="date">{props.startDate} - {props.endDate}</h2> 
             <p className="location-description">
             {props.description}
             </p>
          </div>    
        </div>
        
    </div>  

 
 
     
  );
}

 