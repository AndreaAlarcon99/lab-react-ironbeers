import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Beers from "./pages/Beers"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import Navbar from "./pages/Navbar"
import BeerDetail from "./pages/BeerDetail"



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';


function App() {


 
   
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/beers" element={<Beers />} /> 
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />  
        <Route path="/new-beer" element={<NewBeer/> } />    
      </Routes>
     
    </div>
  );
}

export default App;
