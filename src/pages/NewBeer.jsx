import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aptService from "../services/beers.services.js"

function NewBeer() {
    
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState()
    const [contributed_by, setContributed_by] = useState("")
  const navigate= useNavigate()  
    const submitForm = (e) => {
         
        e.preventDefault();
       
       const beerBody = {            
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
       } 
        aptService.addBeer(beerBody)
            .then(result => {
                setName("");
                setTagline("")
                setDescription("")
                setFirst_brewed("")
                setBrewers_tips("")
                setAttenuation_level("")
                setContributed_by("")
            })
            navigate("/beers")
     }
    
    const nameHandler = (e)=> {
        setName(e.target.value);
    }

    const taglineHandler = (e)=> {
        setTagline(e.target.value);
    }
    const descriptionHandler = (e)=> {
        setDescription(e.target.value);
    }
    const brewedHandler = (e)=> {
        setFirst_brewed(e.target.value);
    }

    const tipsHandler = (e)=> {
        setBrewers_tips(e.target.value);
    }

    const levelHandler = (e)=> {
        setAttenuation_level(e.target.value);
    }

    const contributtionHandler = (e)=> {
        setContributed_by(e.target.value);
    }

    return (
        <div>
            <h1>Create a new beer</h1>
            <form onSubmit={submitForm}>

            
            <div className="form-floating mb-3">
                <input value={ name} type="text" className="form-control" id="userName" placeholder=" " onChange={nameHandler} />
                <label for="userName">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input value={ tagline} type="text" className="form-control" id="tagline" placeholder=" " onChange={taglineHandler}/>
                <label for="tagline">Tagline</label>
            </div>
            <div className="form-floating">
                <textarea value={description} className="form-control mb-3" placeholder=" " id="description" style={{height: "100px"}} onChange={descriptionHandler}></textarea>
                <label for="description">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input value={first_brewed} type="text" className="form-control" id="first_brewed" placeholder=" " onChange={brewedHandler}/>
                <label for="first_brewed">First Brewed</label>
            </div>
            <div className="form-floating mb-3">
                <input value={brewers_tips} type="text" className="form-control" id="first_brewed" placeholder=" " onChange={tipsHandler}/>
                <label for="brewers_tips">Brewers Tips</label>
            </div>
            <div className="form-floating mb-3">
                <input value={ attenuation_level} type="number" className="form-control" id="attenuation_level" placeholder=" " onChange={levelHandler} />
                <label for="attenuation_level">Attenuation Level</label>
            </div>
            <div className="form-floating mb-3">
                <input value={ contributed_by} type="text" className="form-control" id="contributed_by" placeholder=" " onChange={contributtionHandler} />
                <label for="contributed_by">Contributed by</label>
            </div>
                <button type="submit">Add new</button>
                </form>

        </div>
    )
}
export default NewBeer