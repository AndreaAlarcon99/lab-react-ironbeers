import beerFoto from "../assets/beers.png"
import newBeerFoto from "../assets/new-beer.png"
import randomBeerFoto from "../assets/random-beer.png"
import { Link } from "react-router-dom";




function HomePage() {
    return (
        <div >
            <Link to="/beers" style={{textDecoration:"none", color:"black"}}>
            <div className="card mb-3">
                <img src={beerFoto} className="card-img-top" alt="beer"/>
                <div className="card-body">
                    <h5 className="card-title">All Beers</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
                </Link>
            <Link to="/random-beer" style={{textDecoration:"none", color:"black"}}>

            <div className="card mb-3">
                <img src={newBeerFoto} className="card-img-top" alt="beer"/>
                <div className="card-body">
                    <h5 className="card-title">Random Beer</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
                </Link>
            <Link to="/new-beer" style={{textDecoration:"none", color:"black"}}>

            <div className="card mb-3">
                <img src={randomBeerFoto} className="card-img-top" alt="beer"/>
                <div className="card-body">
                    <h5 className="card-title">New Beer</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                </div>
                </Link>
        </div>
        
    )
}

export default HomePage