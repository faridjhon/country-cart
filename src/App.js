import './App.css';
import {useEffect, useState} from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [country, setCountry] = useState([]);
  const [population,setPopulation] = useState('');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountry(data))

  },[])

const handleAddToCountry =(pd)=>{
 
  const newPopulatin =[...population,pd];
  setPopulation(newPopulatin);

}

  return (
    <div className="App">
      <h1>Country Loaded Data :{country.length}</h1>
      <h3>Selected Country : {population.length}</h3>
      <Cart population={population}></Cart>
      <ul>


      {
        country.map(country=><Country 
          pd={country}
          handleAddToCountry={handleAddToCountry}
          ></Country>)
      }
      </ul>
     
    </div>
  );
}

export default App;
