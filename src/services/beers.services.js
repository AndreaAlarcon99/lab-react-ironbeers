import axios from 'axios';

const apiUrl = "https://ih-beers-api2.herokuapp.com/beers";
const randomUrl = "https://ih-beers-api2.herokuapp.com/beers/random"

class BeersServices {
    getBeers() {
        return axios.get(apiUrl)
    }

     getBeer(beerId) {
        return axios.get(apiUrl + "/" + beerId)
     }
    
    randomBeer() {
        return axios.get(randomUrl)
    }

    addBeer(beer) {
        return axios.post(apiUrl + "/new", beer)
    }
}

const aptService = new BeersServices();
export default aptService;
