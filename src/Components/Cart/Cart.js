import React from 'react';

const Cart = (props) => {
   
    const population=props.population;
    console.log(population);
    let totalPopulation=0;
    for (let i = 0; i < population.length; i++) {
        const country = population[i];
     totalPopulation =totalPopulation +country.population;
        
    }
    
    return (
        <div>
            {/* <h2>this is cart : {population.length}</h2> */}
            <h2>Total Population : {totalPopulation}</h2>
        </div>
    );
};

export default Cart;