import { useEffect, useState } from "react";
import BeersComponent from "../components/BeersComponent.jsx";
import aptService from "../services/beers.services.js"

function Beers() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        aptService.getBeers()
            .then(results => {
            setBeers(results.data)
        })
    }, [])
    
    return (
         <div className="container">
        <h1>Beers list</h1>
            <div className="row justify-content-center">
                {beers.map(beer => <BeersComponent beer={beer}  key={beer._id}/>)}
            </div>
        </div>
    )
}
export default Beers
