import { useEffect } from 'react';
import { useState } from 'react'
import Country from './country/Country';
import './countries/Countries.css'


const Countries = () => {
    const [countries , setCountries] = useState ([]);

    const [visitedCountries , setVisitedCountries] = useState ([])

    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        //console.log('add this as visited')
       // console.log(country)
        //react did not work as push 
        // need to spread and use comma to push to add this
        const newVisitedCountry = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountry);

    }

    const handleVisitedFlag = flag =>{
        console.log('flag added')
        const newVisitedFlag = [...visitedFlag , flag];
        setVisitedFlag(newVisitedFlag);
    }

    return (

        // visited country
        <div >
            <div>
            <h2>React world tour :: Total countries :: {countries.length}</h2>
                <h2>Visited Countries : {visitedCountries.length}</h2>
                <ul>
                    {visitedCountries.map(country => 
                    <li key={country.cca3}>{country.name.common}
                    </li>)}
                    <li></li>
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map((flag , idx)=> <img key={idx} src={flag}></img>)
                    //2nd parameter as index
                }
            </div>

            {/* Display visited country */}
            <div className='country-container'>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedFlag = {handleVisitedFlag}
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}>
                    </Country>)
            }
            </div>

        </div>
    );
};

export default Countries;