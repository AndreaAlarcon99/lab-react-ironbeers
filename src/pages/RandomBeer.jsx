import aptService from "../services/beers.services.js"
import { useEffect, useState } from "react";


function RandomBeer() {
    const [beers, setBeers] = useState([])

     useEffect(() => {
        aptService.randomBeer()
            .then(results => {
            setBeers(results.data)
        })
    }, [])

    return (
      <div>
        <h1>Your random beer is {beers.name}</h1>
        <div class="card mb-3 " style={{maxWidth: "540px"}}>
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img src={beers.image_url} class="img-fluid rounded-start" alt="beers"/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{ beers.name}</h5>
                        <p className="card-text">{ beers.tagline}</p>
                        <p class="card-text">{beers.first_brewed}</p>
                        <p class="card-text">{beers.attenuation_level}</p>
                        <p class="card-text">{beers.description}</p>
                        <p className="card-text"><small className="text-muted">Created by: {beers.contributed_by}</small></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default RandomBeer