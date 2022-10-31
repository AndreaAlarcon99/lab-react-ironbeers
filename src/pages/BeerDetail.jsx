import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import aptService from "../services/beers.services";

function BeerDetail() {

     const {beerId} = useParams();
    const [beer, setBeer] = useState({});

    useEffect(()=>{
        aptService.getBeer(beerId)
        .then(result => {
            setBeer(result.data);
        })
    })

    return (
        <div>
        <h1>Information about {beer.name}</h1>
        <div class="card mb-3 " style={{maxWidth: "540px"}}>
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img src={beer.image_url} class="img-fluid rounded-start" alt="beer"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{ beer.name}</h5>
                        <p className="card-text">{ beer.tagline}</p>
                        <p class="card-text">{beer.first_brewed}</p>
                        <p class="card-text">{beer.attenuation_level}</p>
                        <p class="card-text">{beer.description}</p>
                        <p className="card-text"><small className="text-muted">Created by: {beer.contributed_by}</small></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
            
        
    )
}
export default BeerDetail