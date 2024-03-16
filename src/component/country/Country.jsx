import { useState } from 'react';
import './country.css'
const Country = ({country , handleVisitedCountries, handleVisitedFlag }) => {
    const {name , flags ,continents, capital, population, cca3} = country
    //console.log(country)

    const [visited , setVisited] = useState (false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    //console.log(handleVisitedCountries);

    // const passWithParams = () => {
    //     handleVisitedCountries(country)
    // }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color : visited ? 'purple' : 'Green'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt=""/>
            <h3>Continents : {continents}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Population : {population}</h3>
            <h3><small>Code : {cca3}</small></h3>
            <button type="button" onClick={handleVisited}>{visited ? 'Visited' : ' Going'} </button>
            {visited ? ' I have visited ' : '   Need to visit  '}
        <button onClick={() => handleVisitedCountries(country)}>Mark</button>
        <hr />
        <button type="button" onClick={() =>handleVisitedFlag(country.flags.png)}>Add Flag</button>
        </div>
    );
};

export default Country;