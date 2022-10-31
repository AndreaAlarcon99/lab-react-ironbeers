
import { Link } from "react-router-dom";

function BeersComponent({ beer }) {
    const {image_url, name, tagline, contributed_by} = beer
    return (
        <div className="card " style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-2 m-3">
              <img src={image_url} className="img-fluid" alt="Beer"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ tagline}</p>
                <p className="card-text"><small className="text-muted">Created by: {contributed_by}</small></p>
                <Link to={"/beers/"+beer._id}>View details</Link>
                                
              </div>
            </div>
          </div>
        </div>
    );
 }
       
export default BeersComponent