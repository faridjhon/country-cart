import React from 'react';
import './Country.css';

const Country = (props) => {
   
    const{capital,population,flags,name,area}=props.pd;
    const handleAddToCountry=props.handleAddToCountry;
    
    
    return (
        <div className="main-div">
            <h2>{name.common}</h2>
            <img className="image" src={flags.png} alt="" />
            <h3>City Name : {capital}</h3>
            <h3>Population : {population}</h3>
            <h4>Area :{area}</h4>
            <button className="main-btn" onClick={()=>handleAddToCountry(props.pd)}>Click hire </button>
            
            <br></br>
            <br></br>
            
            
        </div>
    );
};

export default Country;